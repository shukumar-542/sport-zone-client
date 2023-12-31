import { Link, NavLink } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import useClass from "../../hooks/useClass";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    // const [addedClass] = useClass()
    // console.log(addedClass);
    const handleLogOUt = () => {
        logOut()
            .then(() => {
                console.log('logOut Successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // dark and light mode 
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    return (
        <div className='sticky top-0  bg-[#2d72e9]  text-white bg-opacity-50 shadow-md z-10 '>
            <div className=' py-4 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl lg:px-8 '>
                <div className='relative flex items-center justify-between'>
                    <div className='font-bold text-4xl text-gradient'>Sport<span className="text-blue-600">Z</span>one</div>
                    <div>
                        <label className="swap swap-rotate">

                            <input type="checkbox" onChange={handleToggle} />

                            <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    <div>
                        <ul className='items-center uppercase  hidden space-x-8 lg:flex'>
                            <li >
                                <NavLink
                                    to='/'
                                    aria-label='Home'
                                    title='Home'
                                    className={({ isActive }) => (isActive ? 'active' : 'default') }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/instructor'
                                    aria-label='Instructor'
                                    title='Instructor'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Instructor
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/class'
                                    aria-label='class'
                                    title='class'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/dashboard'
                                    aria-label='dashboard'
                                    title='dashboard'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Dashboard

                                    {/* <div className="badge badge-xs">+{addedClass?.length || 0} </div> */}

                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    aria-label='about'
                                    title='about'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    About Us

                                    {/* <div className="badge badge-xs">+{addedClass?.length || 0} </div> */}

                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    aria-label='contact'
                                    title='contact'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Contact Us

                                    {/* <div className="badge badge-xs">+{addedClass?.length || 0} </div> */}

                                </NavLink>
                            </li>
                           

                        </ul>
                    </div>

                    <div className="flex items-center" >
                        {user && <div className="w-10 mr-2 rounded-full tooltip tooltip-bottom">
                            <img src={user.photoURL} className='rounded-full' alt="" />
                        </div>}

                        {user ? <button onClick={handleLogOUt} className='btn bg-white hidden lg:block text-blue-600 border-none'>logOut</button>
                            : <Link to='/login' className='hidden lg:block'>
                                <button className='px-3 font-semibold py-2 bg-white text-blue-600 border-none '>Login</button>
                            </Link>}
                    </div>




                    {/* Mobile responsive */}
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 mx-10 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars4Icon className='w-6 h-7'></Bars4Icon>
                        </button>
                        {
                            isMenuOpen && (
                                <div className='absolute z-10 top-0 left-0 w-full'>
                                    <div className='p-5 bg-white border rounded shadow-sm'>
                                        <div className='flex items-center justify-between mb-4'>
                                            <div>
                                                <h1 className='font-bold text-2xl'>SportZone</h1>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label='Close Menu'
                                                    title='Close Menu'
                                                    className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                    onClick={() => setIsMenuOpen(false)}
                                                >

                                                    <XMarkIcon className='h-6 w-6'></XMarkIcon>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className='space-y-4'>
                                                <li>
                                                    <NavLink
                                                        to='/'
                                                        aria-label='Home'
                                                        title='Home'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/instructor'
                                                        aria-label='instructor'
                                                        title='instructor'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Instructor
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/classes'
                                                        aria-label='classes'
                                                        title='classes'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Classes
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/dashboard'
                                                        aria-label='dashboard'
                                                        title='dashboard'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>

                                                <div className="w-10 rounded-full tooltip tooltip-bottom" >
                                                    <img src="" className='rounded-full' alt="" />
                                                </div>

                                                {
                                                    user ?   <li>
                                                    <button className='btn-primary '>LogOut</button>
                                                </li>
                                                    :
                                                    <Link to='/login'>
                                                    <li>
                                                        <button className='btn-primary '>Login</button>
                                                    </li>
                                                </Link>
                                                }

                                               
                                               


                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;