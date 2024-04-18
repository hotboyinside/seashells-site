import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div></div>
                <div className="hero__content">
                    <h1 className="title hero_title">Выставка-продажа морских раковин</h1>
                    <address className="hero_address">Санкт-Петербург, Невский проспект, д. 35</address>
                    <p className="hero__date">10 июля 2024, 10:00</p>
                </div>
                <div></div>
            </div>
        </section>
    )
}