import React, { useState } from 'react';
import banner1 from '../../../src/images/management-1-resize.jpg';

const Banner = () => {
     return (

        <div className='container rounded  
        mb-5 mt-5 mb-5 '>
          <h1 className=' text-center mt-5' style={{color:'#4a509b'}}>Warehouse Inventory Management</h1>
           <div className='d-flex  justify-content-center p-3 mt-5'>
         
         <div>
            <h5 className='text-start  ms-5 lh-lg fs-4'>Better organize your <span style={{color:'#6b4a9b'}}>Warehouse</span> with the smart double entry inventory system.</h5>
         <p className='mt-4 w-75 text-start  ms-5  lh-lg'  style={{width:'30%'}} >Get the most efficient stocking method and improve all your internal operations. Odoo's double-entry inventory has no stock input, output or transformation.</p>

        </div>  
           <img className='img-fluid ' src={banner1} alt="" />
           </div>
          

       </div>
       
    );
};

export default Banner;