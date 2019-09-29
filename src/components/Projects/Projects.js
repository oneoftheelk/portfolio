import React from 'react';
import style from './Projects.module.scss';
import Fade from 'react-reveal/Fade';
import picture from '../../assets/img/temp.png';
import linkIcon from '../../assets/img/temp-icon.png';
import PageTitle from '../common/PageTitle';

const Projects = () => {
    let projects = [
        {id: 1, picture: picture, title: 'Портфолио',
        description: 'Какое-то портфолио, сделанное с помощью HTML и CSS. Какое-то портфолио, сделанное с помощью HTML и CSS.'},
        {id: 2, picture: picture, title: 'Социальная сеть',
        description: 'Какая-то учебная социальная сеть.'},
        {id: 3, picture: picture, title: 'Счётчик',
        description: 'Какой-то простейший счётчик.'},
        {id: 4, picture: picture, title: 'Четвёртый',
        description: 'Какой-то таинственный четвёртый проект.'}
    ]

    const projectsElements = projects.map( project => {
        return (
            <Project key={project.id}
                picture={project.picture}
                title={project.title}
                description={project.description} />
        )
    })
    
    return (
        <div id={'projects'} className={style.projectsContainer}>
            <PageTitle title='Проекты' />
            <div className={style.projects}>
                {projectsElements}
            </div>
        </div>
    );
}

const Project = (props) => {
    return (
        <Fade clear>
            <div className={style.project}>
                <div className={style.title}>
                    {props.title}
                    <img src={linkIcon} alt={'github'} />
                </div>
                <img className={style.picture} src={props.picture} alt={props.title}></img>
                <div className={style.description}>{props.description}</div>
            </div>
        </Fade>
    )
}

export default Projects;