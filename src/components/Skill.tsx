import React from 'react';
import Styles from "../styles/skill.module.css"

interface Props {
    title: string;
    src: any;
    alt: string;
    rating: string;
}



const Skill = ({title, rating, src, alt} : Props) => {
    return (
        <div className={Styles.skillContainer}>
            <img src={src} alt={alt} width="50" height="50" loading="lazy" decoding="async"/>
            <h5>{title}</h5>
            <div className={Styles.progressionBar}>
                <div style={{width:`${rating}%`}}/>
                <label>beginner</label>
                <label>intermediate</label>
                <label>advanced</label>
            </div>
        </div>
    );
};

export default Skill;