import React, { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor';

const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([])
    useEffect(() => {
        fetch('https://sport-zone-server.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setInstructor(data)
            })
    }, [])
    return (
       <div className='bg-blue-100'>
         <div className='my-container '>
            <h1 className='text-center font-bold py-10 text-4xl uppercase'>Our Best Instructor</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
                {
                    instructors.map((instructor, i) => <SingleInstructor key={i} instructor={instructor}></SingleInstructor>)
                }
            </div>
        </div>
       </div>
    );
};

export default PopularInstructor;