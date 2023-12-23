import React, {type ReactNode} from 'react';
import Style from "../styles/project.module.pcss";

interface Props {
    alt: string;
    children: ReactNode;
    date?: Date;
    github?: string;
    link?: string;
    title: string;
    type: string;
    src?: string;
}

const Project = ({alt, children, date, github, link, title, type, src} : Props) => {
    return (
        <div className={Style.container}>
            <div className={Style.imgContainer}>
                <img src={src} alt={alt} width={375} height={225} loading={"lazy"}></img>
            </div>
            <div>
                <h3>Project Title</h3>
                <ul>
                    <li>Filter :</li>
                    <li>Filter :</li>
                </ul>
                <p>Project Desc</p>
            </div>

        </div>
    );
};


export default Project;