import { useState } from 'react'

import './Participant.css'
import api from '../../api';

export default function Participant() {
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setFormData((prevState) => ({...prevState, [name]: value}));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const {status} = await api.post('participants/', formData)
        if (status == 201) {
            alert('Заявка успешно отправлена!')
        }
    }

    function handleMouseOver() {
        const leftTicketBlock = document.querySelector('.form__left')
        leftTicketBlock.classList.add('active-btn')
    }

    function handleMouseOut() {
        const leftTicketBlock = document.querySelector('.form__left')
        leftTicketBlock.classList.remove('active-btn')
    }
    return(
        <section id='participant' className='participant'>
            <div className="participant__container container">
                <h2 className='participant__title title'>Стань участником</h2>
                <p className="participant__desc">Если вы&nbsp;коллекционер морских раковин и&nbsp;желаете показать и&nbsp;продать свои раковины, заполните форму ниже.</p>
                <div className="participant__ticket">
                    <form onSubmit={handleFormSubmit} className='participant__form form' action="http://127.0.0.1:8000/participants" method='POST'>
                        <div className="form__left">
                            <input onChange={handleChange} className='form__input' type="text" name="name" value={formData.name} placeholder='Ваше имя' required />
                            <input onChange={handleChange} className='form__input' type="tel" name="phone_number" value={formData.phone_number} placeholder='Телефон' title='Телефон должен быть формата "+7"' pattern='^\+\d{11}$' required />
                            <input onChange={handleChange} className='form__input' type="text" name="description" value={formData.description} placeholder='Расскажите, что вас интересует' required />
                        </div>
                        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='btn-reset form__btn'>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        </section>
    )
}