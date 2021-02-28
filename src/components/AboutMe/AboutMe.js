import React from 'react'
import { AboutMeData } from '../../data/AboutMeData'
import AboutMeImg from '../../assets/images/lario-2.jpg'
import './AboutMe.css'
import Title from '../Title/Title'

const AboutMe = () => {
    return (
        <div className="about">
        <Title title="About Me" />
        <div className="about__container">
            <div className="about__image">
                <img 
                    src={AboutMeImg}
                    alt="Olanrewaju"
                />
            </div>
            <div className="about__data">
                <p>{AboutMeData[0].firstParagraph}</p>
                <p>{AboutMeData[0].secondParagraph}</p>
                <p>{AboutMeData[0].thirdParagraph}</p>
            </div>
        </div>
        <Title title="What I Do" />
        <div className="skillset">
            <div>
                <div className="icon"></div>
                <h3>Frontend Developement</h3>
                <p></p>
            </div>
            <div>
                <div className="icon"></div>
                <h3>Frontend Developement</h3>
                <p></p>
            </div>
            <div>
                <div className="icon"></div>
                <h3>Frontend Developement</h3>
                <p></p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe
