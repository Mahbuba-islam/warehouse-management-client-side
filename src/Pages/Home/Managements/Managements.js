import React, { useEffect, useState } from 'react';
import Management from '../Management/Management';
import './Managements.css'






const Managements = () => {
    const [managements, setManagement] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:4000/manageMent')
        .then(res => res.json())
        .then(data => setManagement(data));
    }, [])
    return (
        <div className='container  mt-5 p-4 bg-gray border shadow-sm ' id='management-container' >
           
          <div id="managements" className='container '>
            <div className="row ">
            <h1 className='heading text-center mt-3 mb-4 p-3'> See How NetSuite's Integrated Warehouse Management Suite Accelerates Growth and Expansion for Manufacturers, Distributors, and Retailers  </h1>
            <div className="inventory-container mt-4 p-3 ">
            {
                managements.map(management => <Management
                key = {management._id}
                management = {management}>

                </Management>)
            }
            </div>
            </div>
        </div>
        </div>
    );
};

export default Managements;