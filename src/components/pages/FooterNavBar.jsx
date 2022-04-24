import React from 'react'
import logoNew from '../photos/FooterBarPage/logoNew.png'
import '../stylePages/FooterNavBar.css'


function FooterNavBar() {
  return (
    <div className="container-footer-menu">
      <img src={logoNew} width="180px" className='footer-logo'></img>
      <nav className="items-footer-menu">
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

export default FooterNavBar
