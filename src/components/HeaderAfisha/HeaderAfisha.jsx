import NavAfisha from '../NavAfisha/NavAfisha'
import AfishaContext from '../../context/AfishaContext'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Language from '../Language/Language'
import Burger from '../Burger/Burger'

import './HeaderAfisha.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HeaderAfisha() {
    const value = useContext(AfishaContext);
    value.burgerState ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

    return (
        <header className="header-afisha">
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