import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyItems = () => {
    const [inventories, setInventories] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:4000/myItems')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:4000/myItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console(data);
                const remaining = inventories.filter(manageInventory => manageInventory._id._id !== id);
                setInventories(remaining);
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



         
       
       
        </div>
        
        </div>
    </div>
    );
};

export default MyItems;