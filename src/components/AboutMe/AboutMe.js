import React from 'react'
import { AboutMeData } from '../../data/AboutMeData'
import AboutMeImg from '../../assets/images/lario-2.jpg'
import './AboutMe.css'
import Title from '../Title/Title'
import {FaLaptopCode} from 'react-icons/fa'
import {BsPencilSquare} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'

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
                <div className="icon">
                    <FaLaptopCode /> 
                </div>
                <h3>Frontend Developement</h3>
                <p>
                I build awesome client-side applications with the modern Technologies.
                </p>
            </div>
            <div>
                <div className="icon">
                    <BsBag />
                </div>
                <h3>Skill-set</h3>
                <p>
                React.js & Redux, SASS, Git & Github, Firebase, CSS3, HTML 5 and NodeJs
                </p>
            </div>
            <div>
                <div className="icon">
                    <BsPencilSquare />
                </div>
                <h3>Technical Writing</h3>
                <p>
                I write technical articles to share my knowledge with other developers and also for the tech community.
                </p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe
