import './Items.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image from '../../assets/img_1.jpg'


export default function Items() {
    return (
        <section className='items'>
            <div className="items__container">
                <div className="container">
                    <Swiper
                        effect={'coverflow'}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
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
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
                {/* <h2 className='items__title'>ЭКСПОНАТЫ</h2>
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
                </div> */}
            </div>
        </section>
    )
}