import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
    <nav className="navbar">
        <div className="logo">
        <img src="/Dojima_Network_3D_Logo.png" alt="dojima logo" /></div>
        <ul className="nav-items">
           <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="taskone">Task-One</a></li>
            <li className="nav-item"><a href="tasktwo">Task-Two</a></li>
            <li className="nav-item"><a href="taskthree">Task-Three</a></li>
        </ul>
    </nav>
</div>
  )
}

export default Header