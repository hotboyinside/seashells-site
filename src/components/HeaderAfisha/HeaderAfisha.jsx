import NavAfisha from '../NavAfisha/NavAfisha'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Language from '../Language/Language'
import Burger from '../Burger/Burger'

import './HeaderAfisha.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <NavAfisha />
                <Logo />
                <div className='headers__buttons'>
                    <Button mod={'hidden'} linkPath={'#participant'}>Стать участником</Button>
                    <Language>RU</Language>
                </div>
                <Burger mod={'burger_black'} />
            </div>
        </header>
        
    )
}