import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {  AiFillHome, AiOutlineLogin } from 'react-icons/ai'



const SideBar = () => {
    const navigate = useNavigate()
    const { user, logOut, role } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    const handleHome = ()=>{
        navigate('/')
    }
    return (
        <>
            <div className={` md:fixed   justify-between  bg-blue-400 w-52 space-y-6 px-2 py-10  inset-y-0 mt-10 transform   md:translate-x-0  transition duration-200 `}>

                <div>
                <div>
                        <button
                            onClick={handleHome}
                            className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300 hover:text-gray-700 '>
                            <AiFillHome></AiFillHome>

                            <span className='mx-4 font-medium'>Home</span>
                        </button>
                    </div>

                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {
                            role && role === 'admin' ?
                                <nav>
                                    <>

                                        <NavLink
                                            to='manage-class'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >

                                            <span className='mx-4 font-medium text-white'>Manage Class</span>
                                        </NavLink>
                                        <NavLink
                                            to='manage-user'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            <span className='mx-4 font-medium text-white'>Manage User</span>
                                        </NavLink>
                                    </>
                                </nav>
                                : role && role === "instructor" ?
                                    <nav>
                                        <>

                                            {/* Menu Links */}
                                            <NavLink
                                                to='add-class'
                                                className={({ isActive }) =>
                                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >

                                                <span className='mx-4 font-medium'>Add A Class</span>
                                            </NavLink>
                                            <NavLink
                                                to='my-class'
                                                className={({ isActive }) =>
                                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <span className='mx-4 font-medium'>My Classes</span>
                                            </NavLink>
                                        </>
                                    </nav>
                                    :
                                    <nav>
                                        <>

                                            {/* Menu Links */}
                                            <NavLink
                                                to='my-selected-class'
                                                className={({ isActive }) =>
                                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >

                                                <span className='mx-4 font-medium'>My Selected Class</span>
                                            </NavLink>
                                            <NavLink
                                                to='my-enrolled-class'
                                                className={({ isActive }) =>
                                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <span className='mx-4 font-medium'>My Enrolled Class</span>
                                            </NavLink>
                                            <NavLink
                                                to='payment-history'
                                                className={({ isActive }) =>
                                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                    }`
                                                }
                                            >
                                                <span className='mx-4 font-medium'>Payment History</span>
                                            </NavLink>
                                        </>
                                    </nav>
                        }
                    </div>

                    <div>
                        <button
                            onClick={handleLogOut}
                            className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300 hover:text-gray-700 '>
                            <AiOutlineLogin></AiOutlineLogin>

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </div>
                </div>


            </div>
        </>
    );
};

export default SideBar;