import React, { useEffect, useState } from 'react';
// import '../ManageInventory/ManageInventory.css'
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    const [page , setPage] = useState(0)
    const [pageCount , setPageCount] = useState(0)
    const [size, setSize] = useState(5)
   
  
  
    useEffect( ()=>{
        fetch(`https://vast-fjord-19368.herokuapp.com/inventoryItems?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [page, size])

  
    useEffect( ()=>{
        fetch('https://vast-fjord-19368.herokuapp.com/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count
            const pages = Math.ceil(count/5)
            setPageCount(pages)});
        
           
    }, [])

   

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://vast-fjord-19368.herokuapp.com/inventoryItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    console.log('deleted')
                    const remaining = inventories.filter(manageInventory => manageInventory._id !== id);
                    setInventories(remaining);
                }
               
            })
        }
    }

    return (
         <div className='container mx-auto w-100'>
        
        <h1 className='my-5 text-center' style={{color:'#41478a'}}> All Inventory Products</h1>
        <div className="Manageinventory-container mx-auto text-center">
       
        <Table striped bordered hover>
     
        <thead  className="text-center" style={{color:'#315167'}}>
        <tr>
          <th>Name</th>
         <th>Price</th>
          <th>Quantity</th>
          <th>Update</th>
         
        </tr>
      </thead>
      <tbody className=''>
      {/* key = {manageInventory._id} */}
        {
            inventories.map(manageInventory => 
              <tr className='text-center '>
              
              <td className=''>{manageInventory.name}</td>
             <td className=''>{manageInventory.price}</td>
              <td className=''>{manageInventory.quantity}</td>
              <td ><Button onClick={() => handleDelete(manageInventory._id)} className='btn btn-danger  '> <FontAwesomeIcon icon = {faTrashCan} /></Button></td>
             
            </tr>
          
         )
}

   </tbody>
            
    </Table>
               
               <div>
                {
                    [...Array(pageCount).keys()]
                    .map(number=> 
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <ul className=" pagination justify-content-center d-inline-block  "><li className="page-item me-4"><Button onClick={()=> setPage(number)} className="page-link" >{number+1}</Button></li> </ul> 
                        )
                }
                
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
                 
               </div>
      
 <div>
        <Link to="/addInventory">
                   <div className='text-center'>
                   <button className='btn-lg  my-5 px-5 py-2 fs-4  text-white border-0 shadow-lg' style={{backgroundColor:'#473167'}}>Add Item</button>
                   </div>
                   
                </Link>
        </div>
        </div>
        </div>
    
    )
}

;

export default ManageInventories;