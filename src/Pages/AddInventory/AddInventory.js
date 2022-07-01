import React from 'react';
import { useForm } from 'react-hook-form';
import {useAuthState} from 'react-firebase-hooks/auth'
 import auth from '../../Firebase.init'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 
const AddInventory = () => {
   
    const { register, handleSubmit, reset } = useForm();
    const [user] =useAuthState(auth)
   
    // const imgStorageKey = 'ff4c938471ffc70932bc22ba56c54e31'
    
    const onSubmit = data => {
      
        console.log(data)
        const url = 'http://localhost:4000/inventoryItems';
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data,user)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            toast('Your Product Successfully added')
            reset()
        } )
    };
    return (
        <div className='w-50 mx-auto my-4 py-5 px-5 mt-3'>
            <h2 className='mb-4 text-center' style={{color:'#4a509b'}}>Please add a Product</h2>
            <form className='d-flex flex-column px-4 shadow-lg p-4' onSubmit={handleSubmit(onSubmit)}>
           
                <input className='mb-2 py-2 px-2 border border-2 border-secondary' placeholder='email' {...register("email", {value:user.email}, { required: true, maxLength: 20 })} />
                <input className='mb-2 py-2 px-2 border border-2 border-secondary' placeholder='ProductName' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 py-2 px-2 border border-2 border-secondary' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 py-2 px-2 border border-2 border-secondary' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 py-2 px-2 border border-2 border-secondary py-2' placeholder='Photo URL' type="file" {...register("img")} />
               <input className='border-secondary btn-secondary border-0 py-2 w-50 mx-auto mt-3' type="submit" value="Add Service" /> 
               <ToastContainer />
            </form>
        </div>
    );

};

export default AddInventory;