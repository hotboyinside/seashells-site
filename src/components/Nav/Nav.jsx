import { Link } from 'react-router-dom'

import { useTranslation } from "react-i18next";

import './Nav.css'

export default function Nav ({mod}) {

    const { t } = useTranslation();

    return (
        <nav className="header__nav nav">
            <ul className={`nav__items list-reset ${mod ? mod: ''}`}>
                <li className="nav__item dropdown">
                    <a className='nav__link' href="/">{t('exhibition')}</a>
                    <ul className="dropdown__content list-reset">
                        <li className='dropdown__item'><a className='dropdown__link' href="/#about">{t('about')}</a></li>
                        <li className='dropdown__item'><a className='dropdown__link' href="/#items">{t('exhibits')}</a></li>
                        <li className='dropdown__item'><a className='dropdown__link' href="/#programme">{t('program')}</a></li>
                        <li className='dropdown__item'><a className='dropdown__link' href="/#sponsors">{t('sponsors')}</a></li>
                    </ul>
                </li>
                <li className="nav__item"><Link to="/afisha" className='nav__link'>{t('afisha')}</Link></li>
            </ul>
        </nav>
    )
}

