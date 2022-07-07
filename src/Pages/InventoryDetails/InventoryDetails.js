import React, {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory , setInvntory] = useState({})
   const [isReload , setIsReload] = useState(false)
   const [quantity , setQuantity] = useState({})

    useEffect( ()=>{
        const url = `https://vast-fjord-19368.herokuapp.com/inventoryItem/${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setInvntory(data))
    }, [isReload, id])


    const handleAddQuantity = event => {
        event.preventDefault()
        const newQuantity = parseInt(event.target.cquantity.value)
        const previousQuantity = parseInt(inventory.quantity)
        const quantity = newQuantity+previousQuantity 
        const updateQuantity = { quantity}
        event.target.reset()
       
       
          const url = `https://vast-fjord-19368.herokuapp.com/inventoryItem/${id}`;
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify( updateQuantity)
          })
          .then(res=> res.json())
          .then(newQuantity =>{
              console.log(newQuantity)
             setQuantity(newQuantity )
             setIsReload(!isReload)
          } )
      };

   
      const deliveredHandler = () =>{
       const previousQuantity = parseInt(inventory.quantity)
       const quantity = previousQuantity-1 
        const updateQuantity = { quantity}
       
        const url = `https://vast-fjord-19368.herokuapp.com/inventoryItem/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updateQuantity)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
           setQuantity(data )
           setIsReload(!isReload)
        } )
    };
    



    return (
       
       <div className='container w-50 py-5 text-center' >
          
          <div> <h2 className='my-4' style={{color:'#4a509b'}}>Welcome to detail</h2>

          <div className="card mb-5 shadow-lg py-4" >
  <div className="row g-0">
    <div className="col-md-4">
    <img className='h-100 img-fluid  w-100 ps-4' src={inventory.img} alt="" />
    
    </div>
    <div className="col-md-5">
      <div className="card-body text-start ps-4">
        <h5 className="card-title">Product Name: {inventory.name}</h5>
        <h5 className="card-text">Supplier Name: {inventory.supplier}</h5>
        <h5>Product Price: {inventory.price}</h5>
        <h5>Product Quantity: {inventory.quantity}</h5> 
        <diV className='d-flex flex-column pe-5 align-items-center mt-4 justify-content-between'>
        <button onClick={() => deliveredHandler('quantity')} className='mt-2 btn-danger'>Delivered</button>
        <form className='d-flex flex-column my-3' onSubmit={handleAddQuantity}>
         <input className='mb-2' placeholder='quantity ' type="number" name='cquantity' />
         <input type="submit"  value='Restock the items'/>  
          </form>
        </diV>
      
      </div>
    </div>
  </div>
</div>
</div>
            
</div>
    );
};
export default InventoryDetails;
