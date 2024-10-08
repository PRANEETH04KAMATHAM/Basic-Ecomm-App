import { FaHome } from "react-icons/fa";
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Aboutus from './components/about/Aboutus';
import RoutingError from './components/RoutingError';

import Userprofile from "./components/user-profile/Userprofile";

import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import EditUser from "./components/edit-user/EditUser";

function App(){
  const browserRouter = createBrowserRouter([
    {
      path:'',
      element:<RootLayout />,
      errorElement:<RoutingError />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'about',
          element:<Aboutus />
        },
        {
          path:'user-profile',
          element:<Userprofile />,
          children:[
            {
              path:"products",
              element:<Products />
            },
            {
              path:"cart",
              element:<Cart />
            },
          ]
        },

        {
          path:"edit-user",
          element:<EditUser />
        },
      ],
    }

  ])
  return (
    <div className="main">
       {/*<FaHome className="fs-1 text-success" />
      <h1 className="text1">HOME</h1>
      */}
      
      <RouterProvider router={browserRouter} />
    </div>
  )
}
export default App;