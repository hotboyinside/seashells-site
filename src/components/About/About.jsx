import Cards from "../Cards/Cards"
import './About.css'
import ReactPlayer from 'react-player';

export default function About() {
    const video_link = "../../assets/preview_video.mp4"
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__upper-content">
                    <div className="about__video">
                        <ReactPlayer
                        url={'video/preview_video.mp4'}
                        controls
                        width="100%"
                        height="100%"
                        className="about__video"
                        />
                    </div>
                    <div className="about__desc">
                        <h2 className="about__title title">О выставке</h2>
                        <p className="about__text">
                            Первая уникальная выставка морских раковин в&nbsp;России. Коллекционеры со&nbsp;всей страны расскажут о&nbsp;своем увлечении и&nbsp;продемонстрируют коллекции. На&nbsp;выставке вы&nbsp;увидите лучшие морские раковины и&nbsp;сможете их&nbsp;приобрести, познакомитесь с&nbsp;гуру-своего дела и&nbsp;узнаете много нового. Ждем вас! Вход свободный для всех желающих.
                        </p>
                    </div>
                </div>
                <div className="about__bottom-content">
                    <Cards />
                </div>
            </div>
        </section>
    )
}