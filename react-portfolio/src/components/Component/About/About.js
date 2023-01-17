import React from 'react';
import ParallaxText from '../ParallaxText/ParallaxText';
import './About.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about" id='aboutID'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left">
                            <h2 className='f-os'>About Me</h2>
                            <div className="hr"></div>
                            <div className="content f-po">
                                <p>Full Stack Web Developer and Web Application specializing in Front-End & Back-End Development. Experienced with all stages of the development cycle for dynamic websites and software. Well-versed in numerous programming languages and necessaries like JavaScript ES6, NodeJS, Structured language HTML55, CSS3, Libraries ReactJS with MongoDB and MySQL Database. Building an authenticated REST API with JWT. Smooth manageable CRUD & debugging operations.</p>
                                <p>I’m passionate about helping clients to conquer their design challenges and achieve their business goals. I am committed to creating inspiring design solutions, and customizations to help build the growth and success of your company. Whether you have a small or mid-sized business and others.</p>
                                <div className="left-btn">
                                    <Link to="/files/resume.pdf" target="_blank" download><button>DOWNLOAD MY RESUME</button></Link>
                                    <a href="#contactID"><button>HIRE ME</button></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="right">
                            <h3 className='f-os'>About My Skills</h3>
                            <div className="hr"></div>
                            <div className="content">

                                <div className="item">
                                    <h4 className='f-os'>PRIMARY SKILLS ON</h4>
                                    <ul>
                                        <li title='React JS'><img src={require("../../../images/icons/reactJS.png")} alt="" /></li>
                                        <li title='Javascript'><img src={require("../../../images/icons/js.png")} alt="" /></li>
                                        <li title='HTML5'><img src={require("../../../images/icons/html5.png")} alt="" /></li>
                                        <li title='CSS3'><img src={require("../../../images/icons/css.png")} alt="" /></li>
                                        <li title='Material UI'><img src={require("../../../images/icons/mui.png")} alt="" /></li>
                                        <li title='Bootstrap'><img src={require("../../../images/icons/bootstrap.png")} alt="" /></li>
                                        <li title='SASS/ SCSS'><img src={require("../../../images/icons/sass.png")} alt="" /></li>
                                        <li title='Express JS'><img src={require("../../../images/icons/expressJS.png")} alt="" /></li>
                                        <li title='Node JS'><img src={require("../../../images/icons/nodeJS.png")} alt="" /></li>
                                        <li title='Mongo DB'><img src={require("../../../images/icons/mongodb.png")} alt="" /></li>
                                        <li title='JSON Web Token'><img src={require("../../../images/icons/jwt.png")} alt="" /></li>
                                        <li title='Photoshop'><img src={require("../../../images/icons/psd.png")} alt="" /></li>
                                        <li title='Figma'><img src={require("../../../images/icons/figma.png")} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <h4 className='f-os'>SECONDARY SKILLS ON</h4>
                                    <ul>
                                        <li title='JQuery'><img src={require("../../../images/icons/jquery.png")} alt="" /></li>
                                        <li title='Redux'><img src={require("../../../images/icons/Redux.png")} alt="" /></li>
                                        <li title='MySQL'><img src={require("../../../images/icons/mysql.png")} alt="" /></li>
                                        <li title='Tailwind CSS'><img src={require("../../../images/icons/tailwind.png")} alt="" /></li>
                                        <li title='Wordpress'><img src={require("../../../images/icons/wordpress.png")} alt="" /></li>
                                        <li title='Chrome'><img src={require("../../../images/icons/chrome.png")} alt="" /></li>
                                        <li title='Pinterest'><img src={require("../../../images/icons/pinterest.png")} alt="" /></li>
                                        <li title='Skype'><img src={require("../../../images/icons/skype.png")} alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="p-text">
                        <ParallaxText baseVelocity={-5}>full-stack e-commerce portfolio MERN STACK</ParallaxText>
                        <ParallaxText baseVelocity={5}>blogsite real state dashboard commercial</ParallaxText>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;