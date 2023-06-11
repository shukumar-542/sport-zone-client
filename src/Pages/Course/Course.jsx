import React, { useEffect, useState } from 'react';
import SingleCourse from './SingleCourse';
import { getAllClasses } from '../../api/classapi';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Course = () => {
    // const [topClass, setTopClass] = useState([])

    const [axiosSecure] = useAxiosSecure()
    
    const {data : topClass =[], refetch} = useQuery({
        queryKey : ['classes'],
        queryFn : async ()=>{
            const result = await axiosSecure.get('/classes')
            return result.data
        }

    })
    // useEffect(() => {
    //     getAllClasses()
    //     .then(data => {
    //     // console.log(data);
    //     setTopClass(data)
    //     })
    // }, [])
    // console.log(topClass);
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