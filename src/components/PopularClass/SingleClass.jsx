import React from 'react';

const SingleClass = ({item}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor: {item.instructor}</h2>
                <div className='flex'>
                    <p>price :{item.price} </p>
                    <p>available Seta : {item.seat}</p>
                </div>
                
            </div>
        </div>
    );
};

export default SingleClass;