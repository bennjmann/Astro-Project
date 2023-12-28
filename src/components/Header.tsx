import React from 'react';

import Styles from '../styles/header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <div className={"container"}>
            <nav className={` ${Styles.headerContainer}`}>
                <Link href={'#about'}>About</Link>
                <Link href={'#projects'}>Projects</Link>
                <Link href={'#skills'}>Skills</Link>
                <Link href={'#contact'}>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;