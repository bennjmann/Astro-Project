'use client'
import React, {useEffect, useRef} from 'react';
import Styles from "../styles/skill.module.css"
import reactIntersectionObserver from "@/hooks/reactIntersectionObserver";

interface Props {
    title: string;
    src: any;
    alt: string;
    rating: number;
}



const Skill = ({title, rating, src, alt} : Props) => {
    const NumberOfRatings = 5

    const refs = useRef(Array(NumberOfRatings).fill(null))

    const ratingPercent = (rating / 100) * NumberOfRatings;
    const ratingLeftover = ratingPercent % 1

    useEffect(() => {
        for (let i = 0; i < Math.ceil(ratingPercent); i++) {
            if ( i + 1 == Math.ceil(ratingPercent) && rating != 100 && ratingLeftover != 0) {
                refs.current[i].style.background = `rgba(38, 133, 242, ${ratingLeftover})`
            } else if (i + 1 == Math.ceil(ratingPercent) - 1 && rating != 100 && ratingLeftover != 0) {
                refs.current[i].style.background = `rgba(38, 133, 242, ${ratingLeftover * 2})`
            } else refs.current[i].style.background = "var(--brand)"
        }
    }, [refs])



    const skillContainer = React.useRef<HTMLDivElement>(null);
    const test = reactIntersectionObserver(skillContainer);
    if (test) {
        skillContainer.current?.classList.add(Styles['animate'])
    }

    return (
        <div ref={skillContainer} className={Styles.container}>
            <div className={Styles.img}>
                <img src={src} alt={alt} width="45" height="45" loading="lazy" decoding="async"/>
            </div>
            <div>
                <h3>{title ?? "Skill Title"}</h3>
                <div className={Styles.rating}>
                    {
                        refs.current.map((_, index) => (
                            <div key={index} ref={(element) => {
                                refs.current[index] = element;
                            }} className={Styles.bar}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Skill;