import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddInventory.css'


const AddInventory = () => {

    const [user] = useAuthState(auth);
    console.log(user)
    const email = user.email

    // here use react hook form to minimize data

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const newData = { ...data, email };
        const url = `https://nextgen-bike-server.onrender.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        e.target.reset();
    };
    return (
        <div className='w-50 mx-auto'>
            <h3>Hi <span className="new-item-welcome-text"><span>{user?.displayName}</span> <span>({user?.email})</span></span></h3>
            <h4 className="new-item-welcome-text">Please add your new item.</h4>

            <form className='d-flex flex-column from-input' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("name", { required: true, maxLength: 100 })} />
                <input placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 50 })} />
                <textarea className="mb-2" placeholder='Product Description'  {...register("description")} />
                <input placeholder='Brand Name' type="text"  {...register("brand")} />
                <input placeholder='Size' type="text" {...register("size")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='In stock' type="number" {...register("quantity")} />
                <input placeholder='sold' type="number" {...register("sold")} />
                <input placeholder='Photo url' type="text" {...register("img")} />
                <input className="button-style m-0 mb-5" type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddInventory;