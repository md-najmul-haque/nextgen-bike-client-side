import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, quantity, price, sold, brand, supplier, size } = inventory;
    const navigate = useNavigate()

    const navigateToUpdate = id => {

        navigate(`/inventory/${id}`)

    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 px-5">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded-lg">
                <img src={img} style={{ height: 320, width: 370 }} className="card-img-top p-3 mx-auto inventory-img" alt="..." />
                <div>
                    <h5 className="card-title item-name" >{name}</h5>
                    <h6>Supplier Name: {supplier}</h6>
                    <p className="card-text">
                        Product Description: {description}
                    </p>
                    <p className='mb-0'>Brand:{brand}</p>
                    <p className='mb-0'>Size: {size}</p>
                    <p className='mb-0'>price: ${price}</p>
                    <p className='mb-0'>In stock: {quantity}</p>
                    <p className='mb-0'>Sold: {sold}</p>
                    <button onClick={() => navigateToUpdate(_id)} className='button-style'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;