import { faGears, faPersonBiking, faTruckFast, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div id='feature' className='feature-container'>
            <div className='feature-section'>
                <h1 className='section-title'>FEATURES</h1>

                <div className='feature-details'>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faGears} /></span> <span>All Weather Conditions</span></p>
                        <p>The All-weather bike is designed so that more people ride their bikes more often and sometimes leave their car behind. we make sure both are covered with waterproof and well insulated material.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faGears} /></span> <span>GPS Tracking / Anti-Theft</span></p>
                        <p>Our designed designs bicycle is now with GPS Tracking and Anti-Theft protection.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faTruckFast} /></span> <span>Sustainable Practices</span></p>
                        <p>Sustainability practices are incorporated into our curriculum as we are committed to protecting our environment to ensure a sustainable future for our children.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faTruckFast} /></span> <span>For All Age Group</span></p>
                        <p>We provide our best to give best product and service for all age group. we also provide all types of featured bike</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faUsersGear} /></span> <span>Sport Bicycle</span></p>
                        <p>If speed is the name of your game, then you need a bike that's nimble and agile and built to go fast. Introducing the 700c women's volar 1400, a speedy, light road bike that's sure to quench your need for speed. </p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faUsersGear} /></span> <span>Special Kids Bike</span></p>
                        <p>Most famous and best selling kids bike brand all over the world, with patented components featuring outstanding designs and quality. The most popular Freestyle kids bike. We believe our little riders deserve the best.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faUsersGear} /></span> <span>Next Generation Bike</span></p>
                        <p>World's first shaft transmission (no chain) bike, has magnesium alloy wheels and puncture proof tyres to ensure hassle free rides.</p>
                    </div>
                    <div>
                        <p> <span><FontAwesomeIcon icon={faUsersGear} /></span> <span>Exceptional Support</span></p>
                        <p>We Provide 24/7 customer service to give you the best service. Our experienced stuff will is always ready to give you best support</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;