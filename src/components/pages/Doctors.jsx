import React from 'react'
import dog from '../photos/Doctors/dog.png'
import '../stylePages/Doctors.css'

function Doctors() {
  return (
    <div className="container-doctors">
      <div className="container-header-doctors">
        <img src={dog} alt="happy dog" width={'150px'}/>
        <h2 className="txt-header-doctors">Our Solutions for Veterinarians</h2>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Doctors