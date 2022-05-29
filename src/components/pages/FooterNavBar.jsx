import React from 'react'
import logoNew from '../photos/FooterBarPage/logoNew.png'
import '../stylePages/FooterNavBar.css'
import { Link } from 'react-router-dom'

function FooterNavBar() {
  return (
    <div className="container-footer-menu">
      <Link to={'/home'}>
        <img src={logoNew} className="headerLogo" width={'200px'}></img>
      </Link>{' '}
      <nav className="items-footer-menu">
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
          <li>
            <a href="/faq">Faq</a>
          </li>
          <li>
            <a href="/adopt">Adopt</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FooterNavBar
