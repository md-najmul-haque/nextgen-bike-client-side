import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { id, name, img, description, quantity, price, sold, brand, supplier, size } = inventory;
    console.log(inventory);


    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <img src={img} style={{ height: 450 }} className="card-img-top p-3 inventory-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title item-name">{name}</h5>
                    <h6>Supplier Name: {supplier}</h6>
                    <p className="card-text">
                        Product Description: {description}
                    </p>
                    <Card.Text>Brand:{brand}</Card.Text>
                    <p>Size: {size}</p>
                    <p>price: ${price}</p>
                    <p>In stock: {quantity}</p>
                    <p>Sold: {sold}</p>
                    <button className='button-style'>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;