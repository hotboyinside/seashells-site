import "./Burger.css"

export default function Burger({mod}) {
    return (
        <svg className='burger' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${mod ? mod: ''}`} x="10" y="32.3999" width="28" height="3.2" fill="white"/>
            <rect className={`${mod ? mod: ''}`} x="10" y="22.3999" width="28" height="3.2" fill="white"/>
            <rect className={`${mod ? mod: ''}`} x="10" y="12.3999" width="28" height="3.2" fill="white"/>
        </svg>
    )
}