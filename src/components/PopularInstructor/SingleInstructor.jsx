import React from 'react';

const SingleInstructor = ({instructor}) => {
    return (
        <div className=" bg-white shadow-xl p-4">
            <figure><img src={instructor.image} alt="Shoes" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-500">Name : {instructor.name}</h2>
                <p>Email : {instructor.email}</p>
                
                
            </div>
        </div>
    );
};

export default SingleInstructor;