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
                        <img className='card__image' src="images/1.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>COELOPLEURUS EXQUISITUS</h3>
                            <p className='card__text'>Изысканный еж &mdash; вид морских ежей, обитающий у&nbsp;побережья острова Новая Каледония в&nbsp;Тихом океане. Это эпифаунальный глубоководный вид, обитающий на&nbsp;глубине от&nbsp;240 до&nbsp;520м.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/2.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>PLEUROTOMARIA VICDANI</h3>
                            <p className='card__text'>Плевротомарии&nbsp;&mdash; примитивное семейство брюхоногих моллюсков. Является реликтовым семейством, представители которого были широко распространены в&nbsp;палеозойской и&nbsp;мезозойской эре.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/3.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>CYMBIOLA AULICA</h3>
                            <p className='card__text'>Также известная как княжеская или придворная волюта&nbsp;&mdash; вид морской улитки, морского брюхоногого моллюска семейства Volutidae, волюты.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/4.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>CYPRAEA GUTTATA</h3>
                            <p className='card__text'>Пятнистая каури&nbsp;&mdash; брюхоногий моллюск из&nbsp;монотипического рода Perisserosa семейства Cypraeidae. Животные этого вида обитают в&nbsp;тропических и&nbsp;субтропических водах юго-западного Тихого океана и&nbsp;северо-восточного Индийского океана.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/5.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>AMPHIDROMUS ROSEA</h3>
                            <p className='card__text'>Вид наземных брюхоногих моллюсков из&nbsp;семейства &laquo;Camaenidae&raquo;. Вид наземных брюхоногих моллюсков из&nbsp;семейства &laquo;Camaenidae&raquo;. Раковины Amphidromus относительно большие, от&nbsp;25&nbsp;мм до&nbsp;75&nbsp;мм в&nbsp;максимальном размере, и&nbsp;особенно красочные.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <span className='card__left-control control'></span>
                        <span className='card__right-control control'></span>
                        <img className='card__image' src="images/6.jpg" alt="" />
                        <div className='card__desc'>
                            <h3 className='card__title'>CYPRAEA MAPPA ROSEA</h3>
                            <p className='card__text'>Общее название картографического каури, представляет собой разновидность крупной морской улитки, каури, морского брюхоногого моллюска семейства Cypraeidae, каури.</p>
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

