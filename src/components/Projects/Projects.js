import React from 'react';
import style from './Projects.module.scss';
import Fade from 'react-reveal/Fade';
import PageTitle from '../common/PageTitle';
import linkIcon from '../../assets/img/temp-icon.png';
import tournamentTable from './../../assets/img/projects/tournament-table.jpg';
import portfolio from './../../assets/img/projects/portfolio.jpg';
import counter from './../../assets/img/projects/counter.jpg';
import socialNetwork from './../../assets/img/projects/social-network.jpg';

const Projects = () => {
    let projects = [
        {id: 1, picture: tournamentTable, title: 'Турнирная таблица', link: 'https://oneoftheelk.github.io/tournament-table/',
        description: 'Турнирная таблица'},
        {id: 2, picture: portfolio, title: 'Портфолио', link: '#',
        description: 'Портфолио'},
        {id: 3, picture: counter, title: 'Счётчик', link: '#',
        description: 'Счётчик'},
        {id: 4, picture: socialNetwork, title: 'Социальная сеть', link: 'https://oneoftheelk.github.io/social-network-react/',
        description: 'Социальная сеть'}
    ]

    const projectsElements = projects.map( project => {
        return (
            <Project key={project.id}
                picture={project.picture}
                title={project.title}
                description={project.description}
                link={project.link} />
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
                    <a href={props.link} className={style.link}>
                        <img src={linkIcon} alt={'github'} />
                    </a>
                </div>
                <img className={style.picture} src={props.picture} alt={props.title}></img>
                <div className={style.description}>{props.description}</div>
            </div>
        </Fade>
    )
}

export default Projects;