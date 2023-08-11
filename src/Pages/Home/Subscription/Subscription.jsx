import React from 'react';
import c7 from '../../../assets/c7.jpg'
import c8 from '../../../assets/c8.jpg'
import c9 from '../../../assets/c9.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

const Subscription = () => {
    return (
        <div className='my-10'>
            <div className='text-center py-5'>
                <h1 className='uppercase text-4xl font-bold'>Subscription Prices</h1>
                <p>EXCLUSIVE TRAINING PACKAGES</p>
            </div>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div data-aos="zoom-in-right" data-aos-delay="300" className='border group hover:border-blue-500'>
                    <img src={c7} alt="" />
                    <div className='px-5 py-5 space-y-4'>
                        <div>
                            <h2 className='font-semibold'>SWIMMING COACH</h2>
                            <p>Training Center</p>
                        </div>
                        <p>Swim practice is more than swimming laps in a pool. It's chasing the clock to see how fast you can go. And how long you can hold that pace</p>
                    </div>
                    <div className='grid grid-cols-3 '>
                        <div className='border-t border-r  p-5 group-hover:border-blue-500'>$82</div>
                        <div className='border-t border-r p-5 group-hover:border-blue-500'>65 Days</div>
                        <div className='border-t p-5 group-hover:border-blue-500'>Details</div>
                    </div>
                </div>
                <div  data-aos="zoom-out-down" data-aos-delay="300" className='border group hover:border-blue-500'>
                    <img src={c8} alt="" />
                    <div className='px-5 py-5 space-y-4'>
                        <div>
                            <h2 className='font-semibold'>TENNIS CHAMPION</h2>
                            <p>Reputed Training</p>
                        </div>
                        <p>The Championships, commonly known simply as Wimbledon, is the oldest tennis tournament in the world and is regarded by many as the most</p>
                    </div>
                    <div className='grid grid-cols-3 '>
                        <div className='border-t border-r  p-5 group-hover:border-blue-500'>$82</div>
                        <div className='border-t border-r p-5 group-hover:border-blue-500'>65 Days</div>
                        <div className='border-t p-5 group-hover:border-blue-500'>Details</div>
                    </div>
                </div>
                <div data-aos="fade-up-right" data-aos-delay="300" className='border group hover:border-blue-500'>
                    <img src={c9} alt="" />
                    <div className='px-5 py-5 space-y-4'>
                        <div>
                            <h2 className='font-semibold'>TREKKING PRACTICE</h2>
                            <p>By well Experienced</p>
                        </div>
                        <p>Tracking is the aiming skill of keeping your crosshair over a moving target, usually whilst holding left mouse which adds</p>
                    </div>
                    <div className='grid grid-cols-3 '>
                        <div className='border-t border-r  p-5 group-hover:border-blue-500'>$82</div>
                        <div className='border-t border-r p-5 group-hover:border-blue-500'>65 Days</div>
                        <div className='border-t p-5 group-hover:border-blue-500'>Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;