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

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">     
                <div className="home__title">
                        <h1>Hi,</h1>
                        <h1>I'm Olanrewaju</h1>
                        <h2>Frontend Developer</h2>

                        <div className="home__buttons">
                            <Link to='/sign-up'>
                                <Button buttonStyle='btn--outline'>
                                    More Info 
                                </Button>
                            </Link>
                            <Link to='/sign-up'>
                                <Button buttonStyle='btn--outline'>
                                    Contact Me 
                                </Button>
                            </Link>
                        </div>

                        <div className='social-icons'>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                                >
                                <FaInstagram />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to={
                                    '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                                }
                                target='_blank'
                                aria-label='Youtube'
                                >
                                <FaGithub />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                                >
                                <FaTwitter />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                                >
                                <FaLinkedin />
                            </Link>
                        </div>
        
                </div>
                <div className="home__image">
                    <img 
                        src={HomeImg}
                        alt="olanrewaju's, frontend developer"
                    />
                </div>
            
            </div>
        </div>
    )
}

export default Home
