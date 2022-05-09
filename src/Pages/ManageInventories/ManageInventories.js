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

    return (
        <div>
            <h2 className='section-title'>Our All Items</h2>
            <div className='row'>
                {
                    inventories.map(inventory => <div className='col-sm-12 col-md-6 col-lg-4' key={inventory._id}>
                        <div className="card  shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={inventory.img} style={{ height: 450 }} className="card-img-top p-3 inventory-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title item-name">{inventory.name}</h5>
                                <h6>Supplier Name: {inventory.supplier}</h6>
                                <p className="card-text">
                                    Product Description: {inventory.description}
                                </p>
                                <p>Brand:{inventory.brand}</p>
                                <p>Size: {inventory.size}</p>
                                <p>price: ${inventory.price}</p>
                                <p>In stock: {inventory.quantity}</p>
                                <p>Sold: {inventory.sold}</p>
                                <button onClick={() => navigateToUpdate(inventory._id)} className='button-style'>Update</button>
                                <button className='button-style'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <button className='button-style'>Add New Item</button>
            </div>
        </div>

    );
};

export default ManageInventories;
