import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import './banner.css'
import slider1 from '../../../assets/slide1.jpg'
import slider2 from '../../../assets/slide2.jpg'
import slider3 from '../../../assets/slide3.jpg'
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className='h-[450px]'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className=' relative'>
                        <img src={slider1} className='' alt="" />
                        <div className='absolute text-white top-10'>
                            <h2>THE BEST ALTERNATIVE OF NATURE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor incididunt 
                                 ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <div className='absolute text-white top-20'>
                            <h2>THE BEST ALTERNATIVE OF NATURE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor incididunt 
                                 ut labore et dolore magna aliqua</p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} className='object-contain' alt="" />
                    <div className='absolute text-white top-20 w-1/2'>
                            <h2>THE BEST ALTERNATIVE OF NATURE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor incididunt 
                                 ut labore et dolore magna aliqua</p>
                        </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;