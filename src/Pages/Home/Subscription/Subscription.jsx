import React from 'react';
import c7 from '../../../assets/c7.jpg'
import c8 from '../../../assets/c8.jpg'
import c9 from '../../../assets/c9.jpg'

const Subscription = () => {
    return (
        <div className='my-10'>
            <div className='text-center py-5'>
                <h1 className='uppercase text-4xl font-bold'>Subscription Prices</h1>
                <p>EXCLUSIVE TRAINING PACKAGES</p>
            </div>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='border group hover:border-blue-500'>
                    <img src={c7} alt="" />
                    <div className='px-5 py-5 space-y-4'>
                        <div>
                            <h2 className='font-semibold'>SWIMMING COACH</h2>
                            <p>Training Center</p>
                        </div>
                        <p>Aenean tempor tincidunt diam ut pretium. Nulla elementum rhoncus ante.</p>
                    </div>
                    <div className='grid grid-cols-3 '>
                        <div className='border-t border-r  p-5 group-hover:border-blue-500'>$82</div>
                        <div className='border-t border-r p-5 group-hover:border-blue-500'>65 Days</div>
                        <div className='border-t p-5 group-hover:border-blue-500'>Details</div>
                    </div>
                </div>
                <div className='border group hover:border-blue-500'>
                    <img src={c8} alt="" />
                    <div className='px-5 py-5 space-y-4'>
                        <div>
                            <h2 className='font-semibold'>TENNIS CHAMPION</h2>
                            <p>Reputed Training</p>
                        </div>
                        <p>Aenean tempor tincidunt diam ut pretium. Nulla elementum rhoncus ante.</p>
                    </div>
                    <div className='grid grid-cols-3 '>
                        <div className='border-t border-r  p-5 group-hover:border-blue-500'>$82</div>
                        <div className='border-t border-r p-5 group-hover:border-blue-500'>65 Days</div>
                        <div className='border-t p-5 group-hover:border-blue-500'>Details</div>
                    </div>
                </div>
                <div className='border group hover:border-blue-500'>
                    <img src={c9} alt="" />
                    <div className='px-5 py-5 space-y-4'>
                        <div>
                            <h2 className='font-semibold'>TREKKING PRACTICE</h2>
                            <p>By well Experienced</p>
                        </div>
                        <p>Aenean tempor tincidunt diam ut pretium. Nulla elementum rhoncus ante.</p>
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