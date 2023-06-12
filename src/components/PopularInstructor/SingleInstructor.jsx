import React from 'react';

const SingleInstructor = ({instructor}) => {
    return (
        <div className="card  bg-blue-100 shadow-xl">
            <figure><img src={instructor.image} alt="Shoes" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-500">{instructor.name}</h2>
                <p>Email : {instructor.email}</p>
                
                
            </div>
        </div>
    );
};

export default SingleInstructor;