/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React from 'react';
import DoctorsPage from '../pages/DoctorsPage';
import './hover-min.css'
import './nav.css'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const fornext = () => {
    navigate("/Login_page");
  };
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
  
    if (confirmLogout) {
      navigate("/Login_page");
    } else {
      navigate("/Home");
    }
  };

  
    return ( 
    <div className="container-fluid font-italic h5">
  <nav className="navbar navbar-expand-sm navbar-white bg-white ml-1">
    <div className="container-fluid font-italic h5">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/604/480/small/2104-25.jpg" style={{ width: "100px" }} />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="/Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="/doctors">Doctors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="/lab">Lab</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="/pharmacy">Pharmacy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="#about">About Us</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="#services">Our Services</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link hvr-sweep-to-bottom" href="#contact">Contact Us</a>
          </li>
        </ul>

       

<button className="btn btn-primary" type="button" style={{ width: '150px',height: '50px' }} onClick={handleLogout}>log out</button>
      </div>
    </div>
  </nav>
</div>



    );
}
 
export default Nav;