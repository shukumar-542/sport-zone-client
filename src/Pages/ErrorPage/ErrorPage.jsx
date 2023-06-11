import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/404notfound.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen p-16 bg-[#EBEBEB] '>
        <img src={notfound} className="h-1/2" alt="" />
        <Link
          to='/'
          className='px-8 py-3 font-semibold rounded bg-[#0a6ae7] text-gray-900'
        >
          Back to homepage
        </Link>
        
    </div>
    );
};

export default ErrorPage;