import React from 'react';

const SingleClass = ({item}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.className}</h2>
                <p>Instructor Name : {item.instructorName}</p>
                <div className='flex'>
                    <p>price :{item.price} </p>
                    <p>available Seta : {item.availableSeat}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;