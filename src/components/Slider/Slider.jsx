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
                        <img className='card__image' src="images/1.jpg" alt="seashell-1" />
                        <div className='card__desc'>
                            <h3 className='card__title'>COELOPLEURUS EXQUISITUS</h3>
                            <p className='card__text'>Изысканный еж &mdash; вид морских ежей, обитающий у&nbsp;побережья острова Новая Каледония в&nbsp;Тихом океане.<span className='card__text--bg'> Это эпифаунальный глубоководный вид, обитающий на&nbsp;глубине от&nbsp;240 до&nbsp;520 метров.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/2.jpg" alt="seashell-2" />
                        <div className='card__desc'>
                            <h3 className='card__title'>PLEUROTOMARIA VICDANI</h3>
                            <p className='card__text'>Плевротомарии&nbsp;&mdash; примитивное семейство брюхоногих моллюсков.<span className='card__text--bg'> Является реликтовым семейством, представители которого были широко распространены в&nbsp;палеозойской и&nbsp;мезозойской эре.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/3.jpg" alt="seashell-3" />
                        <div className='card__desc'>
                            <h3 className='card__title'>CYMBIOLA AULICA</h3>
                            <p className='card__text'>Вид морской улитки, брюхоногого моллюска семейства Volutidae, волюты.<span className='card__text--bg'> Жители Индо-Западной части Тихого океана собирают их как для употребления в&nbsp;пищу, так и&nbsp;для торговли раковинами.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/4.jpg" alt="seashell-4" />
                        <div className='card__desc'>
                            <h3 className='card__title'>CYPRAEA GUTTATA</h3>
                            <p className='card__text'>Пятнистая каури&nbsp;&mdash; брюхоногий моллюск из&nbsp;монотипического рода Perisserosa семейства Cypraeidae.<span className='card__text--bg'> Особенностью этого вида являются отчётливые зазубрины на&nbsp;раковине, которые покрывают всю нижнюю сторону, выдаваясь в&nbsp;стороны.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/5.jpg" alt="seashell-5" />
                        <div className='card__desc'>
                            <h3 className='card__title'>AMPHIDROMUS ROSEA</h3>
                            <p className='card__text'>Вид наземных брюхоногих моллюсков из&nbsp;семейства &laquo;Camaenidae&raquo;.<span className='card__text--bg'> В&nbsp;18&nbsp;веке они были одними из&nbsp;первых раковин индонезийских наземных улиток, привезенных в&nbsp;Европу купцами и&nbsp;путешественниками.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/6.jpg" alt="seashell-6" />
                        <div className='card__desc'>
                            <h3 className='card__title'>CYPRAEA MAPPA ROSEA</h3>
                            <p className='card__text'>Морской брюхоногий моллюск семейства Cypraeidae, каури.<span className='card__text--bg'> Животные этого вида обитают в&nbsp;тропических и&nbsp;субтропических водах юго-западного Тихого океана и&nbsp;северо-восточного Индийского океана.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="slider-controler">
                    <div tabIndex='0' className="swiper-button-prev slider-arrow"></div>
                    <div tabIndex='0' className="swiper-button-next slider-arrow"></div>
                </div>
            </Swiper>
        </div>
    )
}

