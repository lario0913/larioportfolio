import React from 'react'
import './Contact.css'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import Title from '../Title/Title'

const Contact = () => {
    return (
            
            <div className="contact">
                <Title title="Contact Me" />
                <div className="contact__container">
                    <div className="contact__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8602322875295!2d3.9321066145271493!3d7.369558794682191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039931f9ac36339%3A0xf9afe37ee1801eb8!2sOlomi%20Academy!5e0!3m2!1sen!2sng!4v1614611764782!5m2!1sen!2sng" width="600" height="450" style={{border:0}} title="map" allowFullscreen="" loading="lazy"></iframe>
                    </div>            
                    <div className="contact__details">
                    <div className="contact__detail">
                        <div className="contact__icon">
                            <FaPhoneAlt />
                        </div>
                        <div className="contact__address">
                            <h4>Phone</h4>
                            <p>+234 7034686197</p>
                            <p>+234 7037822540</p>
                        </div>
                    </div>
                    <div className="contact__detail">
                        <div className="contact__icon">
                            <MdEmail />
                        </div>
                        <div className="contact__address">
                            <h4>Email</h4>
                            <p>osunkunleolanrewaju@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__detail">
                        <div className="contact__icon">
                            <ImLocation2 />
                        </div>
                        <div className="contact__address">
                            <h4>Address</h4>
                            <p>Olomi Academy Area, Ibadan, Oyo State, Nigeria</p>
                        </div>
                    </div>
                </div>            
                </div>
            </div>
    )
}

export default Contact
