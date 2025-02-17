import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div 
            className='home__socials' 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <a
                href='https://github.com/kaif-g'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <FaGithub />
            </a>

            <a 
                href='https://www.linkedin.com/in/mahammed-kaif-dudekula-678273260'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <FaLinkedinIn />
            </a>

            <a
                href='https://www.facebook.com/share/1BakEMRnEy/'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <FaFacebookF />
            </a>
        </div>
    );
};

export default HeaderSocials;
