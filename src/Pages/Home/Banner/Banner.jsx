import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import './banner.css'
import slider1 from '../../../assets/slide1.jpg'
import slider2 from '../../../assets/slide2.jpg'
import slider3 from '../../../assets/slide3.jpg'

const Banner = () => {
    return (
        <div className='my-container'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className='h-28 w-full'>
                <img src={slider1} className='' alt="" />
                    </div></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;