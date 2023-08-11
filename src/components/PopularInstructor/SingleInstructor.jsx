import React from 'react';

const SingleInstructor = ({ instructor }) => {
    console.log(instructor);

    return (
        <div className=" bg-white shadow-xl group ">
            <div className='h-52 overflow-hidden'>
                <figure><img src={instructor.image} alt="Shoes" className='w-full h-52 group-hover:scale-110 transition duration-500' /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-blue-500">Name : {instructor.name}</h2>
                <p>Email : {instructor.email}</p>


            </div>
        </div>
    );
};

export default SingleInstructor;