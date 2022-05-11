import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [inventories, setInventories] = useState([]);
    console.log(inventories);

    const [user] = useAuthState(auth);

    const handleButton = id => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            const url = `https://tranquil-eyrie-58575.herokuapp.com/inventory/${id}`;
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


    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://tranquil-eyrie-58575.herokuapp.com/inventories?email=${email}`;
            if (email) {
                const { data } = await axios.get(url);
                setInventories(data)
            }
        }
        getItems();
    }, [user])

    return (
        <div className='container'>
            <h2 className='section-title'>Your added Product</h2>
            <div className='all-items-container'>
                {
                    inventories.map(inventory => <div key={inventory._id}>
                        <div className='all-items'>
                            <div>
                                <h5>{inventory.name}</h5>
                                <p><small>price: {inventory.price}</small></p>
                            </div>
                            <div>
                                <button onClick={() => handleButton(inventory._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;