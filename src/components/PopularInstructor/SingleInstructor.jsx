import React from 'react';

const SingleInstructor = ({instructor}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={instructor.image} alt="Shoes" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>
                <p>Instructor email : {instructor.email}</p>
                
                
            </div>
        </div>
    );
};

export default SingleInstructor;