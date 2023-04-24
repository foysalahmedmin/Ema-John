import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import cartProductsLoader from './components/Loaders/Loaders';
import Checkout from './components/Checkout/Checkout';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './provider/AuthProvider';
import PrivateRout from './components/PrivateRout/PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader //() => fetch('products.json')
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: "checkout",
        element: <PrivateRout> <Checkout></Checkout> </PrivateRout>
      },
      {
        path: "singUp",
        element: <SingUp />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
