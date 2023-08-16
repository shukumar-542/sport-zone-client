import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../../assets/bad.jpg'

const Blog = () => {
    return (
        <div className='my-10'>
            <Parallax bgImage={img} strength={200} >
                <div className="py-36 flex items-center ps-20" >
                    <div className='w-1/2 space-y-6 '>
                        <h1 className='text-white text-4xl font-bold'> <span className='text-blue-600'>JOIN US NOW </span> & GET FREE TRAINING!</h1>
                        <p className='text-white'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                             In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                              Nullam dictum felis eu pede mollis pretium.</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Blog;