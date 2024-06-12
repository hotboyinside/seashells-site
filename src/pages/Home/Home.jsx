import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Items from '../../components/Items/Items'
import ProgrammeSpeakers from '../../components/ProgrammeSpeakers/ProgrammeSpeakers'
import Sponsors from '../../components/Sponsors/Sponsors'
import Participant from '../../components/Participant/Participant'

import AfishaContext from '../../context/AfishaContext'

import { useState } from 'react'

export default function Home() {
  const [ burgerState, setBurgerState ] = useState(false);

  return (
    <>
      <AfishaContext.Provider value={{burgerState, setBurgerState}}>
        <Header />
        <main>
          <Hero />
          <About />
          <Items />
          <ProgrammeSpeakers />
          <Sponsors />
          <Participant />
        </main>
      </AfishaContext.Provider>
    </>
  )
}


