import Cards from "../Cards/Cards"

import ReactPlayer from 'react-player';

import { useTranslation } from "react-i18next";

import './About.css'

export default function About() {

    const { t } = useTranslation();

    return (
        <section id="about" className="about">
            <div className="about__container">
                <div className="about__upper-content">
                    <div className="about__video">
                        <ReactPlayer
                        url={'video/preview_video.mp4'}
                        controls
                        width="100%"
                        height="100%"
                        className="about__video"
                        />
                    </div>
                    <div className="about__desc">
                        <h2 className="about__title title">{t('about')}</h2>
                        <p className="about__text">
                            <span className="about__text--bg">{t('exhibitionInformation1')}</span>{t('exhibitionInformation2')}<span className="about__text--desktop">{t('exhibitionInformation3')}</span>
                        </p>
                    </div>
                </div>
                <div className="about__bottom-content">
                    <p className="about__text--mobile">{t('exhibitionInformation3')}</p>
                    <Cards />
                </div>
            </div>
        </section>
    )
}