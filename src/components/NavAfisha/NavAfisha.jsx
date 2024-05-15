import { Link } from 'react-router-dom'

import './NavAfisha.css'

export default function NavAfisha ({mod}) {
    return (
        <nav className="header__nav nav-afisha">
            <ul className={`nav__items active list-reset ${mod ? mod: ''}`}>
                <li className="nav__item dropdown"><Link to="/" className='nav__link'>Выставка</Link></li>
                <li className="nav__item"><Link to="/afisha" className='nav__link'>Афиша</Link></li>
            </ul>
        </nav>
    )
}

