import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    let from = location.state?.from?.pathname || "/";
    let loginError;

    const navigateRegister = () => {
        navigate('/register')
        toast.success('Logged in successfully')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent email');
        } else {
            toast('please enter your email address!!')
        }
    }

    if (error) {
        loginError = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='pb-5 my-5'>
            <h2 className='text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <button className='button-style' type="submit">Login</button>
            </Form>
            <p>{loginError}</p>
            <p className='text-center mt-2'>Forget Password? <button className='btn btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <p className='text-center'>Are you new in NextGen Bike? <Link to='/register' onClick={navigateRegister} className='text-primary text-decoration-none'>Register</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;