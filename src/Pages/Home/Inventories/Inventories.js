import React from 'react';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory'
import './Inventories.css'


const Inventories = () => {
    const [inventories, setInventories] = useInventories()
    return (
        <div>
            <h1 className='section-title'>Our Products</h1>
            <div className='row g-5'>
                {
                    inventories.map(inventory => <Inventory key={inventory.id} inventory={inventory}></Inventory>).slice(0, 6)
                }
            </div>
            <button className='button-style mb-4'>Manage Item</button>
        </div>
    );
};

export default Inventories;