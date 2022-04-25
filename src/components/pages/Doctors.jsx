import React from 'react'
import photo from '../photos/Doctors/happyDog.png'
import '../stylePages/Doctors.css'

function Doctors() {
  return (
    <div className="container-doctors">
      <div className="container-header-doctors">
        <h2 className="txt-header-doctors">Our Solutions for Veterinarians</h2>
        <img src={photo} alt="happy dog" width={'160px'} />
      </div>
      <div className=""></div>
    </div>
  )
}

export default Doctors