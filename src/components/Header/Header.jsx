import './Header.css'
import Button from '../Button/Button'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Nav />
                <Logo />
                <Button />
            </div>
        </header>
        
    )
}