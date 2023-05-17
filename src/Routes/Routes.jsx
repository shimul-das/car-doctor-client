import { Routes, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ServiceCheckout from "../Pages/ServiceCheckout.jsx/ServiceCheckout";
import Booking from "../Pages/Booking/Booking";
import Privateroute from "../Providers/Privateroute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        {
          path:'/login',
          element:<Login></Login>
        },{
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/checkout/:id',
          element:<Privateroute><ServiceCheckout></ServiceCheckout></Privateroute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<Privateroute><Booking></Booking></Privateroute>
        }
      ]
    },
  ]);

  export default router;