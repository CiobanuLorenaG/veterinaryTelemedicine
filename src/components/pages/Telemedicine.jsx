import React from 'react'
import '../stylePages/Telemedicine.css'
import NavBar from '../pages/NavBar'
import telemedicine from '../photos/Telemedicine/telemedicine.png'

function Telemedicine() {
  return (
    <>
      <NavBar />
      <div className="container-telemedicine">
        <div className="header-telemedicine">
          <h1 className="txt-header-telemedicine">
            Telemedicine: a new frontier for veterinary<br/> clinics from Romania
          </h1>
          <img
            src={telemedicine}
            width={'300px'}
            className="photo-header-telemedicine"
          ></img>
        </div>
        <h1>ksdjisdjuj</h1>
      </div>
    </>
  )
}

export default Telemedicine
