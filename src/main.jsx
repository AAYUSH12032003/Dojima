
import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import TaskOne from './components/TaksOne/TaskOne.jsx'
import TaskTwo from './components/TaskTwo.js/TaskTwo.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import TaskThree from './components/TaskThree/TaskThree.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='taskone' element={<TaskOne />} />
      <Route path='tasktwo' element={<TaskTwo />} />
      <Route path='taskthree' element ={<TaskThree/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router = {router}/>
  
)

