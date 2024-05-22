import { useState } from 'react'

import HeaderAfisha from '../../components/HeaderAfisha/HeaderAfisha'
import ContextPolicy from '../../components/ContentPolicy/ContextPolicy'

import AfishaContext from '../../context/AfishaContext';

export default function Policy() {
    const [ burgerState, setBurgerState ] = useState(false);
    return (
        <>  
            <AfishaContext.Provider value={{burgerState, setBurgerState}}>
                <HeaderAfisha />
                <main>
                    <ContextPolicy />
                </main>
            </AfishaContext.Provider>
        </>
    )
}


