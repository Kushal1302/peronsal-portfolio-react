import React from 'react'
import { NavLink } from 'react-router-dom';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import './index.css'
const Navbar = () =>{
  return (<>
<div className="nav-bg">
    <div className="row">
        <div className="col-10 mx-auto">
         <nav className="navbar navbar-expand-lg "> {/*  bg-body-tertiary */}
  <div className="container-fluid">
    <NavLink className="navbar-brand"  to="/">
    <strong className='for-web'>K</strong>ushal<strong className='for-web'>K</strong>umar
    </NavLink>

    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <ClearAllIcon/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="menu-active" aria-current="page" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu-active"  exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu-active" exact to="/project">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu-active" exact to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    </div>
</div>
  
  </>)
}
export default Navbar;