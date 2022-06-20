import React from 'react';
import img from '../../../images/services.png'

const Services = () => {
    return (
        <div className='container rounded border border-light 
         mb-5 shadow-lg mt-5 mb-5 '>
           <h1 className=' text-center mt-4' style={{color:'#4a509b'}}>Flexibility in Inventory Management</h1>
            <div className='d-flex  justify-content-center p-5'>
            <img className='img-fluid ' src={img} alt="" style={{width:'50%', height:'300px'}}/>
            
            <p className='mt-4 w-75 text-start  ms-5 py-2  lh-lg'  style={{width:'40%'}} >From extensive printed circuit board assembly to complex box build/systems assembly, our facilities are equipped for maximum flexibility and are designed to meet your needs. Additionally, our unique global footprint enables us to provide customers with an adaptable, seamless transition between North America and Asia based on individual program volume needs.</p>
            </div>
           

        </div>
    );
};

export default Services;