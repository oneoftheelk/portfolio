import React from 'react';
import style from './Footer.module.scss';
import PageTitle from '../common/PageTitle';
import linkedinIcon from '../../assets/img/contacts/linkedin.png';
import githubIcon from '../../assets/img/contacts/github.png';
import telegramIcon from '../../assets/img/contacts/telegram.png';
import gmailIcon from '../../assets/img/contacts/gmail.png';
import vkIcon from '../../assets/img/contacts/vk.png';

const Footer = () => {
    return (
        <div id={'footer'} className={style.footer}>
            <PageTitle title='Контакты' />
            <div className={style.contactLinks}>
                <a href={'https://github.com/oneoftheelk'} className={style.link} target='_blank' rel='noopener noreferrer'>
                    <img src={githubIcon} alt={'github'} />
                </a>
                <a href={'mailto:RamanTamilin@gmail.com'} className={style.link} target='_blank' rel='noopener noreferrer'>
                    <img src={gmailIcon} alt={'gmail'} />
                </a>
                <a href={'https://t.me/RamanTamilin'} className={style.link} target='_blank' rel='noopener noreferrer'>
                    <img src={telegramIcon} alt={'telegram'} />
                </a>
                <a href={'https://www.linkedin.com/in/raman-tamilin-468376194'} className={style.link} target='_blank' rel='noopener noreferrer'>
                    <img src={linkedinIcon} alt={'linkedin'} />
                </a>
                <a href={'https://vk.com/oneofthe'} className={style.link} target='_blank' rel='noopener noreferrer'>
                    <img src={vkIcon} alt={'vk'} />
                </a>
            </div>
        </div>
    );
}

export default Footer;