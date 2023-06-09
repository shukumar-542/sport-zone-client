import React, { useEffect, useState } from 'react';
import SingleCourse from './SingleCourse';
import { getAllClasses } from '../../api/classapi';

const Course = () => {
    const [topClass, setTopClass] = useState([])
    useEffect(() => {
        getAllClasses()
        .then(data => {
        // console.log(data);
        setTopClass(data)
        })
    }, [])
    return (
        <div className='my-container'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    topClass.map((item, i) => <SingleCourse key={i} item={item}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Course;