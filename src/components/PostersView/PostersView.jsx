import { useTranslation } from "react-i18next";

import './PostersView.css'

export default function PostersView() {

    const { t } = useTranslation();

    return (
        <ul className="content-afisha__items list-reset">
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName1')}</h3>
                <img className="content-afisha__image" src="/images/afisha-1.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName2')}</h3>
                <img className="content-afisha__image" src="/images/afisha-2.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName3')}</h3>
                <img className="content-afisha__image" src="/images/afisha-3.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName4')}</h3>
                <img className="content-afisha__image" src="/images/afisha-4.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName5')}</h3>
                <img className="content-afisha__image" src="/images/afisha-5.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName6')}</h3>
                <img className="content-afisha__image" src="/images/afisha-6.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName7')}</h3>
                <img className="content-afisha__image" src="/images/afisha-7.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('posterName8')}</h3>
                <img className="content-afisha__image" src="/images/afisha-8.png" alt=""/>
            </li>
            <li className="content-afisha__item">
                <h3 className="content-afisha__item-title">{t('soon')}</h3>
            </li>
        </ul>
    )
}
