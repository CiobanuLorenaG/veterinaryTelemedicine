import React from 'react'
import '../stylePages/Home.css'
import NavBar from './NavBar'
import FooterNavBar from './FooterNavBar'
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'
import download from '../photos/HomePage/download.png'
import unlock from '../photos/HomePage/unlock.png'
import worldwide from '../photos/HomePage/worldwide.png'
import box from '../photos/HomePage/box.png'
import doctor from '../photos/HomePage/doctor.png'
import phone from '../photos/HomePage/phone.png'
import missionCat from '../photos/HomePage/missionCat.jpg'
import oneStep from '../photos/HomePage/oneStep.png'
import twoSteps from '../photos/HomePage/twoStep.png'
import threeSteps from '../photos/HomePage/threeStep.png'

function home() {

  return (
    <div className="container">
      {/* <NavBar /> */}
      <div
        className="container-header"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div className="content-header">
          <div className="tex-header" style={{ marginTop: '15%' }}>
            <h1>The right care when you need it most.</h1>
            <h3>Talk to a veterinary doctor anywhere!</h3>
            <div className="button-header">
              <a href="/register" className="button">
                Sign up
              </a>
            </div>
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
            We believe cost shouldn't be a barrier to use this site. That’s why{' '}
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
      <div className="container-mission">
        <div className="text-mission">
          <LightSpeed left>
            <h3 className="txt-mission">
              We are on a mission to make pet heathcare more convenient and
              accessible than ever before!
            </h3>
          </LightSpeed>
        </div>
        <LightSpeed right>
          <div className="image-mission">
            <img
              src={missionCat}
              alt="mission dog"
              className="cat-mission"
              width={'350px'}
            />
          </div>
        </LightSpeed>
      </div>

      <div className="container-features-two">
        <div className="features-two">
          <img src={phone} width={'45px'}></img>
          <p>Everything you need for your pet care in the palm of you hands.</p>
        </div>
        <div className="features-two">
          <img src={doctor} width={'70px'}></img>
          <p>
            On <strong>Demand Veterinary Advice</strong> from the comfort of you
            home.
          </p>
        </div>
        <div className="features-two">
          <img src={box} width={'60px'}></img>
          <p>
            <strong>24/7</strong> worldwide access to your pet's health history
            & medications.
          </p>
        </div>
      </div>

      <Zoom>
        <h1 className="features-three-txt">It's really simple</h1>
      </Zoom>
      <div className="container-features-three">
        <Zoom>
          <div className="features-three">
            <img
              src={oneStep}
              alt="first step"
              className="image-features-three"
              width={'230px'}
            ></img>
          </div>
        </Zoom>
        <Zoom>
          <div className="features-three">
            <img
              src={twoSteps}
              alt="two step"
              className="image-features-three"
              width={'230px'}
            ></img>
          </div>
        </Zoom>
        <Zoom>
          <div className="features-three">
            <img
              src={threeSteps}
              alt="three step"
              className="image-features-three"
              width={'230px'}
            ></img>
          </div>
        </Zoom>
      </div>

      <div>
        <h1></h1>
      </div>
      <div></div>
      <FooterNavBar />
    </div>
  )
}
export default home
