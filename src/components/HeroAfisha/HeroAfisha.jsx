import { useTranslation } from "react-i18next";

import './HeroAfisha.css'

export default function HeroAfisha() {

    const { t } = useTranslation();

    return (
        <section className="hero-afisha">
            <div className="hero-afisha__container">
                <h1 className='hero-afisha__title'>{t('afisha')}</h1>
            </div>
        </section>
    )
}