// import React, { useRef } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import auth from '../../Firebase.init'
// import Loading from '../Shared/Loading/Loading';

// import SocialLogin from '../Login/SocialLogin';

// const Login = () => {
//     const emailRef = useRef('');
//     const passwordRef = useRef('');
//     const navigate = useNavigate();
//     const location = useLocation();

//     let from = location.state?.from?.pathname || "/";
//     let errorElement;
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);
//     const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

//     if (loading || sending) {
//         return <Loading></Loading>
//     }


//     if (user) {
//         navigate(from, { replace: true });
//     }

//     if (error) {
//         errorElement = <p classNameName='text-danger'>Error: {error?.message}</p>
        
//     }
   

//     const handleSubmit = event => {
//         event.preventDefault();
//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;

//         signInWithEmailAndPassword(email, password);
//     }

//     const navigateRegister = event => {
//         navigate('/register');
//     }

//     const resetPassword = async () => {
//         const email = emailRef.current.value;
//         if (email) {
//             await sendPasswordResetEmail(email);
//             toast('Sent email');
//         }
//         else{
//           toast('please enter your email')
        
//         }
//     }

//     return (
//         <div classNameName='container w-50 mx-auto'>
//             <h2 classNameName='text-primary text-center mt-2'>Please Login</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group classNameName="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
//                     <Form.Text classNameName="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group classNameName="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
//                 </Form.Group>
//                 <Form.Group classNameName="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//             {errorElement}
//             <p>New to here? <Link to="/register" classNameName='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
//             <p>Forget Password? <button classNameName='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
           
//             <SocialLogin></SocialLogin>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading/Loading';

import SocialLogin from './SocialLogin';

const Login = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    
  let signInError;

  
      //  require auth
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }    
  
  if (user) {
            navigate(from, { replace: true });
        }
 
  if (error) {
    return (
     signInError=<p className='text-danger'>{error?.message}</p>
     
    );
  }
  
 
 
  const onSubmit = data => {
    
    signInWithEmailAndPassword(data.email, data.password)
    reset()
   
  };
 
    return (
       <div className=' h-100 mt-5 mb-5 pt-5 pb-5'>
        <div className="card mx-auto container shadow-lg border-0" style={{width:'30rem'}}>
        <h5 className="card-title text-center pt-3">Login</h5>
  <div className="card-body ">
 
  <form className='' onSubmit={handleSubmit(onSubmit)} >
  <div class="mb-3">
    
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
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
   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    
    <label for="exampleInputPassword1" className="form-label">password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
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
  <button type="submit" value='login' class="btn btn-primary px-5">Login</button>
  </div>
  </form>
  <p>New to here <Link to={'/Register'}>Create New Account</Link></p>
</div>
     
     {/* dividers */}
   <div class="row">
    <div class="col"><hr></hr></div>
    <div class="col-auto fw-bold">OR</div>
    <div class="col"><hr></hr></div>
</div>
       {/* google login */}
<SocialLogin></SocialLogin>
</div>

       </div>
       
    )

    
}
export default Login;