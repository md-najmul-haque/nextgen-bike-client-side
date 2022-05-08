import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const [agree, setAgree] = useState(false)
    console.log(agree)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        console.log(user);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
        await createUserWithEmailAndPassword(email, password);
        navigate('/home')
    }

    return (
        <div className='mt-3'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" id="" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" id="" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password" id="" placeholder="Password" required />
                </Form.Group>

                <div className='d-flex align-item-center mb-3'>
                    <input type="checkbox" className='mt-1' onClick={() => setAgree(!agree)} id="" name="checkbox" />
                    <label className={`ms-2 ${agree ? '' : 'text-danger'}`} for="checkbox"> Accept The Bicycle Warehouse Trams and Condition?</label>
                </div>

                <button disabled={!agree} className='button-style' type="submit">Login</button>
            </Form>
            <p className='text-center  mt-3'>Already registered? <Link to='/login' className='text-decoration-none'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;