import React from 'react'
import { Link } from 'react-router-dom'
import {PortfolioData} from '../../data/PortfolioData'
import Title from '../Title/Title'
import './Portfolio.css'
 

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Title title="Projects" />
            {/* {
                PortfolioData.map((data, index) => {
                    return (
                        <div key={index}>
                            <h1>{data.title}</h1>
                            <img 
                            alt="Amazon Project"
                            src={data.image}

                            />
                            <Link to={data.liveUrl} target="_blank">
                                <button>See Live</button>
                            </Link>
                            
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default Portfolio
