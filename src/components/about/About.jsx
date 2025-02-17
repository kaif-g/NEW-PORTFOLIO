import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid center">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid center">
                    <div className="about__info center">
                        <p className="about__description center">
                        Hello! I'm D. Mahammed Kaif, and I'm based in Tirupati, India. I am currently pursuing my B.Tech in Electronics and Communication Engineering at Annamacharya Institute of Technology & Sciences-Tirupati, with an expected graduation in 2025.
                        Fast forward to today, and I can honestly say it's been a rewarding journey. I am passionate about Full Stack Development, Cloud Computing, Data Analytics, and IoT, and I am eager to keep growing in these fields. My current focus is on expanding my portfolio with new projects while being a dedicated team player in every opportunity I take on.<br /><br />
                        Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list center">
                            <li>JavaScript </li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>SQL</li>
                        </ul>
                        <button className="btn center" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
