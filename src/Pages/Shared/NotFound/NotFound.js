import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
      <div className='section h-100 w-100 border-light  shadow-sm'>
      <div>
            <h1 className='text-primary text-center d-3 mx-auto '>Lost in Space</h1>
            <div className='w-50 h-100 color-black'></div>
            <p className='text-center mx-auto w-50 lh-lg fs-5 text-white'>Oops the spaceship left without you......
           <h3>The page you requested could not be found.</h3> 
            <Link to = "/home">
            <Button className='btn btn-primary mt-5'>Back to Home Page</Button>
            </Link>
            
            </p>
            
         </div>
      </div>
      
    );
};

export default NotFound;