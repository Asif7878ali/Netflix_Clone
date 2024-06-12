import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllRaw from './pages/AllRaw.js';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';

const appRouting = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
          path : '/',
          element : <AllRaw/>
      },
      {
          path : '/signup',
          element : <Signup/>
      },
      {
        path : '/login',
        element : <Login/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouting}/> );

