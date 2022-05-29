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
import Slide from 'react-reveal/Slide'
import started from '../photos/Telemedicine/started.png'
import { Link } from 'react-router-dom'
import profile from '../photos/Telemedicine/profile.png'

function home() {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <Slide top>
        <div
          className="container-header"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
        >
          <div className="content-header">
            <div className="tex-header">
              <h1 className="h1-tex-header">
                The right care when you need it most.
              </h1>
              <h3 className="h1-tex-header">
                Talk to a veterinary doctor anywhere!
              </h3>
              <div className="button-header">
                {/* <a href="/register" className="button-content-header-home">
                  Sign up
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <div className="container-features">
        {/* <div className="features-one">
          <img src={download} width={'80px'}></img>
          <h3 className="title-features-one">Accept Telemedicine bookings</h3>
          <p className="paragraph-features-one">
            MAke sure you have the Telemedicine service available and that you accept Oline Appointmenst!
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
        </div> */}
      </div>
      <div className="container-mission">
        <div className="text-mission">
          <LightSpeed left>
            <h3 className="txt-mission">
              We are on a mission to make <strong>pet heathcare </strong>more
              convenient and accessible than ever before!
            </h3>
          </LightSpeed>
        </div>
        <LightSpeed right>
          <div className="image-mission">
            <img
              src={missionCat}
              alt="mission dog"
              className="cat-mission"
              width={'400px'}
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
      <div className="container-features-three">
        <div className="home-download-app">
          <Slide left>
            <img
              className="img-home-download-app"
              src={started}
              width={'250px'}
            ></img>
          </Slide>
          <Slide right>
            <img
              className="img-home-download-app"
              src={profile}
              width={'250px'}
            ></img>
          </Slide>
          <div className="text-home-download-app">
            <Link to={'/telemedicine'} style={{ textDecoration: 'none' }}>
              <h1 className="show-more-home-app">
                With PetCare App you can be more close to your vet
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-features-four">
        <Slide left>
          <Link
            className="link-adopt"
            to={'/adopt'}
            style={{ textDecoration: 'none', color: '#BF665E' }}
          >
            Now you can adopt from distance &#10084;
          </Link>
        </Slide>
        <Slide right>
          <img
            src="https://img.freepik.com/free-photo/love-tender-warm-feeling-understanding-without-words-cheerful-korean-woman-receives-kiss-from-two-pedigree-puppies-cannot-imagine-life-without-pets-has-fun-with-animal-best-friends_273609-34197.jpg?w=996&t=st=1653775109~exp=1653775709~hmac=bd5ae0dea62488af54897cd53c23614cecc9dffddf5147ec0b9a2617c24a4117"
            alt=""
            width={'500px'}
          />
        </Slide>
      </div>
      <FooterNavBar />
    </div>
  )
}
export default home
