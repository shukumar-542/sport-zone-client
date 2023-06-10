import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { AiOutlineBars } from 'react-icons/ai'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'



const SideBar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const { user, logOut,role } = useContext(AuthContext)
    const isAdmin = false;
    // console.log(role);
    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        logo
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>


            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>

                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {
                            role && role === 'admin' ? 
                            <nav>
                            <>

                                {/* Menu Links */}
                                <NavLink
                                    to='manage-class'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >

                                    <span className='mx-4 font-medium'>Manage Class</span>
                                </NavLink>
                                <NavLink
                                    to='manage-user'
                                    className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>Manage User</span>
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
                                    to='add-class'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                        }`
                                    }
                                >

                                    <span className='mx-4 font-medium'>My Selected Class</span>
                                </NavLink>
                                <NavLink
                                    to='my-class'
                                    className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                                >
                                    <span className='mx-4 font-medium'>My Enrolled Class</span>
                                </NavLink>
                            </>
                        </nav> 
                        }
                    </div>
                </div>


            </div>
        </>
    );
};

export default SideBar;