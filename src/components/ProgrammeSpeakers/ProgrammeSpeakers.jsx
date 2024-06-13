import { useEffect, useRef, useState } from 'react'

import { useTranslation } from "react-i18next";

import Slider from '../Slider/Slider'

import './ProgrammeSpeakers.css'


export default function ProgrammeSpeakers() {

    const { t } = useTranslation();

    const keypointsRef = useRef()
    const cardsRef = useRef()
    const [keypointsVisible, setVisibleKeypoints] = useState()
    const [cardsVisible, setCardsVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisibleKeypoints(entry.isIntersecting)
            
        })
        observer.observe(keypointsRef.current)
        
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setCardsVisible(entry.isIntersecting)
        })
        observer.observe(cardsRef.current)
    }, [])

    return (
    <section id='programme' className="programme">
        <div className="programme__container container">
            <h2 className="programme__title title">{t('event')}<br />{t('programme')}</h2>
            <div className='programme__content timeline'>
                <div className={`timeline__line ${keypointsVisible ? 'timeline-active' : ''}`}></div>
                <div className={`timeline__vertical-line ${keypointsVisible ? 'timeline-vertical-active' : ''}`}></div>
                <ul ref={keypointsRef} className='timeline__keypoints list-reset'>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>10:00</time>
                        <span className='timeline__desc'>{t('beginning')}<br/>{t("exhibition's")}</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>12:00</time>
                        <span className='timeline__desc'>{t('lecture')}<br className='programme__desktop-offset' />{t("lecture1-1")}<br className='programme__mobile-offset' />{t("lecture1-2")}<br className='programme__desktop-offset' />{t("lecture1-3")}<br className='programme__mobile-offset' />{t("lecture1-4")}</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>15:00</time>
                        <span className='timeline__desc'>{t('masterClass')}<br />{t('masterClass-1')}<br className='programme__mobile-offset' />{t('masterClass-2')}<br className='programme__desktop-offset' />{t('masterClass-3')}</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>17:00</time>
                        <span className='timeline__desc'>{t('lecture')}<br />{t('lecture2-1')}&nbsp;{t('lecture2-2')}<br className='programme__mobile-offset' />{t('lecture2-3')}<br />{t('lecture2-4')}</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>20:00</time>
                        <span className='timeline__desc'>{t('closing-1')}<br />{t('closing-2')}</span>
                    </li>
                </ul>
            </div>
            <h2 className="speakers__title title">{t('invitedPersons')}</h2>
            <div ref={cardsRef} className='speakers__cards'>
                <div className={`speakers__card ${cardsVisible ? 'active-card': ''}`}>
                    <img className='speakers__photo' src="images/avatar-1.jpg" alt="speaker1" />
                    <div className="speakers__content">
                        <h3 className='speakers__name'>{t('personName1')}</h3>
                        <p className='speakers__desc'>{t('persondesc1')}</p>
                    </div>
                </div>
                <div className={`speakers__card ${cardsVisible ? 'active-card': ''}`}>
                    <img className='speakers__photo' src="images/avatar-2.jpg" alt="speaker2" />
                    <div className="speakers__content">
                        <h3 className='speakers__name'>{t('personName2')}</h3>
                        <p className='speakers__desc'>{t('persondesc2')}</p>
                    </div>
                </div>
                <div className={`speakers__card ${cardsVisible ? 'active-card': ''}`}>
                    <img className='speakers__photo' src="images/avatar-3.jpg" alt="speaker3" />
                    <div className="speakers__content">
                        <h3 className='speakers__name'>{t('personName3')}</h3>
                        <p className='speakers__desc'>{t('persondesc3')}</p>
                    </div>
                </div>
            </div>
            <div className='speakers__slider'><Slider type='persons'></Slider></div>
        </div>
    </section>
    )
}