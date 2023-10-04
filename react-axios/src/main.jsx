import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'






import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Router/Home/home.jsx';
import NewPostt from './Router/Posts/newPost.jsx';

const router =createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/new',
        element:<NewPostt/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
