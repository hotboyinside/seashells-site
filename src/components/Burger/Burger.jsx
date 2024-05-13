import AfishaContext from '../../context/AfishaContext'
import { useContext } from "react";
import "./Burger.css"

export default function Burger({mod}) {
    
    // const value = useContext(AfishaContext)
    // value.setBurgerState(!value.burgerState)
    // console.log(value.burgerState)

    const handlerBurger = (e) => {
        e.currentTarget.classList.toggle('active')
    };

    return (
        <div className="burger__icon" onClick={handlerBurger}>
            <span></span>
        </div>
    )
}