import React from 'react';

import Styles from '../styles/footer.module.css';
import Link from "next/link";

const Footer = () => {
    return (
        <div className={`container ${Styles.footer}`}>
            <nav>
                <h4>Quick Links</h4>
                <Link href={'#about'}>About</Link>
                <Link href={'#projects'}>Projects</Link>
                <Link href={'#skills'}>Skills</Link>
                <Link href={'#contact'}>Contact</Link>
            </nav>
            <nav>
                <h4>Socials</h4>
                <a href={'https://www.linkedin.com/in/ben-redman-b68561216/'}>Linkedin</a>
                <a href={'https://www.youtube.com/channel/UCiMHyUqcXw8S9HRtptGaH-g'}>Youtube</a>
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