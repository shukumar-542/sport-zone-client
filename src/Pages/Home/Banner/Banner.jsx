import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import './banner.css'
import slider1 from '../../../assets/rugby.jpg'
import slider2 from '../../../assets/swim-bg.jpg'
import slider3 from '../../../assets/cover1.jpg'
import 'swiper/css/navigation';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className='h-[450px] '>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                    <img src={slider2} alt="" />
                    <div className='absolute text-white top-32 md:left-[50%] w-1/3'>

                        <h2 className='md:text-6xl font-bold text-black'><Fade cascade dumping={5}>Train with Us</Fade> </h2>
                        <p className='text-black my-5'>We train you with the best professional trainers for the specific sport you choose.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    

                    <img src={slider3} className='object-contain' alt="" />
                    <div className='absolute text-white top-28 md:left-20 w-1/3'>
                        <h2 className='md:text-6xl font-bold text-black'>THE BEST ALTERNATIVE OF NATURE</h2>
                        <p className='text-black my-5'>Get professional advise from experts in the sport you love!</p>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                <div className=' relative h-full'>
                        <img src={slider1} className='bg-opacity-30' alt="" />
                        <div className='absolute text-white top-32 left-20 w-1/3'>
                            <h2 className='md:text-6xl font-bold'>We Create History</h2>
                            <p className='my-5'>With lots of Features & Stylish Shortcodes makes WHiSTLE a Complete Sports Theme
                                BE A PART OF IT
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;