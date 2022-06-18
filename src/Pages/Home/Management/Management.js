import React from 'react';

const Management = ({management}) => {
    const {_id , title , description } = management;
    return (
        <div>
             <div className='InventoryItem '>
           <h2>{title}</h2>
          <p>{description}</p>
          <p>{_id}</p>
          
            
        </div>
        </div>
    );
};

export default Management;