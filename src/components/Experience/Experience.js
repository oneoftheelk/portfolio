import React from 'react';
import style from './Experience.module.scss';
import PageTitle from '../common/PageTitle';
import Fade from 'react-reveal/Fade';

const Experience = (props) => {
    return (
        <div id={'experience'} className={style.experienceContainer}>
            <PageTitle title={'Опыт'} />
            <Fade clear>
                <div className={style.experience}>
                    <div className={style.education}>
                        <div className={style.title}>Образование</div>
                        <div>09.2009 - 01.2013</div>
                        <div>Колледж электроники</div>
                        <div>Техник-программист</div>
                    </div>
                    <div className={style.job}>
                        <div className={style.title}>Работа</div>
                        <div>01.2013 - по настоящее время</div>
                        <div>ГК "ПарфюмБытХим"</div>
                        <div>Диспетчер автоматизированной <br />системы управления складом</div>
                        <div>• автоматизация складских процессов<br />• настройка WMS<br />• обучение новых сотрудников</div>
                    </div>
                    <div className={style.incubator}>
                        <div className={style.title}>Курсы</div>
                        <div>07.2019 - по настоящее время</div>
                        <div>it-incubator</div>
                        <div>React, Redux, Javascript</div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Experience;