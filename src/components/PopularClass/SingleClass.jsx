import React from 'react';

const SingleClass = ({item}) => {
    return (
        <div className="rounded-tl-3xl rounded-br-3xl  overflow-hidden bg-[#003342] shadow-xl">
            <figure><img src={item.image} alt="Shoes" className='w-full h-52 ' /></figure>
            <div className="card-body">
                <h2 className="card-title text-white ">Instructor : {item.instructor}</h2>
                <div className='flex'>
                    <p className='text-white'>price : ${item.price} </p>
                    <p className='text-white'>available Seta : {item.seat}</p>
                </div>
                
            </div>
        </div>
    );
};

export default SingleClass;