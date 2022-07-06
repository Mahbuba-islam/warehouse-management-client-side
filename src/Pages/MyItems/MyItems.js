import React, { useEffect, useState } from 'react';
import '../ManageInventory/ManageInventory.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyItems = () => {
    const [user] = useAuthState(auth);
   const navigate = useNavigate()
    const [myItems, setMyItems] = useState([]);
   
    useEffect( ()=>{
      
      if(user){
        const email = user.email
        console.log(email)
        const url = `http://localhost:4000/myItems?email=${email}`
     
        fetch(url, {
          headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => {
        if(res.status === 401 || res.status === 403){
          navigate('/login')
        } 
        return res.json()
       })
        .then(data => {
          setMyItems(data);
      
        })
    
       }
    
        
    }, [user])

    const handleDelete = id =>{
      const proceed = toast.warn(<div><h4>Are You Sure! </h4> <strong> You really want to remove your product</strong>
      </div>);
        if(proceed){
            const url = `http://localhost:4000/myItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    console.log('deleted')
                    const remaining = myItems.filter(myItems => myItems._id !== id);
                    setMyItems(remaining);
                }
               
            })
        }
    }

    return (
      <div className='container mx-auto w-100'>
        
      <h1 className='my-5 text-center' style={{color:'#41478a'}}> My Products:{myItems.length}</h1>
      <div className="Manageinventory-container mx-auto text-center">
     
      <Table striped bordered hover>
   
      <thead  className="text-center" style={{color:'#315167'}}>
      <tr>
      <th></th>
        <th>Name</th>
       <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        
       
      </tr>
    </thead>
    <tbody className=''>
        {
            myItems.map((myItem, index) => 
             
              <tr className='text-center '>
                <td key={index}>{myItem.index}</td>
              <td>{myItem.name}</td>
              <td>{myItem.price}</td>
              <td>{myItem.quantity}</td>
              <td><Button onClick={() => handleDelete(myItem._id)} className='btn btn-danger'><FontAwesomeIcon icon = {faTrashCan} /></Button></td>
            </tr>
          
         )
}

   </tbody>
            
    </Table>
               
    <ToastContainer /> 
 <div>
        <Link to="/addInventory">
                   <div className='text-center'>
                   <button className='btn-lg  my-5 px-5 py-2 fs-4  text-white border-0 shadow-lg' style={{backgroundColor:'#473167'}}>Add Item</button>
                   </div>
                   
                </Link>
        </div>
        </div>
        </div>
    
    );
};

export default MyItems;