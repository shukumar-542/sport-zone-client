import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/SideBar'
import Navbar from '../components/Shared/Navbar'

const DashboardLayout = () => {
  return (
    <div className=' min-h-screen md:flex'>
      <Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout