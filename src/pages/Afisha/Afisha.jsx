import { useState } from 'react'

import AfishaContext from '../../context/AfishaContext'
import HeroAfisha from '../../components/HeroAfisha/HeroAfisha'
import HeaderAfisha from '../../components/HeaderAfisha/HeaderAfisha'
import ContentAfisha from '../../components/ContentAfisha/ContentAfisha'
import Share from '../../components/Share/Share'


export default function Afisha() {
    const [ burgerState, setBurgerState ] = useState(false)

    return (
        <>  
            <AfishaContext.Provider value={{burgerState, setBurgerState}}>
                <HeaderAfisha />
                <main>
                    <HeroAfisha />
                    <ContentAfisha />
                    <Share />
                </main>
            </AfishaContext.Provider>
        </>
    )
}