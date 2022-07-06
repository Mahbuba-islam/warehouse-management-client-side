import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import google from '../../images/google (1).png'
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
   
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }

    
    return (
        <div>
           
            {errorElement}
            <div className='mt-4 text-center mb-3'>
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-outline-primary border border-primary border-3"> <img style={{ width: '30px' }} src={google} alt="" /> Continue with Google</button>
        </div>
      </div>
    );
};

export default SocialLogin;