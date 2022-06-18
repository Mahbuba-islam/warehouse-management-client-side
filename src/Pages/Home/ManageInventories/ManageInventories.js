import React, { useEffect, useState } from 'react';
// import '../ManageInventory/ManageInventory.css'


import { Link } from 'react-router-dom';


import { Button, Table } from 'react-bootstrap';

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:4000/inventoryItems')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:4000/inventoryItems/${id}`;
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
        <div id="inventoryItems" className='container'>
        <div className="row">
        <h1 className='text-primary text-center mt-3 py-5'> All Inventory Products</h1>
        <div className="Manageinventory-container p-3">
            
        {
            inventories.map((manageInventory) =>  
                <div key = {manageInventory.id}  className='text-center'>
           
                <Table striped bordered hover>
      
      <tbody className='text-center mt-2'>
        <tr className='text-center'>
          <td> {manageInventory.name}</td>
          <td>Supplier:  {manageInventory.supplier}</td>
          <td> Price: {manageInventory.price}</td>
          <td> Quantity:  {manageInventory.quantity}</td>
          <td><Button onClick={() => handleDelete(manageInventory._id)} className='btn btn-danger  '>Delete</Button> </td>
         
        </tr>
        
     </tbody>
     </Table>
        
     </div>)}

{/* {
            inventories.map(manageInventory => <ManageInventory
            key = {manageInventory._id}
            manageInventory = {manageInventory}>
                
            </ManageInventory>)
        } */}

         
       
       
        </div>
        <Link to="/addInventory">
                    <button className='btn btn-primary my-5 text-center p-4 ms-5'>Add Item</button>
                </Link>
        </div>
    </div>
    );
};

export default ManageInventories;