import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';

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
      }
    ]
   }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);


