import React from 'react';
import './Footer.css';

const Footer = () => {

    const today = new Date();

    return (
        <footer className='footer-container p-4' sticky='bottom'>
            <div className='useful-link-section d-flex flex-column flex-md-row justify-content-center align-item-center'>
                <div className='useful-link'>
                    <h5>CATEGORIES</h5>
                    <ul>
                        <li>Mountain Bike</li>
                        <li>Cruiser Bike</li>
                        <li>Folding Bike</li>
                        <li>Balance Bike</li>
                        <li>Kids Bike</li>
                    </ul>
                </div>
                <div className='useful-link'>
                    <h5>SERVICES</h5>
                    <ul>
                        <li>Innovative Designs</li>
                        <li>Long Lasting</li>
                        <li>Quick Shipment</li>
                        <li>Comparatively Low Price</li>
                        <li>24/7 customer service</li>
                    </ul>
                </div>

                <div className='useful-link'>
                    <h5>COMPANY</h5>
                    <ul>
                        <li>About NextGen Bike</li>
                        <li>Bicycles Care</li>
                        <li>Offices &#38; Distributors</li>
                        <li>Support As Per Warranty policy</li>
                        <li>email: najmul0612@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <p className='m-0'><small>All Rights Reserved by The Developer - Najmul Haque. Copyright &copy; {today.getFullYear()}.</small></p>
            </div>

        </footer>
    );
};

export default Footer;