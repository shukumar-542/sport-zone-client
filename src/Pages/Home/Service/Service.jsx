import React from 'react';
import img from '../../../assets/cover1.jpg'
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-parallax';
const Service = () => {
    return (
        <div className='my-container'>

            <Parallax
                blur={{ min: -15, max: 10 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={200}
            >
               <div className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md  ">
                        <div className="mb-5 text-center text-5xl font-bold"><Fade cascade damping={0.1} >DISCOVER OUR</Fade></div>
                        <div className="mb-5 text-center text-5xl font-bold"><Fade cascade damping={0.1} >Service</Fade></div>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary border-none">Join with Us</button>
                    </div>
                </div>
            </div>
            </Parallax>
            
        </div>
    );
};

export default Service;