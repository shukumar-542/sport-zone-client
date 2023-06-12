import React from 'react';
import SingleClass from './SingleClass';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
   
    const [axiosSecure] = useAxiosSecure()

    const {data : topClass =[]} = useQuery({
        queryKey : ['classes'],
        queryFn : async ()=>{
            const result = await axiosSecure.get('/classes')
            return result.data
        }

    })
    const sliceTopClass = topClass?.slice(0,6)
    return (
        <div className='my-container bg-blue-100'>
            <h1 className='text-center font-bold py-4 text-4xl text-blue-600 '>Our Best Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
                {
                    sliceTopClass.map((item, i) => <SingleClass key={i} item={item}></SingleClass>)
                }
            </div>


        </div>
    );
};

export default PopularClass;