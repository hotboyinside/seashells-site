import { useTranslation } from "react-i18next";

import "./Cards.css"

export default function Cards() {

    const { t } = useTranslation();

    return (
        <ul className='about__cards list-reset'>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">{t('speakers1')}</p>
                <p className="about__cards-title-part2">{t('speakers2')}</p>
                <span className="about__cards-number">3</span>
            </li>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">{t('seashellsTypes1')}</p>
                <p className="about__cards-title-part2">{t('seashellsTypes2')}</p>
                <span className="about__cards-number">+48</span>
            </li>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">{t('records1')}</p>
                <p className="about__cards-title-part2">{t('records2')}</p>
                <span className="about__cards-number">6</span>
            </li>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">{t('collectors1')}</p>
                <p className="about__cards-title-part2">{t('collectors2')}</p>
                <span className="about__cards-number">+15</span>
            </li>
        </ul>
    )
}
