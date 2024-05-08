import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Items from '../../components/Items/Items'
import ProgrammeSpeakers from '../../components/ProgrammeSpeakers/ProgrammeSpeakers'
import Sponsors from '../../components/Sponsors/Sponsors'
import Participant from '../../components/Participant/Participant'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Items />
        <ProgrammeSpeakers />
        <Sponsors />
        <Participant />
      </main>
    </>
  )
}


