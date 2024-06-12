import { useLocalStorage } from "../../context/LocalStorage";
import i18n from "../../../i18n";

import './Language.css'

export default function Language({children}) {

    const [language, setLanguage] = useLocalStorage('language', 'ru');

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
        <a className='btn-reset language' onClick={languageHandler}>{ children }</a>
    )
}