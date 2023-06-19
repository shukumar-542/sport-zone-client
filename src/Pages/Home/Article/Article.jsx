import React from 'react';
import ar1 from '../../../assets/articel1.jpg'
import ar2 from '../../../assets/ar2.jpg'
import ar3 from '../../../assets/atricle3.jpg'

const Article = () => {
    return (
        <div className='my-container '>
            <div className='py-2 text-center'>
                <h1 className='text-4xl font-bold '><span className='text-blue-600'>LATEST BLOG</span> & ARTICLES</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                <div className='row-span-3 flex flex-col justify-end pb-14 opacity-95' style={{ backgroundImage: `url(${ar3})` }}>

                    <h1 className='text-4xl text-white font-bold px-10'>REASONS WHY YOU FACE OBSTACLES IN LEARNING BADMINTON</h1>
                    <p className='text-white px-10'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean...</p>

                </div>
                <div className='flex flex-col justify-between  gap-10 h-full'>
                    <div className='grid grid-cols-2 gap-5 justify-between items-center'>
                        <img src={ar1} alt="" />
                        <div className='space-y-5'>
                            <p className='font-bold '>HOW BADMINTON IS GOING TO CHANGE YOUR BUSINESS STRATEGIES</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing...</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 justify-center items-center h-full'>
                        <img src={ar2} alt="" />
                        <div className='space-y-5'>
                            <h3 className='font-bold'>NEVER MESS WITH BADMINTON AND HERE’S THE REASONS WHY</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;