import { Link, NavLink } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useClass from "../../hooks/useClass";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [addedClass] = useClass()
    const handleLogOUt = () => {
        logOut()
            .then(() => {
                console.log('logOut Successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='sticky top-0 bg-white shadow-md z-10'>
            <div className=' py-2 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl lg:px-8 '>
                <div className='relative flex items-center justify-between'>
                    <div className='font-bold text-3xl text-gradient'>Sport Zone</div>
                    <div>
                        <ul className='items-center hidden space-x-8 lg:flex'>
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
                                    
                                        <div className="badge badge-xs">+{addedClass?.length || 0} </div>
                                   
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    <div className="flex" >
                        {user && <div className="w-10 rounded-full tooltip tooltip-bottom">
                            <img src={user.photoURL} className='rounded-full' alt="" />
                        </div>}

                        {user ? <button onClick={handleLogOUt} className='btn bg-white hidden lg:block text-blue-600 border-none'>logOut</button>
                            : <Link to='/login' className='hidden lg:block'>
                                <button className='btn bg-white text-blue-600 border-none '>Login</button>
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
                                                <h1 className='font-bold text-2xl'>Logo</h1>
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
                                                        to='/blog'
                                                        aria-label='About Us'
                                                        title='About Us'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Instructor
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/blog'
                                                        aria-label='About Us'
                                                        title='About Us'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Classes
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/blog'
                                                        aria-label='About Us'
                                                        title='About Us'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>

                                                <div className="w-10 rounded-full tooltip tooltip-bottom" >
                                                    <img src="" className='rounded-full' alt="" />
                                                </div>



                                                <li>
                                                    <button className='btn-primary '>LogOut</button>
                                                </li>
                                                <Link to='/login'>
                                                    <li>
                                                        <button className='btn-primary '>Login</button>
                                                    </li>
                                                </Link>


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