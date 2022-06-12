import React from 'react';
import img from '../../../images/services.png'

const Services = () => {
    return (
        <div className='container rounded border border-light pt-3 pb-5 mb-5 shadow-lg mt-5 mb-5 p-3'>
           <h1 className='text-primary text-center mt-4'>Flexibility in Inventory Management</h1>
            
            <img className='img-fluid ' src={img} alt="" />
            
            <p className='mt-4 w-75 text-center ms-5 ps-5 py-2 pe-0 lh-lg'>From extensive printed circuit board assembly to complex box build/systems assembly, our facilities are equipped for maximum flexibility and are designed to meet your needs. Additionally, our unique global footprint enables us to provide customers with an adaptable, seamless transition between North America and Asia based on individual program volume needs.</p>

        </div>
    );
};

export default Services;