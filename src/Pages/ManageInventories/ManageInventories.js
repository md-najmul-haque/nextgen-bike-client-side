import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

import './ManageInventories.css';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate()

    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`)
    }

    const handleAddInventory = () => {
        navigate(`/addinventory`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? Do you want to delete?');
        if (proceed) {
            const url = `https://nextgen-bike-server.onrender.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                });
        }

    }

    return (
        <div>
            <h2 className='section-title'>Our All Items</h2>
            <div className='row g-5 px-2 lg:px-5'>
                {
                    inventories.map(inventory => <div className='col-sm-12 col-md-6 col-lg-4' key={inventory._id}>
                        <div className="card  shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={inventory.img} style={{ height: 350 }} className="card-img-top py-3 px-5 inventory-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title item-name">{inventory.name}</h5>
                                <h6>Supplier Name: {inventory.supplier}</h6>
                                <p className="card-text">
                                    Product Description: {inventory.description}
                                </p>
                                <p className='mb-0'>Brand:{inventory.brand}</p>
                                <p className='mb-0'>Size: {inventory.size}</p>
                                <p className='mb-0'>price: ${inventory.price}</p>
                                <p className='mb-0'>In stock: {inventory.quantity}</p>
                                <p className='mb-0'>Sold: {inventory.sold}</p>
                                <button onClick={() => navigateToUpdate(inventory._id)} className='button-style'>Update</button>
                                <button onClick={() => handleDelete(inventory._id)} className='button-style'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <button onClick={handleAddInventory} className='button-style'>Add New Item</button>
            </div>
        </div>

    );
};

export default ManageInventories;
