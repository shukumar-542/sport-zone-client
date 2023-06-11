import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/SideBar'
import Navbar from '../components/Shared/Navbar'

const DashboardLayout = () => {
  return (
    <div className=' min-h-screen bg-sky-50'>
      <div className='z-10 sticky top-0'>
      <Navbar ></Navbar>
      </div>
      
      <Sidebar />
      
      <div className='flex-1  md:ml-64'>
        <div className='p-5 '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout