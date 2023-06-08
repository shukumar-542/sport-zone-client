import React, { useEffect, useState } from 'react';
import SingleClass from './SingleClass';

const PopularClass = () => {
    const [topClass, setTopClass] = useState([])
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTopClass(data)
            })
    }, [])
    return (
        <div className='my-container'>
            <h1 className='text-center font-bold py-4 text-4xl'>Our Best Classes</h1>
            <div className='grid grid-cols-3 gap-5 '>
                {
                    topClass.map((item, i) => <SingleClass key={i} item={item}></SingleClass>)
                }
            </div>


        </div>
    );
};

export default PopularClass;