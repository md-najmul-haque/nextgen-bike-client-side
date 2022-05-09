import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])
    return (
        <div className='d-flex justify-content-center align-item-center p-4'>
            <div className="card shadow-lg p-3 mb-5 w-50 bg-white rounded">
                <div className='d-flex justify-content-center'>
                    <img src={inventory.img} style={{ width: 450 }} className="card-img-top p-3" alt="..." />
                </div>
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
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;