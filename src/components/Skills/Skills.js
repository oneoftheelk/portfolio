import React from 'react';
import style from './Skills.module.scss';
import htmlIcon from '../../assets/img/skills/html-icon.png';
import cssIcon from '../../assets/img/skills/css-icon.png';
import jsIcon from '../../assets/img/skills/js-icon.png';
import reactIcon from '../../assets/img/skills/react-icon.png';
import reduxIcon from '../../assets/img/skills/redux-icon.png';
import bootstrapIcon from '../../assets/img/skills/bootstrap-icon.png';
import sassIcon from '../../assets/img/skills/sass-icon2.png';
import gitIcon from '../../assets/img/skills/git-icon.png';
import PageTitle from '../common/PageTitle';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    let skills = [
        {id: 1, icon: reactIcon, title: 'React'},
        {id: 2, icon: reduxIcon, title: 'Redux'},
        {id: 3, icon: jsIcon, title: 'Javascript'},
        {id: 4, icon: sassIcon, title: 'SCSS'},
        {id: 5, icon: htmlIcon, title: 'HTML'},
        {id: 6, icon: cssIcon, title: 'CSS'},
        {id: 7, icon: bootstrapIcon, title: 'Bootstrap'},
        {id: 8, icon: gitIcon, title: 'Git'}        
    ]

    const skillsElements = skills.map( skill => {
        return <Skill key={skill.id} icon={skill.icon} title={skill.title} />
    })

    return (
        <div id={'skills'} className={style.skillsContainer}>
            <PageTitle title='Навыки' />
            <div className={style.skills}>
                {skillsElements}
            </div>
        </div>
    );
}

const Skill = (props) => {
    return (
        <Fade clear>
            <div className={style.skill}>
                <img src={props.icon} alt={props.title} />
                <div>{props.title}</div>
            </div>
        </Fade>
    )
}

export default Skills;