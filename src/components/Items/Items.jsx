import { useTranslation } from "react-i18next";

import Slider from '../Slider/Slider';

import './Items.css';

export default function Items() {

    const { t } = useTranslation();

    return (
        <section id='items' className='items'>
            <div className="items__container">
                <h2 className='items__title'>{t('exhibits')}</h2>
                <Slider type="items"/>
            </div>
        </section>
    )
}