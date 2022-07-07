import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../Firebase.init'
import Loading from '../Shared/Loading/Loading';

import SocialLogin from '../Login/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }


    if (user) {
      

    }


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
        
    }
   

    const handleSubmit = async event => {
        event.preventDefault();
       
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
          fetch('https://vast-fjord-19368.herokuapp.com/login', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email, password})
        })

        .then(res => res.json())
        .then(data =>{
            localStorage.setItem('accessToken', data.accessToken)
            navigate(from, { replace: true });
           
            // console.log(data.accesstoken)
    //           if (token) {
               
    // }
            
        })
       
    
    }
   

    // const navigateRegister = event => {
    //     navigate('/register');
    // }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
       
    }

    return (
        <div className='container h-100 mt-5 mb-5 pt-5 pb-5'>
          <div className="card mx-auto container shadow-lg border-0" style={{width:'30rem'}}>
            
          <h2 className="card-title text-center pt-3">Please Login</h2>
          <div className="card-body ">
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='bg-white border-0 text-primary mb-5' onClick={resetPassword} varient="link outline-primary" >Forget Password?</Button>
               <Button  variant="primary px-5 mt-5" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p className='mt-4'>Already have an Account <Link to={"/register"}>Create a account</Link></p>
            {/* <p className='pt-4'>New to here? <Link to= className='text-primary pe-auto text-decoration-none mt-5' onClick={navigateRegister}>Please Register</Link> </p>
            */}
            
            <SocialLogin></SocialLogin>
            <ToastContainer />
          </div>
 
            
          </div>
        </div>
    );
};

export default Login;
// import React, { useState } from 'react';
// import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../Firebase.init';
// import Loading from '../Shared/Loading/Loading';
// import {  sendPasswordResetEmail } from "firebase/auth";
// import { Button } from 'react-bootstrap';


// import SocialLogin from './SocialLogin';
// import { toast } from 'react-toastify';

// // import { toast } from 'react-toastify';

// const Login = () => {
//   const { register, formState: { errors }, handleSubmit, reset,   resetField, } = useForm();
  
//   const [
//     signInWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useSignInWithEmailAndPassword(auth);

//   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  
  

  
//   let signInError;

  
//       //  require auth
//   let navigate = useNavigate();
//   let location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   if (loading ) {
//     return <Loading></Loading>;
//   }    
  
//   if (user) {
//             navigate(from, { replace: true });
//         }
 
//   if (error ) {
//     return (
//      signInError=<p className='text-danger'>{error?.message}</p>
     
//     );
//   }
  
  
  
    
//   const onSubmit = data => {
    
//     signInWithEmailAndPassword(data.email, data.password)
   
//      reset()

// }

// const handlePasswordReset = async () => {
//     resetField("email");
//     await sendPasswordResetEmail(email);
//                  toast('Sent email');
//                     console.log(email)

// //   const handlePasswordReset = async () => {
// //             const email = user?.email;
           
// //                
            
           
// //         }
    



 
    
//     return (
//        <div className=' h-100 mt-5 mb-5 pt-5 pb-5'>
//         <div className="card mx-auto container shadow-lg border-0" style={{width:'30rem'}}>
//         <h5 className="card-title text-center pt-3">Login</h5>
//   <div className="card-body ">
 
//   <form className='' onSubmit={handleSubmit(onSubmit)} >
//   <div class="mb-3">
    
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
//     {...register("email", {
//       required:{
//         value:true,
//         message:'email is required'
//       },
    
//       pattern:{
//         value: /[A-Za-z]{3}/,
//         message:'provide a valid Email'
      
//       }
//       })} />
//     {errors.email?.type === 'required' && <span className='text-danger'>{errors.email.message}</span>}
//     {errors.email?.type === 'pattern' && <span className='text-danger'>{errors.email.message}</span>}
//    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>

//   <div class="mb-3">
    
//     <label for="exampleInputPassword1" className="form-label">password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" 
//     {...register("password", {
//       required:{
//         value:true,
//         message:'password is required'
//       },
    
//      minLength:{
//         value: 6,
//         message:'password must be 6 chracters or long'
      
//       }
//       })} />
//     {errors.password?.type === 'required' && <span className='text-danger'>{errors.password.message}</span>}
//     {errors.password?.type === 'minLength' && <span className='text-danger'>{errors.password.message}</span>}
    
//   </div>
//   <div className='text-center py-2 w-100'>
//   {signInError}
//   <br/>
   
//    <Button variant="outline-dark" onClick={handlePasswordReset} >Reset Password</Button>     
//   <button type="submit" value='login' class="btn btn-primary px-5">Login</button>
//   </div>
//   </form>
//   <p>New to here <Link to={'/Register'}>Create New Account</Link></p>
// </div>
     
//      {/* dividers */}
//    <div class="row">
//     <div class="col"><hr></hr></div>
//     <div class="col-auto fw-bold">OR</div>
//     <div class="col"><hr></hr></div>
// </div>
//        {/* google login */}
// <SocialLogin></SocialLogin>
// </div>

//        </div>
       
//     )

// }
// }
//  export default Login;