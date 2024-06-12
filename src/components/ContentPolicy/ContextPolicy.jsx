import { useTranslation } from "react-i18next";

import './ContextPolicy.css'

export default function ContextPolicy() {

    const { t } = useTranslation();
    
    return(
        <section className='policy'>
            <div className="container policy__container">
                <h1 className='policy__title'>{t('h1Policy')}</h1>
                <h2 className='policy__sub-title'>{t('h2CommonRules')}</h2>
                <p className='policy__text'>{t('commonRulesDesc')}</p>
                <p className='policy__text'>{t('commonRulesDesc1')}</p>
                <p className='policy__text'>{t('commonRulesDesc2')}</p>
                <h2 className='policy__sub-title'>{t('h2MainConcepts')}</h2>
                <p className='policy__text'>{t('mainConcepts1')}</p>
                <p className='policy__text'>{t('mainConcepts2')}</p>
                <p className='policy__text'>{t('mainConcepts3')}</p>
                <p className='policy__text'>{t('mainConcepts4')}</p>
                <p className='policy__text'>{t('mainConcepts5')}</p>
                <p className='policy__text'>{t('mainConcepts6')}</p>
                <p className='policy__text'>{t('mainConcepts7')}</p>
                <p className='policy__text'>{t('mainConcepts8')}</p>
                <p className='policy__text'>{t('mainConcepts9')}</p>
                <p className='policy__text'>{t('mainConcepts10')}</p>
                <p className='policy__text'>{t('mainConcepts11')}</p>
                <p className='policy__text'>{t('mainConcepts12')}</p>
                <p className='policy__text'>{t('mainConcepts13')}</p>
                <h2 className='policy__sub-title'>{t('h2OperatorOpportunities')}</h2>
                <p className='policy__text'>{t('operatorOpportunities1')}</p>
                <p className='policy__text'>{t('operatorOpportunities2')}</p>
                <p className='policy__text'>{t('operatorOpportunities3')}</p>
                <p className='policy__text'>{t('operatorOpportunities4')}</p>
                <p className='policy__text'>{t('operatorOpportunities5')}</p>
                <h2 className='policy__sub-title'>{t('h2PolicyGoals')}</h2>
                <p className='policy__text'>{t('policyGoals1')}</p>
                <p className='policy__text'>{t('policyGoals2')}</p>
                <p className='policy__text'>{t('policyGoals3')}</p>
                <h2 className='policy__sub-title'>{t('h2Rights')}</h2>
                <p className='policy__text'>{t('rights1')}</p>
                <p className='policy__text'>{t('rights2')}</p>
                <h2 className='policy__sub-title'>{t('h2Order')}</h2>
                <p className='policy__text'>{t('orderDesc')}</p>
                <p className='policy__text'>{t('order1')}</p>
                <p className='policy__text'>{t('order2')}</p>
                <p className='policy__text'>{t('order3')}</p>
                <p className='policy__text'>{t('order4')}</p>
                <h2 className='policy__sub-title'>{t('h2Trans')}</h2>
                <p className='policy__text'>{t('trans1')}</p>
                <p className='policy__text'>{t('trans2')}</p>
                <h2 className='policy__sub-title'>{t('h2Conclusion')}</h2>
                <p className="policy__text">{t('conclusion1')}</p>
                <p className="policy__text">{t('conclusion2')}</p>
                <p className="policy__text">{t('conclusion3')}</p>
            </div>
        </section>
    )
}
