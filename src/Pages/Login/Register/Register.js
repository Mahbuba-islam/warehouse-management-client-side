import React from 'react';
import { useCreateUserWithEmailAndPassword,  useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin';

const Register = () => {
  
   
         // useFrom
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    // signin with email
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
   //    redirect another page
  //  const navigate = useNavigate;


    //   updatePropile
  const [updateProfile, updating, updateError, photoURL] = useUpdateProfile(auth);
  
    //   Loading
  if (loading || updating) {
    return <Loading></Loading>;
  }    
    //    signin error
  let signInError;
      
    //  errors
  if (error||updateError) {
    return (
     signInError=<p className='text-danger'>{error?.message || updateError.message}</p>
     
    );
  }
  

  
  
    //  from submit
   const onSubmit = async data => {
   console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
   await updateProfile({ displayName:data.name, photoURL });
    // navigate('/inventoryDetails')
   
    
    // reset()
  };
 
 

    return (
       <div className=' h-100 mt-5 mb-5 pt-5 pb-5'>
        <div className="card mx-auto container shadow-lg border-0" style={{width:'30rem'}}>
        <h5 className="card-title text-center pt-3">Sign Up</h5>
  <div className="card-body ">
 
  <form className='' onSubmit={handleSubmit(onSubmit)} >
     
     {/* name */}
  <div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="Name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" 
    {...register("name", {
      required:{
        value:true,
        message:'name is required'
      },
     })} />
    {errors.name?.type === 'required' && <span className='text-danger'>{errors.name.message}</span>}
   </div>
      
      {/* email */}
  <div className="mb-3">
    
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    {...register("email", {
      required:{
        value:true,
        message:'email is required'
      },
    
      pattern:{
        value: /[A-Za-z]{3}/,
        message:'provide a valid Email'
      
      }
      })} />
    {errors.email?.type === 'required' && <span className='text-danger'>{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span className='text-danger'>{errors.email.message}</span>}
   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
   
     {/* password */}
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
    {...register("password", {
      required:{
        value:true,
        message:'password is required'
      },
    
     minLength:{
        value: 6,
        message:'password must be 6 chracters or long'
      
      }
      })} />
    {errors.password?.type === 'required' && <span className='text-danger'>{errors.password.message}</span>}
    {errors.password?.type === 'minLength' && <span className='text-danger'>{errors.password.message}</span>}
  
  </div>
  <div className='text-center py-2 w-100'>
  {signInError}
  <button type="submit" value='SignUp' className="btn btn-primary px-5">Sign Up</button>
 </div>
  
 
 

  </form>
  <p>Already have an Account <Link to={'/Login'}>please logIn</Link></p>
</div>
     
     {/* dividers */}
   <div className="row">
    <div className="col"><hr></hr></div>
    <div className="col-auto fw-bold">OR</div>
    <div className="col"><hr></hr></div>
</div>
       {/* google login */}
<SocialLogin></SocialLogin>
</div>
 </div>
       
    )

    
}

export default Register;