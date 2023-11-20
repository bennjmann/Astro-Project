import React from 'react';
import Styles from "../styles/skill.module.pcss"
import reactIntersectionObserver from "../hooks/reactIntersectionObserver.ts";

interface Props {
    title: string;
    src: any;
    alt: string;
    rating: string;
}



const Skill = ({title, rating, src, alt} : Props) => {

    const skillContainer = React.useRef<HTMLDivElement>(null);
    const test = reactIntersectionObserver(skillContainer);
    if (test) {
        skillContainer.current?.classList.add(Styles['animate'])
    }

    return (
        <div ref={skillContainer} className={Styles.skillContainer}>
            <div className={Styles.skillLogo}>
                <img src={src} alt={alt} width="50" height="50" loading="lazy" decoding="async"/>
            </div>
            <div className={Styles.skillContent}>
                <h5>{title}</h5>
                <div className={Styles.progressionBar}>
                    <div style={{width:`${rating}%`}}/>
                    <label>beginner</label>
                    <label>intermediate</label>
                    <label>advanced</label>
                </div>
            </div>
        </div>
    );
};

export default Skill;