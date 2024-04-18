import './Nav.css'

export default function Nav () {
    return (
        <nav className="header__nav nav">
            <ul className="nav__items list-reset">
                <li className="nav__item"><a href="">О выставке</a></li>
                <li className="nav__item"><a href="">Экспонаты</a></li>
                <li className="nav__item"><a href="">Программа</a></li>
                <li className="nav__item"><a href="">Спонсоры</a></li>
            </ul>
        </nav>
    )
}

