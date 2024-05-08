import './ContentAfisha.css'

export default function HeroAfisha() {
    return (
        <section className="content-afisha">
            <div className="content-afisha__container">
                <div className="content-afisha__buttons">
                    <button className="btn btn-reset content-afisha__btn-1"><span className="content-afisha__text">Список постеров</span></button>
                    <button className="btn btn-reset content-afisha__btn-2"><span className="content-afisha__text">Текстовый список</span></button>
                </div>
                <ul className="content-afisha__items list-reset">
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">МУРЕКС</h3>
                        <img className="content-afisha__image" src="/images/afisha-1.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">СИЯНИЕ</h3>
                        <img className="content-afisha__image" src="/images/afisha-2.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">ВОЛЮТА</h3>
                        <img className="content-afisha__image" src="/images/afisha-3.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">КОЛЮЧКА</h3>
                        <img className="content-afisha__image" src="/images/afisha-4.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">УЛИТКА</h3>
                        <img className="content-afisha__image" src="/images/afisha-5.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">НАУТИЛУС</h3>
                        <img className="content-afisha__image" src="/images/afisha-6.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">ЦИПРЕЯ</h3>
                        <img className="content-afisha__image" src="/images/afisha-7.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">КОНУС</h3>
                        <img className="content-afisha__image" src="/images/afisha-8.png" alt=""/>
                    </li>
                    <li className="content-afisha__item">
                        <h3 className="content-afisha__item-title">СОВСЕМ СКОРО</h3>
                    </li>
                </ul>
            </div>
        </section>
    )
}