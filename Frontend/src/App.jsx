import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Layout from "../src/routes/Layout/Layout.jsx";
import HomePage from "../src/routes/HomePage/HomePage.jsx";

function App() {
  
  const router = new createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        }
      ]
    }
  ])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
