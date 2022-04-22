import React from 'react'
import logo from '../photos/logo.png'
import '../stylePages/FooterNavBar.css'


function FooterNavBar() {
  return (
    <div className="container-footer-menu">
      <img src={logo} width="100px"></img>
      <nav className="items-footer-menu">
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

export default FooterNavBar
