import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({inventoryItem}) => {
    const {_id, name, img, description, price, quantity} = inventoryItem;
    const navigate = useNavigate();

    const navigateToInventoryDetails = id =>{
        navigate(`/InventoryItem/${id }`);
    }
    return (
        <div className='InventoryItem'>
            <img className='img-fluid' src={img} alt="" />
            <h3>{name}</h3>
            <h5>Quantity:{quantity}</h5>
            <h6>Price: {price}</h6>
            
            <p><small>{description}</small></p>
            
            <button onClick={() => navigateToInventoryDetails(_id)} className='btn text-white px-3 py-2' style={{backgroundColor:'#954a9b'}}> Stock Update </button>
        </div>
    );
};

export default InventoryItem;