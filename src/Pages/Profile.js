import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';



const Profile = () => {
    const [user] = useAuthState(auth);
    return(
    <div>
    <div class="card mx-auto w-25 my-5 shadow-lg border-0 container" >
   <div class="card-body">
    <h5 class="card-title text-black text-center text-capitalize">{user.displayName}</h5>
    <p class="card-text text-center">{user.email}</p>
  </div>
  </div>
    </div>
        
 )
}

export default Profile;