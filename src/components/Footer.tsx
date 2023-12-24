import React from 'react';

import Styles from '../styles/footer.module.pcss';

const Footer = () => {
    return (
        <div className={`container ${Styles.footer}`}>
            <nav>
                <h4>Quick Links</h4>
                <a href={'#about'}>About</a>
                <a href={'#projects'}>Projects</a>
                <a href={'#skills'}>Skills</a>
                <a href={'#skills'}>Contact</a>
            </nav>
            <nav>
                <h4>Socials</h4>
                <a href={'#about'}>Linkedin</a>
                <a href={'#projects'}>Youtube</a>
            </nav>
            <nav>
                <h4>Contact Me</h4>
                <p>Email: Bennjmann.red@gmail.com</p>
                <p>Phone: 0428586104</p>
            </nav>
        </div>
    );
};

export default Footer;