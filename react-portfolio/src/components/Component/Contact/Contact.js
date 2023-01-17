import React, { useRef } from 'react';
import './Contact.scss';
import { RxTwitterLogo } from 'react-icons/rx';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ayjxc6z', 'template_7krlw2y', form.current, '4BjSKxFWyhYXIl6Uy1')
            .then((result) => {
                e.target.reset();
                toast("Message successfully sent!");
            }, (error) => {
                toast('Something went wrong!');
            });

    };
    return (
        <section className='contact' id="contactID">
            <div className="container">
                <motion.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="f-os sec-title">CONTACT ME</motion.h2>
                <div className="hr"></div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-5">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left-card f-po">
                            <div className="t-img">
                                <img src="https://i.pinimg.com/564x/3d/c7/6d/3dc76db0c5ed359dec38024a566178c3.jpg" alt="" />
                            </div>
                            <h4 className='f-os'>Ahmed Rony</h4>
                            <span>FULL STACK WEB DEVELOPER</span>
                            <p>I am available for freelance or remote work. Connect with me via and call in to my account.</p>
                            <div className="contacts">
                                <h5>Phone: <span> +8801789927476</span></h5>
                                <h5>Email: <span> ahmedrony21012@gmail.com</span></h5>
                            </div>
                            <h6>FIND ME WITH</h6>
                            <ul>
                                <a target={'_blank'} href="https://twitter.com/ahmedrony21012"><li><RxTwitterLogo /></li></a>
                                <a target={'_blank'} href="https://www.facebook.com/ahmed.rony.9843"><li><FiFacebook /></li></a>
                                <a target={'_blank'} href="https://www.linkedin.com/in/ahmed-rony-64ba6725a/"><li><FiLinkedin /></li></a>
                            </ul>

                        </motion.div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-7">
                        <motion.form whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} ref={form} onSubmit={sendEmail} className="right-card">
                            <div>
                                <h3>Got a <span>PROJECT IN MIND?</span></h3>
                                <h3>Let's Talk!</h3>
                            </div>
                            <div className="double-c">
                                <div className="item">
                                    <TextField name="user_name" label="YOUR NAME" variant="outlined" />
                                </div>
                                <div className="item">
                                    <TextField type={'number'} name="user_phone" label="PHONE NUMBER" variant="outlined" />
                                </div>
                            </div>
                            <div className="item">
                                <TextField name="user_email" label="EMAIL" variant="outlined" />
                            </div>
                            <div className="item">
                                <TextField name="subject" label="SUBJECT" variant="outlined" />
                            </div>
                            <div className="item">
                                <TextField name="message" className="text-field" multiline label="MESSAGE" variant="outlined" />
                            </div>
                            <input type="submit" value="SEND MESSAGE" className="form-btn" />
                        </motion.form>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={true}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;