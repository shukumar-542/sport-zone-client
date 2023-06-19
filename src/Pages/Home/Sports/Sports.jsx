import React from 'react';
import pic1 from '../../../assets/pic1.jpg'
import pic2 from '../../../assets/pic2.jpg'
import pic3 from '../../../assets/pic3.jpg'
import pic4 from '../../../assets/pic4.jpg'
import pic5 from '../../../assets/pic5.jpg'
import pic6 from '../../../assets/pic6.jpg'
import icon1 from '../../../assets/icon1-hover.png'
import icon2 from '../../../assets/icon2-hover.png'
import icon3 from '../../../assets/icon3-hover.png'
import icon4 from '../../../assets/icon4-hover.png'
import icon5 from '../../../assets/running.png'
import icon6 from '../../../assets/weight_lifting.png'

const Sports = () => {
    return (
        <div className='md:flex '>
            <div className='relative group'>
                <img src={pic1} className='brightness-50' alt="" />
                <img src={icon1} className='absolute top-20 left-28 md:left-5 md:top-5 ' alt="" />
                <h2 className='absolute bottom-28 left-36 md:bottom-5 md:left-12  text-white font-bold'>CYCLING</h2>
            </div>
          
            <div className='relative'>
                <img src={pic2} className='brightness-50' alt="" />
                <img src={icon2} className='absolute top-20 left-28 md:left-5 md:top-5 ' alt="" />
                <h2 className='absolute bottom-28 left-36 md:bottom-5 md:left-12  text-white font-bold'>GOLF</h2>
            </div>
            <div className='relative'>
                <img src={pic3} className='brightness-50' alt="" />
                <img src={icon3} className='absolute top-20 left-28 md:left-5 md:top-5 ' alt="" />
                <h2 className='absolute bottom-28 left-36 md:bottom-5 md:left-12  text-white font-bold'>SWIMMING</h2>
            </div>
            <div className='relative'>
                <img src={pic4} className='brightness-50' alt="" />
                <img src={icon4} className='absolute top-20 left-28 md:left-5 md:top-5 ' alt="" />
                <h2 className='absolute bottom-28 left-36 md:bottom-5 md:left-12  text-white font-bold'>TENNIS</h2>
            </div>
            <div className='relative'>
                <img src={pic5} className='brightness-50' alt="" />
                <img src={icon5} className='absolute top-20 left-28 md:left-5 md:top-5 ' alt="" />
                <h2 className='absolute bottom-28 left-36 md:bottom-5 md:left-12  text-white font-bold'>TRACK TRACING</h2>
            </div>
            <div className='relative'>
                <img src={pic6} className='brightness-50' alt="" />
                <img src={icon6} className='absolute top-20 left-28 md:left-5 md:top-5 ' alt="" />
                <h2 className='absolute bottom-28 left-36 md:bottom-5 md:left-12  text-white font-bold'>WEIGHT</h2>
            </div>
          
         
        </div>
    );
};

export default Sports;