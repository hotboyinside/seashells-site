import './Nav.css'

export default function Nav ({mod}) {
    return (
        <nav className="header__nav nav">
            <ul className={`nav__items list-reset ${mod ? mod: ''}`}>
                <li className="nav__item"><a className='nav__link' href="#about">О выставке</a></li>
                <li className="nav__item"><a className='nav__link' href="#items">Экспонаты</a></li>
                <li className="nav__item"><a className='nav__link' href="#programme">Программа</a></li>
                <li className="nav__item"><a className='nav__link' href="#sponsors">Спонсоры</a></li>
            </ul>
        </nav>
    )
}

