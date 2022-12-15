import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory'
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useInventories()
    const navigate = useNavigate()

    console.log(inventories)

    const navigateToManageInventory = () => {
        navigate('/ManageInventories')
    }
    return (
        <div id='inventories'>
            <h1 className='section-title'>Our Products</h1>
            <div className='row g-5'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory key={inventory._id} inventory={inventory}></Inventory>)

                }
            </div>
            <button onClick={navigateToManageInventory} className='button-style'>Manage Inventory</button>
        </div>
    );
};

export default Inventories;