import { useState } from 'react'

import { useTranslation } from "react-i18next";

import PostersView from '../PostersView/PostersView';
import DataView from '../DataView/DataView'

import './ContentAfisha.css'

export default function HeroAfisha() {
    const { t } = useTranslation();

    const [leftBtnIsActive, setLeftBtnIsActive] = useState(true);
    const [rightBtnIsActive, setRightBtnIsActive] = useState(false);

    const [postersView, setPostersView] = useState(true);
    const [dataView, setDataView] = useState(false);

    const handlePostersViewAdd = () => {
        setPostersView(true);
        setDataView(false);
        setLeftBtnIsActive(true);
        setRightBtnIsActive(false);
    }

    const handleDataViewAdd = () => {
        setPostersView(false);
        setDataView(true);
        setLeftBtnIsActive(false);
        setRightBtnIsActive(true);
    }

    return (
        <section className="content-afisha">
            <div className="content-afisha__container">
                <div className="content-afisha__buttons">
                    <button onClick={handlePostersViewAdd} className={`btn-reset content-afisha__btn ${leftBtnIsActive ? 'content-afisha__btn-active' : ''}`}><span className="content-afisha__text">{t('btnViewP')}</span></button>
                    <button onClick={handleDataViewAdd} className={`btn-reset content-afisha__btn ${rightBtnIsActive ? 'content-afisha__btn-active' : ''}`}><span className="content-afisha__text">{t('btnViewT')}</span></button>
                </div>
                { postersView && <PostersView /> }
                { dataView && <DataView /> }
            </div>
        </section>
    )
}