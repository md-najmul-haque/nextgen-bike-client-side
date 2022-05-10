import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='d-flex justify-content-center alien-item-center'>
            <div className='w-75 mx-auto p-4'>
                <div>
                    <h3>WHY SHOULD YOU CONSIDER US?</h3>
                    <p>You might be surprised how awesome service we provide for your needs.</p>
                </div>
                <div className='service-section'>
                    <div>
                        <p>Innovative Designs</p>
                        <p>We provide innovative designs of bicycle which is most trending and fashionable nowadays</p>
                    </div>
                    <div>
                        <p>Long Lasting</p>
                        <p>Our designed designs bicycle will be more long-lasting than other conventional designs.</p>
                    </div>
                    <div>
                        <p>Quick Shipment</p>
                        <p>We delivered your order in the shortest time anywhere in the country</p>
                    </div>
                    <div>
                        <p>24/7 customer service</p>
                        <p>We Provide 24/7 customer service to give you the best service</p>
                    </div>
                </div>

            </div>
            <div className='w-75 p-4'>
                <h3 className='contact-us-heading'>Contact Us</h3>

                <div>
                    <Form className='contact-form'>
                        <Row className="mb-3 text-start">
                            <Form.Group as={Col} controlId="formGridEmail">

                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control type="text" placeholder="Your Phone Number" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 text-start">
                            <Form.Group as={Col} controlId="formGridEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3 text-start" controlId="formGridAddress1">

                            <Form.Control placeholder="1234 Main St, Apartment" />
                        </Form.Group>

                        <Row className="mb-3 text-start">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Control placeholder="State" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Control placeholder="Zip" />
                            </Form.Group>
                        </Row>


                        <Form.Group className="mb-3 text-start" controlId="formGridAddress1">

                            <Form.Control placeholder="Leave your message or what you want to buy from us?" />
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
    );
};

export default ContactUs;