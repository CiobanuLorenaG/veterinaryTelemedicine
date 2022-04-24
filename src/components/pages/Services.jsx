import React from 'react'
import FooterNavBar from './FooterNavBar'
import eConsult from '../photos/ServicesPage/econsult.png'
import chat from '../photos/ServicesPage/chat.png'
import records from '../photos/ServicesPage/records.png'
import '../stylePages/Services.css'
import Fade from 'react-reveal/Fade'

function Services() {
  return (
    <div className="container-services">
      <Fade>
        <div className="services">
          <img src={eConsult} width={'200px'} className="img-service"></img>
          <div className="navigation-services">
            <a href="/services/econsult" className="txt-services">
              eConsult (Video or Phone){' '}
            </a>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="services2">
          <img src={chat} width={'220px'}></img>
          <div className="navigation-services">
            <a href="/services/chat" className="txt-services">
              Chat with a vet
            </a>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="services3">
          <img src={records} width={'210px'}></img>
          <div className="navigation-services">
            <a href="/services/records" className="txt-services">
              Medical records
            </a>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Services
