import { useLocalStorage } from "../../context/LocalStorage";
import i18n from "../../../i18n";

import './Language.css'

export default function Language() {

    const [language, setLanguage] = useLocalStorage('language', 'ru');

    let innerBtnText = language === 'ru' ? 'EN' : 'RU';

    const languageHandler = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    }

    return (
        <a className='btn-reset language' onClick={languageHandler}>{innerBtnText}</a>
    )
}