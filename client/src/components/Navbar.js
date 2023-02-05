import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {

  // const logo = url()

  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">   
  <div className="container-fluid"> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
    <li className = "nav-item">
    <NavLink exact = "true" activeclassname = "active" to = "/"> Main
            </NavLink>
    </li>
    <li className="nav-item">
    <NavLink exact = "true" activeclassname = "active" to = "/login"> Login
            </NavLink>
    </li>
    <li className="nav-item">
    <NavLink exact = "true" activeclassname = "active" to = "/signup"> Signup
            </NavLink>
  
    </li>
    <li className="nav-item">
    <NavLink exact = "true" activeclassname = "active" to = "/reservation"> Reserve
            </NavLink>
    </li>
    </ul>
</div>
  </div>
  </nav>    
    </div>
  )
}

export default Navbar
