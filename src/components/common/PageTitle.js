import React from 'react';
import style from './PageTitle.module.scss';

const PageTitle = (props) => {
    return (
        <div className={style.pageTitle}>
            {props.title}
        </div>
    );
}

export default PageTitle;