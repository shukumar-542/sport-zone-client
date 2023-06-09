import React, { useEffect, useState } from 'react';
import SingleInstructor from '../../components/PopularInstructor/SingleInstructor';

const Instructor = () => {
    const [instructors, setInstructor] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setInstructor(data)
            })
    }, [])
    return (
        <div className='my-container'>
            <div className='my-container'>
            <h1 className='text-center font-bold py-4 text-4xl'>Our Best Instructor</h1>
            <div className='grid grid-cols-3 gap-5 '>
                {
                    instructors.map((instructor, i) => <SingleInstructor key={i} instructor={instructor}></SingleInstructor>)
                }
            </div>
        </div>
        </div>
    );
};

export default Instructor;