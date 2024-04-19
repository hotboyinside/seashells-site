import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './Slider.css'

import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <div className="slider">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
                }}
                modules={[EffectCoverflow, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>NEWCURAEBEAUTY</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>NEWCURAEBEAUTY</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>NEWCURAEBEAUTY</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/item1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>NEWCURAEBEAUTY</h3>
                            <p className='card__text'>Папуина прекрасная. Вид является эндемиком острова Манус. Вид включен в&nbsp;Красную книгу МСОП, где ему присвоен статус &laquo;Near Threatened&raquo;.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow"></div>
                    <div className="swiper-button-next slider-arrow"></div>
                </div>
            </Swiper>
        </div>
    )
}

