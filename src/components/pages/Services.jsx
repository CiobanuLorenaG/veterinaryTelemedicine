import React from 'react'
import eConsult from '../photos/ServicesPage/econsult.png'
import chat from '../photos/ServicesPage/chat.png'
import records from '../photos/ServicesPage/records.png'
import '../stylePages/Services.css'
import Fade from 'react-reveal/Fade'
import Navbar from './NavBar'
import FooterNavBar from './FooterNavBar'

function Services() {
  return (
    <>
      <Navbar />
      <div className="container-services">
        <Fade>
          <div className="services2">
            <img src={chat} width={'280px'}></img>
            <div className="navigation-services">
              <a href="/services/login" className="txt-services">
                Chat with a vet &#11166;
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <FooterNavBar />
    </>
  )
}

export default Services
