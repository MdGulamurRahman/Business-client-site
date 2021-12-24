import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;