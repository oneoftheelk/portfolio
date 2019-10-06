import React from 'react';
import style from './Header.module.scss';
import Nav from './Nav/Nav';

const Header = (props) => {
    return (
        <div className={style.header}>
            <Nav />
        </div>
    );
}

export default Header;