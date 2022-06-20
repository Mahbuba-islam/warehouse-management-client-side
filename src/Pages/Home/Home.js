import React from 'react';
import { Link } from 'react-router-dom';
import Managements from './Managements/Managements';

import Banner from './Banner';
import InventoryItems from './InventoryItems/InventoryItems';

import Services from './Services/Services';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Managements></Managements>
            <Services></Services>


            <div className='text-center'>
                <Link to="/manageInventories">
                    <button className=' btn-lg  my-5 px-5 py-3 fs-4 text-white border-0 shadow-lg ' style={{backgroundColor:'#473167'}}>Manage Inventories</button>
                </Link>
            </div>
        </>
    );
};

export default Home;