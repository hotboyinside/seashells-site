import { Swiper, SwiperSlide } from 'swiper/react';
import { itemsCard, persons } from '../../data';
import ItemCard from '../ItemCard/ItemCard';

import { useTranslation } from "react-i18next";

import 'swiper/css';
import './Slider.css'


import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function Slider(props) {

    const { t } = useTranslation();
    const items = props.type === 'items' ? t('items', { returnObjects: true }) : t('persons', { returnObjects: true });
    
    const content = items.map(item => (
        <SwiperSlide key={item.title}>
            <ItemCard {...item} />
        </SwiperSlide>
    ));

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
                { content }
                <div className="slider-controler">
                    <div tabIndex='0' className="swiper-button-prev slider-arrow"></div>
                    <div tabIndex='0' className="swiper-button-next slider-arrow"></div>
                </div>
            </Swiper>
        </div>
    )
}

