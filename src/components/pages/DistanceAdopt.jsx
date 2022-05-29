import React from 'react'
import NavBar from '../pages/NavBar'
import FooterNavBar from '../pages/FooterNavBar'
import '../stylePages/DistanceAdopt.css'
import certificate from '../photos/Adoption/certificate.png'
import donations from '../photos/Adoption/donations.png'
import happyDog from '../photos/Adoption/happyDog.png'
import wings from '../photos/Adoption/wings.png'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'

function DistanceAdopt() {
  return (
    <div className="container-distance-adopt">
      <NavBar />
      <div className="content-header-distance-adopt">
        <Fade left>
          <div className="container-header-distance-adopt">
            <img src={donations} width={'100px'}></img>
            <h2>Make your donation</h2>
            <p>
              Set up a recurring donation with credit card
              <br /> or make a single donation <br />
            </p>
          </div>
        </Fade>
        <Zoom>
          <div>
            <h1>Sponsor an animal &#10084;</h1>
            <div className="container-header-distance-adopt">
              <img src={certificate} width={'100px'}></img>
              <h2>Stay in touch with you friend at distance</h2>
              <p>
                After the first donation, you can receive
                <br /> the certificate of adoption with photos and history.
                <br />
                <strong>
                  You can receive periodically updates <br /> on your friend's
                  progress.
                </strong>
              </p>
            </div>
          </div>
        </Zoom>
        <Fade right>
          <div className="container-header-distance-adopt">
            <img src={happyDog} width={'80px'}></img>
            <h2>Help another animal</h2>
            <p>
              You can choose to help another needy guest
              <br /> even when the animal you have chosen <br />
              will no longer be in the distance adoptions
              <br />
              program.
            </p>
          </div>
        </Fade>
      </div>
      <div className="content2-distance-adopt">
        <h1>Your help can support expenses such as:</h1>
        <ul>
          <Slide left>
            <li>Food</li>
          </Slide>
          <Slide right>
            <li>Shelter maintenance</li>
          </Slide>
          <Slide left>
            <li>Salaries for employees</li>
          </Slide>
          <Slide right>
            <li>Treatments</li>
          </Slide>
          <Slide left>
            <li>Transports</li>
          </Slide>
        </ul>
      </div>
      <div className="content3-distance-adopt">
        <h1>The Animals Need You in Romania. Be an Activist!!</h1>
        <h2>Choose one or more for adoption </h2>
        <ul>
          <li>
            <a
              href="https://www.savethedogs.eu/en/sponsor/sponsor-a-dog/"
              target="_blank"
            >
              Save The Dogs and Another animals &#10003;
            </a>
          </li>
          <li>
            <a href="https://iamaacasa.ro/" target="_blank">
              ia-mă Acasă &#10003;
            </a>
          </li>
          <li>
            <a
              href="https://www.4animals.ro/category/doneaza/adopta-virtual-un-caine/"
              target="_blank"
            >
              4animals &#10003;
            </a>
          </li>
          <li>
            <a href="https://animallife.ro/adopta-la-distanta" target="_blank">
              Animal Life &#10003;
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://adapostulsperanta.ro/adopta/" target="_blank">
              Fundația Speranța &#10003;
            </a>
          </li>
          <li>
            <a
              href="https://www.arcaluinoe.org/adopta-la-distanta"
              target="_blank"
            >
              Arca lui Noe &#10003;
            </a>
          </li>
          <li>
            <a
              href="https://freeamely.org/ro/adopta-la-distanta"
              target="_blank"
            >
              free Amely 2007 &#10003;
            </a>
          </li>
        </ul>
      </div>
      <FooterNavBar />
    </div>
  )
}

export default DistanceAdopt
