import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUS/ContactUs';
import Feature from '../Feature/Feature';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Feature></Feature>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;