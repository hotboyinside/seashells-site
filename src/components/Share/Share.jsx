import { Link } from 'react-router-dom'
import './Share.css'

export default function Share() {
    return (
        <section className="share">
            <div className="share__container">
                <div className="share__left">
                    <h4 className="share__sub-title">актуально</h4>
                    <h2 className="share__section-title">Получайте актуальные новости о&nbsp;выставках</h2>
                </div>
                <div className="share__right">
                    <div className="share__top">
                        <div className="share__input-box">
                            <label htmlFor='email' className="share__label">Введите e-mail адрес</label>  
                            <input id="email" className="share__input" type="email" placeholder="name@domain.com"></input>
                        </div>
                        <button className="btn-reset btn share__btn"><span className="share__btn-text">Подписаться на&nbsp;новости</span></button>
                    </div>
                    <p className="share__desc">подписываясь на&nbsp;новости, вы автоматически соглашаетесь <Link to="/policy" className="share__desc_underline">с&nbsp;условиями обработки персональных данных</Link> и&nbsp;<span className="actual__desc_underline">правилами рекламных рассылок</span></p>
                </div>
            </div>
        </section>
    )
}