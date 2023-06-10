import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Course from "../Pages/Course/Course";
import DashboardLayout from "../Layouts/DahsboardLayout";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import ManageClass from "../components/Dashboard/Admin/ManageClass";
import ManageUser from "../components/Dashboard/Admin/ManageUser";
import FeedBack from "../components/FeedBack/FeedBack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'instructor',
        element: <Instructor></Instructor>
      },
      {
        path: 'class',
        element: <Course></Course>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/add-class',
        element : <AddClass></AddClass>
      },
      {
        path : '/dashboard/my-class',
        element : <MyClasses></MyClasses>
      },
      {
        path : '/dashboard/manage-class',
        element : <ManageClass></ManageClass>
      },
      {
        path : '/dashboard/manage-user',
        element : <ManageUser></ManageUser>
      },
      {
        path : '/dashboard/feedback/:id',
        element : <FeedBack></FeedBack>
      },
    ]
  }
]);
