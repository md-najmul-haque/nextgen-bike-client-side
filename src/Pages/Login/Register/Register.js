import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let registerError;

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName, email });
        navigate('/home')
        toast.success('Login Successful')

    }

    return (
        <div className='pb-5 my-5'>
            <h2 className='text-center mt-4'>Please Register</h2>
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
                    <label className={`ms-2 ${agree ? '' : 'text-danger'}`} for="checkbox"> Accept The NextGen Bike Trams and Condition?</label>
                </div>

                <button disabled={!agree} className='button-style' type="submit">Register</button>
            </Form>
            <p>{registerError}</p>
            <p className='text-center'>Already registered? <Link to='/login' className='text-decoration-none'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;