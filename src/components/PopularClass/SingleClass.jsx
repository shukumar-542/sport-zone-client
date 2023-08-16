import React from 'react';
import './style.css'

const SingleClass = ({ item }) => {
    console.log(item);
    return (
        // <div className="shadow-md group rounded-lg overflow-hidden ">
        //     <div className='overflow-hidden'>
        //         <figure><img src={item.image} alt="" className='w-full  h-52 group-hover:scale-110 transition  duration-700 ' /></figure>
        //     </div>
        //     <div className="card-body">
        //         <h2 className="text-2xl font-semibold uppercase">{item.instructor}</h2>
        //         <div className='flex'>
        //             <p className='uppercase font-semibold'>price : ${item.price} </p>
        //             <p className='uppercase font-semibold'>available Seat : {item.seat}</p>
        //         </div>

        //     </div>
        // </div>

        <div class="card-container mx-auto">
            <span class="pro">PRO</span>
            <div className='flex items-center justify-center'>
                <img class="round w-32 h-32" src={item.image} alt="user" />
            </div>
            <h3 className='uppercase font-semibold text-2xl'>{item.instructor}</h3>
            <h6>New York</h6>
            <div className='flex items-center justify-center gap-2'>
                <p className='uppercase font-semibold'>price : ${item.price} </p>
                <p className='uppercase font-semibold'>available Seat : {item.seat}</p>
            </div>
            <div class="buttons space-x-5 py-10">
                <button class="primary">
                    Message
                </button>
                <button class="primary ghost">
                    Following
                </button>
            </div>

        </div>





    );
};

export default SingleClass;