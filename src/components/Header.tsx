import React from 'react';

import Styles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={Styles.headerContainer}>
            <a href={'#about'}>About Me</a>
            <a href={'#projects'}>My Projects</a>
            <a href={'#contact'}>Contact me</a>
            <a href={'#skills'}>my Skills</a>
        </div>
    );
};

export default Header;