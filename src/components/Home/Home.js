import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import HomeImg from '../../assets/images/lario-1.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">     
                <div className="home__title">
                    <h1>
                        <p>Hi,</p>
                        <p>I am Olanrewaju</p>
                        <p>Frontend Developer</p>

                        <Link to="/about" >
                            <button>More Info</button>
                        </Link>
                    </h1>
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
