import './NavAfisha.css'

export default function NavAfisha ({mod}) {
    return (
        <nav className="header__nav nav-afisha">
            <ul className={`nav__items list-reset ${mod ? mod: ''}`}>
                <li className="nav__item dropdown"><a className='nav__link' href="/">Выставка</a></li>
                <li className="nav__item"><a className='nav__link' href="/afisha">Афиша</a></li>
            </ul>
        </nav>
    )
}

