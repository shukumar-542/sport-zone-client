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
import MySelectedClass from "../Pages/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyPaymentHistory from "../Pages/MyPaymentHistory/MyPaymentHistory";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateClass from "../Pages/Dashboard/updateClass/updateClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement : <ErrorPage></ErrorPage>,
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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
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
      {
        path : '/dashboard/my-selected-class',
        element :<MySelectedClass></MySelectedClass>
      },
      {
        path : '/dashboard/my-enrolled-class',
        element : <MyEnrolledClass></MyEnrolledClass>
      },
      {
        path : '/dashboard/payment',
        element : <Payment></Payment>
      },
      {
        path : '/dashboard/payment-history',
        element : <MyPaymentHistory></MyPaymentHistory>
      },
      {
        path : '/dashboard/update/:id',
        element :<UpdateClass></UpdateClass>,
        loader : ({params})=> fetch(`http://localhost:5000/class/${params.id}`)

      }
    ]
  }
]);
