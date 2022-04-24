import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../photos/HeaderBarPage/logo.png'
import '../stylePages/NavBar.css'

function navBar() {
  return (
    <div className="container-menu">
      {/* <h1>PetCare</h1> */}
      <img src={logo} className="headerLogo" width={'90px'}></img>
      {/* <h1 className="motivation">Everything is going to be ok!</h1> */}
      <nav className="items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/doctor">Doctor</a>
          </li>
          <li>
            <a href="/pacient">Pacient</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navBar
