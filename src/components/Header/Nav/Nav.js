import React from 'react';
import style from './Nav.module.scss';
import { Link } from "react-scroll";

const Nav = () => {
    const links = [
        {id: 1, title: 'Обо мне', to: 'about'},
        {id: 2, title: 'Опыт', to: 'experience'},
        {id: 3, title: 'Навыки', to: 'skills'},
        {id: 4, title: 'Проекты', to: 'projects'},
        {id: 5, title: 'Контакты', to: 'footer'}
    ];
    
    const linksElements = links.map( link => {
        return (
            <Link key={link.id} to={link.to} activeClass={style.active}
                spy={true} smooth={true} offset={-60}>{link.title}</Link>
        )
    });

    return (
        <div className={style.nav}>
            {linksElements}
        </div>
    );
}

export default Nav;