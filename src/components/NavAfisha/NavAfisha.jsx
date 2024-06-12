import { Link } from 'react-router-dom'

import { useTranslation } from "react-i18next";

import './NavAfisha.css'

export default function NavAfisha ({mod}) {

    const { t } = useTranslation();

    return (
        <nav className="header__nav nav-afisha">
            <ul className={`nav__items active list-reset ${mod ? mod: ''}`}>
                <li className="nav__item dropdown"><Link to="/" className='nav__link'>{t("exhibition")}</Link></li>
                <li className="nav__item"><Link to="/afisha" className='nav__link'>{t("afisha")}</Link></li>
            </ul>
        </nav>
    )
}

