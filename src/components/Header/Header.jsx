import './Header.css'
import Button from '../Button/Button'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'
import Language from '../Language/Language'

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Nav />
                <Logo />
                <div className='headers__buttons'>
                    <Button linkPath={'#participant'}>Стать участником</Button>
                    <Language>RU</Language>
                </div>
                <Burger mod={'burger_black'} />
            </div>
        </header>
        
    )
}