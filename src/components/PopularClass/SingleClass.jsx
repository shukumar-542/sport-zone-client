import React from 'react';
import './style.css'

const SingleClass = ({item}) => {
    return (
        <div className="shadow-md overflow-hidden">
            <figure><img src={item.image} alt="" className='w-full h-52  hover:scale-110 transition duration-700' /></figure>
            <div className="card-body">
                <h2 className="card-title ">Instructor : {item.instructor}</h2>
                <div className='flex'>
                    <p className=''>price : ${item.price} </p>
                    <p className=''>available Seta : {item.seat}</p>
                </div>
                
            </div>
        </div>
    );
};

export default SingleClass;