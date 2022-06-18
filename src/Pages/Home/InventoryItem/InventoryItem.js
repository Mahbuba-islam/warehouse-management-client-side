import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({inventoryItem}) => {
    const {_id, name, img, description, price} = inventoryItem;
    const navigate = useNavigate();

    const navigateToInventoryDetails = id =>{
        navigate(`/InventoryItem/${id }`);
    }
    return (
        <div className='InventoryItem'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToInventoryDetails(_id)} className='btn btn-primary'> Stock Update </button>
        </div>
    );
};

export default InventoryItem;