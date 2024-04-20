import './Participant.css'

export default function Participant() {
    return(
        <section className='participant'>
            <div className="participant__container container">
                <h2 className='participant__title title'>Стань участником</h2>
                <p className="participant__desc">Если вы&nbsp;коллекционер морских раковин и&nbsp;желаете показать и&nbsp;продать свои раковины, заполните форму ниже.</p>
                <div className="participant__ticket">
                    <form className='participant__form form' action="" method='POST'>
                        <div className="form__left">
                            <input className='form__input' type="text" name="user_name" placeholder='Ваше имя' id="" />
                            <input className='form__input' type="text" name="user_phone" placeholder='Телефон' id="" />
                            <input className='form__input' type="text" name="user_desc" placeholder='Расскажите, что вас интересует' id="" />
                        </div>
                        <button className='btn-reset form__btn'>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        </section>
    )
}