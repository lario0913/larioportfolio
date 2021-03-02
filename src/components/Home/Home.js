import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import HomeImg from '../../assets/images/lario-1.jpg'
import { Button } from '../Button/Button'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
import Fade from 'react-reveal/Fade'
import SliderText from '../SliderText/SliderText'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container"> 
                <Fade left cascade>    
                <div className="home__title">
                        <h1>Hi,</h1>
                        <h1>I'm Olanrewaju</h1>
                        {/* <h2>Frontend Developer</h2> */}
                        <p><SliderText text={["Frontend Developer", "Software Engineer", "I build scalable wep apps"]} /></p>

                        <div className="home__buttons">
                            <Link to='/portfolio' className="to-about">
                                <Button buttonStyle='btn--outline'>
                                    Projects 
                                </Button>
                            </Link>
                            <Link to='/contact'>
                                <Button buttonStyle='btn--outline'>
                                    Contact Me 
                                </Button>
                            </Link>
                        </div>

                        <div className='social-icons'>
                            <Link
                                className='social-icon-link fa'
                                to='//www.facebook.com/larioscophobia'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                className='social-icon-link in'
                                to='//www.instagram.com/lario_lee'
                                target='_blank'
                                aria-label='Instagram'
                                >
                                <FaInstagram />
                            </Link>
                            <Link
                                className='social-icon-link gt'
                                to={
                                    '//www.github.com/lario0913'
                                }
                                target='_blank'
                                aria-label='Github'
                                >
                                <FaGithub />
                            </Link>
                            <Link
                                className='social-icon-link tw'
                                to='//www.twitter.com/lario_lee0'
                                target='_blank'
                                aria-label='Twitter'
                                >
                                <FaTwitter />
                            </Link>
                            <Link
                                className='social-icon-link lk'
                                to='//www.linkedin.com/in/osunkunle-olanrewaju-841307129/'
                                target='_blank'
                                aria-label='LinkedIn'
                                >
                                <FaLinkedin />
                            </Link>
                        </div>
        
                </div>
                </Fade>
                <Fade right cascade>
                <div className="home__image">
                    <img 
                        src={HomeImg}
                        alt="olanrewaju's, frontend developer"
                    />
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home
