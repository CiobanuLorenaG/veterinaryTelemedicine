import React from 'react'
import '../stylePages/Home.css'
import FooterNavBar from './components/pages/FooterNavBar'
import download from '../photos/download.png'
import unlock from '../photos/unlock.png'
import ownerDog from '../photos/ownerDog.png'
import worldwide from '../photos/worldwide.png'

function home() {
  return (
    <div className="container">
      <div className="container-header">
        <div className="content-header">
          <div className="tex-header">
            <h1>The right care when you need it most.</h1>
            <h5>Talk to a veterinary doctor anywhere!</h5>
            <div className="button-header">
              <button className="button">
                Sign up like a <strong>Pacient</strong>
              </button>
              <button className="button">
                Sign up like a <strong>Doctor</strong>
              </button>
            </div>
          </div>
          <div className="image-header">
            <img src={ownerDog} width={'400px'} className="imageHeader"></img>
          </div>
        </div>
      </div>
      <div className="container-features">
        <div className="features-one">
          <img src={download} width={'80px'}></img>
          <h3 className="title-features-one">NO DOWNLOAD REQUIRE</h3>
          <p className="paragraph-features-one">
            With accebility in mind, we have made <strong>PetCare</strong>{' '}
            simple and easy to use for both pacients and doctors.
          </p>
        </div>
        <div className="features-one">
          <img src={unlock} width={'80px'}></img>
          <h3 className="title-features-one">FREE TO USE</h3>
          <p className="paragraph-features-one">
            We believe cost shouldn’t be a barrier to telemedicine. That’s why{' '}
            <strong>PetCare</strong> is free for all.
          </p>
        </div>
        <div className="features-one">
          <img src={worldwide} width={'80px'}></img>
          <h3 className="title-features-one">WORLDWIDE USAGE</h3>
          <p className="paragraph-features-one">
            We meet worldwide security requirements.
          </p>
        </div>
      </div>
      <div className="dasboard"></div>
      <FooterNavBar />
    </div>
  )
}
export default home
