import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../images/notFound/notfound.gif'

import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/home')
    }
    return (
        <div className='d-flex flex-column flex-lg-row align-item-center justify-content-center'>
            <img className='not-found-img' src={notfound} alt="" />

            <div className='not-found-info'>
                <h3 className='not-found-text'>Oops!!! The page you are looking for is not found.</h3>
                <button onClick={navigateToHome} className='button-style'>Back to Home</button>
            </div>

        </div>
    );
};

export default NotFound;