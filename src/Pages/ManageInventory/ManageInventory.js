import React from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageInventory = ({manageInventory}) => {
    const { name,  price, supplier, quantity} = manageInventory;
    const handleDelete = id => {
      const proceed = window.confirm('Are you sure?');
      if(proceed){
          const url = `http://localhost:4000/inventoryItems/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
            //   const remaining = inventories.filter(manageInventory => manageInventory._id._id !== id);
            //   setInventories(remaining);
          })
        }
    return (
        <div className='text-center'>
           
            <Table striped bordered hover>
  
  <tbody className='text-center mt-2'>
    <tr className='text-center'>
      <td> {name}</td>
      <td>Supplier:  {supplier}</td>
      <td> Price: {price}</td>
      <td> Quantity:  {quantity}</td>
      <td><Button onClick={() => handleDelete(manageInventory._id)} className='btn btn-danger  '>Delete</Button> </td>
     
    </tr>
    
</tbody>
</Table>
          
        </div>
        
    );
};

}
export default ManageInventory;