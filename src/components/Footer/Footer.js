import React from 'react';
import style from './Footer.module.scss';
import PageTitle from '../common/PageTitle';
import linkedinIcon from '../../assets/img/linkedin.png';
import githubIcon from '../../assets/img/github.png';
import telegramIcon from '../../assets/img/telegram.png';
import gmailIcon from '../../assets/img/gmail.png';
import vkIcon from '../../assets/img/vk.png';

const Footer = () => {
    return (
        <div id={'footer'} className={style.footer}>
            <PageTitle title='Контакты' />
            <div className={style.contactLinks}>
                <img src={linkedinIcon} alt={'linkedin'} />
                <img src={githubIcon} alt={'github'} />
                <img src={telegramIcon} alt={'telegram'} />
                <img src={gmailIcon} alt={'gmail'} />
                <img src={vkIcon} alt={'vk'} />
            </div>
        </div>
    );
}

export default Footer;