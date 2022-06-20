import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory , setInvntory] = useState({})
   const [isReload , setIsReload] = useState(false)
   const [updatedQuantity , setQuantity] = useState(inventory.quantity)
   console.log(updatedQuantity )
   


    useEffect( ()=>{
        const url = `http://localhost:4000/inventoryItem/${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setInvntory(data))
    }, [isReload, id])


const handleAddQuantity = event => {
  event.preventDefault()
  const quantity = event.target.quantity.value
  const updateQuantity = {quantity}
 

  console.log(quantity)
    const url = `http://localhost:4000/inventoryItem/${id}`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateQuantity)
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        const previousQuantity = inventory.quantity
        const newQuantity = [...previousQuantity, data]
       
        //  newQuantity = previousQuantity + data
        setQuantity(newQuantity )
         console.log(data)
       setIsReload(!isReload)
    } )
};
   

    return (
       
       <div className='container w-50 py-5 text-center' >
          
          <div> <h2>Welcome to detail</h2>
                
                <img  src={inventory.img} alt="" />
                <p>{id}</p> 
            <h2>{inventory.name}</h2>
            <p>Supplier Name: {inventory.supplier}</p>
            <h4>Price: {inventory.price}</h4>
            <h3>Quantity:{inventory.quantity}</h3> 
            <p><small>{inventory.description}</small></p>
            <h5>Sold</h5>
            
          <form className='d-flex flex-column' onSubmit={handleAddQuantity}>
         <input className='mb-2' placeholder='quantity ' type="number" name='quantity' />
         <input type="submit"  value='Restock the items'/>  
          </form>
           </div>
            
            <div className='text-center'>
                <Link to="/manageInventories">
                    <button  className='btn btn-primary my-5 '>Manage Inventories</button>
                </Link>
            </div>
           
            
        </div>
    );
};

export default InventoryDetails;