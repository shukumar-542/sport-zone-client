import React from 'react';
import SingleClass from './SingleClass';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
   
    const [axiosSecure] = useAxiosSecure()

    const {data : topClass =[]} = useQuery({
        queryKey : ['popular'],
        queryFn : async ()=>{
            const result = await axiosSecure.get('/popular/classes')
            return result.data
        }

    })
    const sliceTopClass = topClass?.slice(0,6)
    // console.log(sliceTopClass);
    return (
       <div className=' '>
         <div className='my-container'>
            <h1 className='text-center font-bold py-4 text-4xl text-[#003342] uppercase '>Our Best Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    sliceTopClass.map((item, i) => <SingleClass key={i} item={item}></SingleClass>)
                }
            </div>


        </div>
       </div>
    );
};

export default PopularClass;