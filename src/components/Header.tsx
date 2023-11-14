import React from 'react';

import Styles from '../styles/header.module.css';

const Header = () => {
    return (
        <nav className={Styles.headerContainer}>
            <a href={'#about'}><b>About</b></a>
            <a href={'#projects'}><b>Projects</b></a>
            <a href={'#skills'}><b>Skills</b></a>
            <a href={'#contact'}><b>Contact</b></a>
        </nav>
    );
};

export default Header;