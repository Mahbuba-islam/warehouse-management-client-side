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
                    <button className='btn btn-primary my-5'>Manage Inventories</button>
                </Link>
            </div>
        </>
    );
};

export default Home;