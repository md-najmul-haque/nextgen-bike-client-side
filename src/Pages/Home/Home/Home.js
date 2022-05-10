import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUS/ContactUs';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;