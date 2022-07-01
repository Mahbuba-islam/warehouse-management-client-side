import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase.init';

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    

   
    const onSubmit = data => {
        
console.log(data)
        const url = 'http://localhost:4000/myItems';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            reset(result) ;
        }, [reset] )
    };
    return (
        <div className='w-50 mx-auto'>
        <h2>Please add a service</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input type="submit" value="Add Service" />
        </form>
    </div>
    );
};

export default AddItems;