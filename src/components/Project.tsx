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
           <div>
               <h3 className={Style.title}>{title}</h3>
               <div className={Style.categoriesContainer}>
                   <div>Year:<br/> {date?.toLocaleDateString()}  </div>
                   <div>Type:<br/> {type}</div>
               </div>
               <div className={Style.descContainer}>
                   {children}
               </div>
               <div className={Style.buttonContainer}>
                   { github ?  <a href={github}>GitHub Repo</a> : null }
                   { link ? <a href={link}>Live Project</a> : null }
               </div>
           </div>
           <div className={Style.imgContainer}>
               <img src={src} alt={alt} width={375} height={225} loading={"lazy"}></img>
           </div>
       </div>
    );
};


export default Project;