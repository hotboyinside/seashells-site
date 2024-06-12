import { useTranslation } from "react-i18next";

import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'

import './Hero.css'

export default function Hero() {

    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero__container">
                <div className='hero__blank-block'></div>
                <div className="hero__content">
                    <div className='hero__header-mobile'>
                        <Logo />
                        <Burger />
                    </div>
                    <h1 className="title hero_title">{t('exhibitionAndSale')}</h1>
                    <address className="hero_address">{t('address')}</address>
                    <p className="hero__date">{t('time')}</p>
                </div>
                <div className='hero__blank-block'></div>
            </div>
        </section>
    )
}