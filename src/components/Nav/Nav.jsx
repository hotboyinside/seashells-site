import './Nav.css'

export default function Nav ({mod}) {
    return (
        <nav className="header__nav nav">
            <ul className={`nav__items list-reset ${mod ? mod: ''}`}>
                <li className="nav__item dropdown">
                    <a className='nav__link' href="/">Выставка</a>
                    <ul className="dropdown__content list-reset">
                        <li className='dropdown__item'><a className='dropdown__link' href="/#about">О&nbsp;выставке</a></li>
                        <li className='dropdown__item'><a className='dropdown__link' href="/#items">Экспонаты</a></li>
                        <li className='dropdown__item'><a className='dropdown__link' href="/#programme">Программа</a></li>
                        <li className='dropdown__item'><a className='dropdown__link' href="/#sponsors">Спонсоры</a></li>
                    </ul>
                </li>
                <li className="nav__item"><a className='nav__link' href="/afisha">Афиша</a></li>
            </ul>
        </nav>
    )
}

