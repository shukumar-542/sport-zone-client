import React from 'react';

const SingleClass = ({ item }) => {
    return (
        <div className="shadow-md group rounded-lg overflow-hidden ">
            <div className='overflow-hidden'>
                <figure><img src={item.image} alt="" className='w-full  h-52 group-hover:scale-110 transition  duration-700 ' /></figure>
            </div>
            <div className="card-body">
                <h2 className="text-2xl font-semibold uppercase">{item.instructor}</h2>
                <div className='flex'>
                    <p className='uppercase font-semibold'>price : ${item.price} </p>
                    <p className='uppercase font-semibold'>available Seat : {item.seat}</p>
                </div>

            </div>
        </div>

    );
};

export default SingleClass;