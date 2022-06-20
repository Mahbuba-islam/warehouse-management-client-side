import React, { useEffect, useState } from 'react';
// import '../ManageInventory/ManageInventory.css'
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


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
         <div>
        
        <h1 className=' text-center mt-3 py-5' style={{color:'#41478a'}}> All Inventory Products</h1>
        <div className="Manageinventory-container mx-5 px-5">
       
        <Table responsive="sm">
     
        <thead className=' border border-4 text-center ' style={{color:'#315167'}}>
        <tr>
          <th className='border border-2 ' >Name</th>
          <th className='border border-2 '>Supplier</th>
          <th className='border border-2 '>Price</th>
          <th className='border border-2 '>Quantity</th> 
          <th className='border border-2 '>Update</th>
        </tr>
      </thead>
      <tbody className='border border-4  '>
        {
            inventories.map(manageInventory => 
              <tr className='text-center '>
              <td className='border border-2 '>{manageInventory.name}</td>
              <td className='border border-2'>{manageInventory.supplier}</td>
              <td className='border border-2'>{manageInventory.price}</td>
              <td className='border border-2'>{manageInventory.Quantity}</td>
              <td className='className='border border-2><Button onClick={() => handleDelete(manageInventory._id)} className='btn btn-danger  '>X</Button></td>
            </tr>
          
         )
}

   </tbody>
            
    </Table>
               
      
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