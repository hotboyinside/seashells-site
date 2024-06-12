import { useTranslation } from "react-i18next";

import './DataView.css'

export default function PostersView() {

    const { t } = useTranslation();

    return (
        <ul className="content-afisha__elements list-reset">
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName1')}</h3>
                <address className='content-afisha__address'>{t('posterAddress1')}</address>
                <time className='content-afisha__date'>{t('posterDate1')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName2')}</h3>
                <address className='content-afisha__address'>{t('posterAddress2')}</address>
                <time className='content-afisha__date'>{t('posterDate2')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName3')}</h3>
                <address className='content-afisha__address'>{t('posterAddress3')}</address>
                <time className='content-afisha__date'>{t('posterDate3')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName4')}</h3>
                <address className='content-afisha__address'>{t('posterAddress4')}</address>
                <time className='content-afisha__date'>{t('posterDate4')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName5')}</h3>
                <address className='content-afisha__address'>{t('posterAddress5')}</address>
                <time className='content-afisha__date'>{t('posterDate5')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName6')}</h3>
                <address className='content-afisha__address'>{t('posterAddress6')}</address>
                <time className='content-afisha__date'>{t('posterDate6')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName7')}</h3>
                <address className='content-afisha__address'>{t('posterAddress7')}</address>
                <time className='content-afisha__date'>{t('posterDate7')}</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">{t('posterName8')}</h3>
                <address className='content-afisha__address'>{t('posterAddress8')}</address>
                <time className='content-afisha__date'>{t('posterDate8')}</time>
            </li>
        </ul>
    )
}
