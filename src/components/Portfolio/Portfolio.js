import React from 'react'
import { Link } from 'react-router-dom'
import {PortfolioData} from '../../data/PortfolioData'
import Title from '../Title/Title'
import './Portfolio.css'
import {FaGithub} from 'react-icons/fa';
import {SiWebmoney} from 'react-icons/si'
import Fade from 'react-reveal/Fade'
 

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Title title="Projects" />
            <Fade left cascade>
            <div className="porfolio__projects">
                {
                    PortfolioData.map((data, index) => {
                        return (
                            
                            <div key={index} className="project">
                                <div className="project__title">
                                    <h5>{data.title}</h5>
                                </div>
                                
                                <img 
                                alt={data.alt}
                                src={data.image}
                                />
                                <div className="project__desc">
                                    <p>{data.Desc}</p>
                                </div>
                                <div className="project__links">
                                    <Link className="repo" to={data.codeUrl} target="_blank">
                                       <FaGithub className="icon" /> 
                                       <p>Repository</p>
                                    </Link>
                                    <Link className="repo" to={data.liveUrl} target="_blank">
                                        <SiWebmoney className="icon" />
                                        <p>See Live</p>
                                    </Link>
                                </div>                                 
                            </div>
                        )
                    })
                }
            </div>
            </Fade>
        </div>
    )
}

export default Portfolio
