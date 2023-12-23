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
                <img src={src} alt={alt} width={225} height={150} loading={"lazy"}></img>
            </div>
            <div className={Style.information}>
                <h3><a href={link}>{title ?? "Project Title"}</a></h3>
                <ul className={Style.tags}>
                    <li>Type : {type ?? "Unknown"}</li>
                    <li>Date: {date?.getFullYear() ?? "2000"}</li>
                </ul>
                <p>{children ?? "Project Desc"}</p>
            </div>

        </div>
    );
};


export default Project;