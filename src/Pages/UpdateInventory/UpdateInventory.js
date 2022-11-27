import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        const url = `https://nextgen-bike-server.onrender.com/inventory/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])

    const navigateToManageInventories = () => {
        navigate('/manageinventories');
    }

    const handleDelivered = id => {

        const updateStock = {
            _id: inventory._id,
            img: inventory.img,
            supplier: inventory.supplier,
            description: inventory.description,
            name: inventory.name,
            price: inventory.price,
            brand: inventory.brand,
            size: inventory.size,
            quantity: parseInt(inventory.quantity) - 1,
            sold: parseInt(inventory.sold) + 1

        };
        const url = `https://nextgen-bike-server.onrender.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                setInventory(updateStock);
            })
    }


    const stockUpdate = event => {
        event.preventDefault()
        const newStock = event.target.newStock.value;

        if (newStock > 0) {
            const updateStock = {
                _id: inventory._id,
                img: inventory.img,
                supplier: inventory.supplier,
                description: inventory.description,
                name: inventory.name,
                price: inventory.price,
                brand: inventory.brand,
                size: inventory.size,
                quantity: parseInt(inventory.quantity) + parseInt(newStock),
                sold: inventory.sold
            }

            // send data
            const url = `https://nextgen-bike-server.onrender.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateStock)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setInventory(updateStock);
                })


        } else {
            alert('please give correct input!!')
        }

        event.target.reset()
    }

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
                    <p>Brand: {inventory.brand}</p>
                    <p>Size: {inventory.size}</p>
                    <p>price: ${inventory.price}</p>
                    <p>In stock: {inventory.quantity}</p>
                    <p>Sold: {inventory.sold}</p>
                </div>
                <div className='input-field'>
                    <button onClick={() => handleDelivered(inventory._id)} className='button-style'>Delivered</button>

                    <form onSubmit={stockUpdate}>
                        <input type="number" name="newStock" id="" />
                        <input type="submit" value="Add Stock" className='button-style' />
                    </form>

                    <button onClick={navigateToManageInventories} className='button-style'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;