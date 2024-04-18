import './Items.css'


export default function Items() {
    return (
        <section className='items'>
            <div className="items__container">
                <h2 className='items__title'>ЭКСПОНАТЫ</h2>
                <div className='items__cards cards'>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>NEWCURAEBEAUTY</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>NEWCURAEUNBELEVEBABLE</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>PAPUINA PULCHERRIMA</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}