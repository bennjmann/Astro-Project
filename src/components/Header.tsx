import React from 'react';

import Styles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={"container"}>
            <nav className={` ${Styles.headerContainer}`}>
                <a href={'#about'}>About</a>
                <a href={'#projects'}>Projects</a>
                <a href={'#skills'}>Skills</a>
                <a href={'#contact'}>Contact</a>
            </nav>
        </div>
    );
};

export default Header;