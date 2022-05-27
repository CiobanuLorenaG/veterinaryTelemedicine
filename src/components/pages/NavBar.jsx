import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../photos/HeaderBarPage/logoNew.png'
import '../stylePages/NavBar.css'

function navBar() {
  return (
    <div className="container-menu">
      <Link to="/home">
        <img className="img-navbar" src={logo} width={'160px'}></img>
      </Link>
      <nav className="items-navbar">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/doctors">Doctors</a>
          </li>
          <li>
            <a href="/telemedicine">Telemedicine</a>
          </li>
          {/* <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default navBar
