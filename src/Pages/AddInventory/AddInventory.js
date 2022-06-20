import React from 'react';
import { useForm } from 'react-hook-form';
import {useAuthState} from 'react-firebase-hooks/auth'
 import auth from '../../Firebase.init'

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
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            alert('users added successfully')
            reset()
        } )
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" disabled value={user?.email} class="input w-full max-w-xs " />
                <input className='mb-2' placeholder='ProductName' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="file" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );

};

export default AddInventory;