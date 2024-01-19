import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import GuestDashboard from './components/GuestDashboard';

const router=createBrowserRouter([
  {
   path:"/",
   element:<App/>, 
   children:
    [
      {
  path:"/",
  element:<LoginForm/>  
      },
      {
  path:"dashboard",
  element:<Dashboard/>  
      },
      
   {path:"/guestlogin",
   element:<GuestDashboard/>},
    ]
   },
   
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);


