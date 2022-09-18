import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faPersonBiking, faTruckFast, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import './ContactUs.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t2yjpt7', 'template_m6usr6m', e.target, '05q1Ckj6xqf-KKHgb')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                toast.success('Thanks for sending email to us')
            }, (error) => {
                console.log(error.text);
                toast.error('Something went wrong. Please try again letter.')
            });


    };

    return (

        <div id='contactus' className='bg-white service-container' >
            <h1 className='section-title contact-title'>WHY SHOULD YOU CONSIDER US?</h1>
            <div className='d-flex justify-content-center alien-item-center flex-column flex-lg-row'>
                <div className='mx-auto p-4 service-container'>
                    <div>
                        <h3 className='section-sub-title'>OUR SERVICES</h3>
                        <p>You might be surprised how awesome service we provide for your needs.</p>
                    </div>
                    <div className='service-section'>
                        <div>
                            <p> <span><FontAwesomeIcon icon={faPersonBiking} /></span> <span>Innovative Designs</span></p>
                            <p>We provide innovative designs of bicycle which is most trending and fashionable nowadays</p>
                        </div>
                        <div>
                            <p> <span><FontAwesomeIcon icon={faGears} /></span> <span>Long Lasting</span></p>
                            <p>Our designed designs bicycle will be more long-lasting than other conventional designs.</p>
                        </div>
                        <div>
                            <p> <span><FontAwesomeIcon icon={faTruckFast} /></span> <span>Quick Shipment</span></p>
                            <p>We delivered your order in the shortest time anywhere in the country</p>
                        </div>
                        <div>
                            <p> <span><FontAwesomeIcon icon={faUsersGear} /></span> <span>24/7 customer service</span></p>
                            <p>We Provide 24/7 customer service to give you the best service</p>
                        </div>
                    </div>

                </div>
                <div className='mx-auto p-4 contact-form-container'>
                    <h3 className='contact-us-heading'>Contact Us</h3>

                    <div>
                        <Form onSubmit={sendEmail} className='contact-form'>
                            <Row className="mb-3 text-start">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="First Name" name='firstname' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Last Name" name='lastname' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 text-start">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Enter email" name='email' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Your Phone Number" name='phone' />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3 text-start" controlId="formGridAddress1">
                                <Form.Control placeholder="1234 Main St, Apartment" name='address' />
                            </Form.Group>

                            <Row className="mb-3 text-start">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Control placeholder="City" name='city' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Control placeholder="State" name='state' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Control placeholder="Zip" name='zipcode' />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3 text-start" controlId="formGridAddress1">

                                <Form.Control placeholder="Leave your message or what you want to buy from us?" name='message' />
                            </Form.Group>

                            <Form.Group className="mb-3 text-start" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Please send me your company news letter also." />
                            </Form.Group>

                            <button className='button-style mb-0' type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;