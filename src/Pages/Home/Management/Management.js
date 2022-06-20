import React from 'react';
import './Management.css'
const Management = ({management}) => {
    const {_id , title , description , img} = management;
    return (
        <div className='managements-section'>
             <div className='managements-div'>
             <img src={img} alt="icon" ></img>
           <h5>{title}</h5>
           
          <p>{description}</p>
          
          
          
        </div>
        </div>
    );
};

export default Management;