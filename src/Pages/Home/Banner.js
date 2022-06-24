import React from 'react';
import banner1 from '../../../src/images/management-1-resize.jpg';

const Banner = () => {
     return (

        <div className='container rounded  
        mb-5 mt-5 mb-5 '>
          <h1 className=' text-center mt-5 ' style={{color:'#4a509b'}}>Warehouse Inventory Management</h1>
           <div className='d-lg-flex  justify-content-center p-3 mt-5 '>
         
         <div className='mt-4 order-lg-1 order-md-2'>
            <h5 className='text-start  ms-5 lh-lg fs-4 w-70 '>Better organize your <span style={{color:'#6b4a9b'}}>Warehouse</span> with the smart double entry inventory system.</h5>
         <p className='mt-4  text-start  ms-5  lh-lg'  >Get the most efficient stocking method and improve all your internal operations. Odoo's double-entry inventory has no stock input, output or transformation.</p>

        </div>  
           <img className='img-fluid mb-5 order-lg-2 order-md-1' src={banner1} alt="" style={{height:'400px', width:'450px'}}/>
           </div>
          

       </div>
       
    );
};

export default Banner;