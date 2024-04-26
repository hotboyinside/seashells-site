import './ProgrammeSpeakers.css'
import { useEffect, useRef, useState } from 'react'

export default function ProgrammeSpeakers() {
    const keypointsRef = useRef()
    const cardsRef = useRef()
    const [keypointsVisible, setVisibleKeypoints] = useState()
    const [cardsVisible, setCardsVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisibleKeypoints(entry.isIntersecting)
            
        })
        observer.observe(keypointsRef.current)
        
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setCardsVisible(entry.isIntersecting)
        })
        observer.observe(cardsRef.current)
    }, [])

    return (
    <section className="programme">
        <div className="programme__container container">
            <h2 className="programme__title title">Программа<br />мероприятия</h2>
            <div className='programme__content timeline'>
                <div className={`timeline__line ${keypointsVisible ? 'timeline-active' : ''}`}></div>
                <div className={`timeline__vertical-line ${keypointsVisible ? 'timeline-vertical-active' : ''}`}></div>
                <ul ref={keypointsRef} className='timeline__keypoints list-reset'>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>10:00</time>
                        <span className='timeline__desc'>Начало<br />выставки</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>12:00</time>
                        <span className='timeline__desc'>Лекция<br />“Как найти хобби<br />на всю жизнь”</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>15:00</time>
                        <span className='timeline__desc'>Мастер-класс<br />“Обработка морских<br />раковин”</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>17:00</time>
                        <span className='timeline__desc'>Лекция<br />&laquo;О&nbsp;раковинах больших<br />и&nbsp;маленьких&raquo;</span>
                    </li>
                    <li className={`timeline__keypoint ${keypointsVisible ? 'keypoint-active' : ''}`}>
                        <time className='timeline__time'>20:00</time>
                        <span className='timeline__desc'>Закрытие<br />выставки</span>
                    </li>
                </ul>
            </div>
            <h2 className="speakers__title title">Приглашенные спикеры</h2>
            <div ref={cardsRef} className='speakers__cards'>
                <div className={`speakers__card ${cardsVisible ? 'active-card': ''}`}>
                    <img className='speakers__photo' src="images/avatar-1.jpg" alt="speaker1" />
                    <div className="speakers__content">
                        <h3 className='speakers__name'>Алексей Пикута</h3>
                        <p className='speakers__desc'>Коллекционер с&nbsp;25-летним опытом.</p>
                    </div>
                </div>
                <div className={`speakers__card ${cardsVisible ? 'active-card': ''}`}>
                    <img className='speakers__photo' src="images/avatar-2.jpg" alt="speaker2" />
                    <div className="speakers__content">
                        <h3 className='speakers__name'>Людмила Петровна</h3>
                        <p className='speakers__desc'>Ученый-океанолог, коллекционер.</p>
                    </div>
                </div>
                <div className={`speakers__card ${cardsVisible ? 'active-card': ''}`}>
                    <img className='speakers__photo' src="images/avatar-3.jpg" alt="speaker3" />
                    <div className="speakers__content">
                        <h3 className='speakers__name'>Геннадий Яковлев</h3>
                        <p className='speakers__desc'>Коллекционер-продавец.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    )
}