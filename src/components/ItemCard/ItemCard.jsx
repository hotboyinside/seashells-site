import './ItemCard.css'

export default function ItemCard(props) {
    return (
        <div className='card'>
            <span className='card__left-control control'></span>
            <span className='card__right-control control'></span>
            <img className='card__image' src={ props.image_path } alt={ props.alt } />
            <div className='card__desc'>
                <h3 className='card__title'>{ props.title }</h3>
                <p className='card__text'>{ props.main_text }<span className='card__text--bg'>{ props.optional_text }</span></p>
            </div>
        </div>
    )
}


