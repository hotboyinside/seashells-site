import './Hero.css'
import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className='hero__blank-block'></div>
                <div className="hero__content">
                    <div className='hero__header-mobile'>
                        <Logo />
                        <Burger mod="burger_white"/>
                    </div>
                    <h1 className="title hero_title">Выставка-продажа морских раковин</h1>
                    <address className="hero_address">Санкт-Петербург, Невский проспект,&nbsp;д.&nbsp;35</address>
                    <p className="hero__date">10 июля 2024, 10:00</p>
                </div>
                <div className='hero__blank-block'></div>
            </div>
        </section>
    )
}