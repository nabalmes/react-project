import React from 'react';
import About from '../../Component/About/About.js';
import Avater from '../../Component/Avater/Avater.js';
import Contact from '../../Component/Contact/Contact.js';
import Footer from '../../Component/Footer/Footer.js';
import Navbar from '../../Component/NavBar/Navbar.js';
import Portfolio from '../../Component/Portfolio/Portfolio.js';
import Testimonial from '../../Component/Testimonial/Testimonial.js';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="home-bg">
                <Navbar></Navbar>
                <Avater></Avater>
                <About></About>
                <Portfolio></Portfolio>
                <Testimonial></Testimonial>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;