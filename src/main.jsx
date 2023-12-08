import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Jobs from './components/Jobs/Jobs';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>

      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
