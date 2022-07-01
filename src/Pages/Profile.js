import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';



const Profile = () => {
    const [user] = useAuthState(auth);
    return(
    <div>
    <div className="card mx-auto w-25 my-5 shadow-lg border-0 container" >
   <div className="card-body">
    <h5 className="card-title text-black text-center text-capitalize">{user?.displayName}</h5>
    <p className="card-text text-center">{user?.email}</p>
  </div>
  </div>
    </div>
        
 )
}

export default Profile;