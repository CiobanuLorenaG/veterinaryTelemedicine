import React from 'react'
import logoNew from '../photos/HeaderBarPage/logoNew.png'
import '../stylePages/NavBar.css'

function navBar() {
  return (
    <div className="container-menu">
      {/* <h1>PetCare</h1> */}
      <img src={logoNew} className="headerLogo" width={'220px'}></img>
      <nav className="items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/doctors">Doctors</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navBar
