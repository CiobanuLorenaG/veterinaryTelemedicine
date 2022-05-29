import React from 'react'
import '../stylePages/Telemedicine.css'
import NavBar from '../pages/NavBar'
import telemedicine from '../photos/Telemedicine/telemedicine.png'
import photo1 from '../photos/Telemedicine/1.png'
import photo2 from '../photos/Telemedicine/2.png'
import photo3 from '../photos/Telemedicine/3.png'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import started from '../photos/Telemedicine/started.png'
import dashboard from '../photos/Telemedicine/dashoard.png'
import chooseADoctor from '../photos/Telemedicine/chooseADoctor.png'
import chooseADay from '../photos/Telemedicine/chooseADay.png'
import profile from '../photos/Telemedicine/profile.png'
import health from '../photos/Telemedicine/health.png'
import call from '../photos/Telemedicine/call.png'
import login from '../photos/Telemedicine/login.png'
import FooterNavBar from './FooterNavBar'

function Telemedicine() {
  return (
    <>
      <NavBar />
      <div className="container-telemedicine">
        <Fade top>
          <div className="header-telemedicine">
            <h1 className="txt-header-telemedicine">
              Telemedicine: a new frontier for veterinary
              <br /> clinics from Romania
            </h1>
            <img
              src={telemedicine}
              width={'200px'}
              height={'220px'}
              className="photo-header-telemedicine"
            ></img>
          </div>
        </Fade>
        <div className="content-telemedicine">
          <div className="container1-content-telemedicine">
            <Slide left>
              <img
                className="photo-content-telemedicine"
                src={photo1}
                width={'250px'}
              />
            </Slide>
            <Slide top>
              <img
                className="photo-content-telemedicine"
                src={photo2}
                width={'250px'}
              />
            </Slide>
            <Slide right>
              <img
                className="photo-content-telemedicine"
                src={photo3}
                width={'250px'}
              />
            </Slide>
          </div>
          <div className="container2-content-telemedicine">
            <h1 className="txt-container2-content-telemedicine">
              {/* Tools for better veterinary medicine <br />  */}
              Telemedicine offer 24/7 virtual care network helping pet with:
            </h1>
            <div className="items-container2-content-telemedicine">
              <ul className="items1-container2-content-telemedicine">
                <Zoom left>
                  <li>Diet & weight loss</li>
                </Zoom>
                <Zoom left>
                  <li>Bad breath</li>
                </Zoom>
                <li>Lumps & bumps</li>
                <Zoom left>
                  <li>Potty training</li>
                </Zoom>
              </ul>
              <ul className="items1-container2-content-telemedicine">
                <Zoom right>
                  <li>Diarrhea & vomiting</li>
                </Zoom>
                <Zoom right>
                  <li>Allergies</li>
                </Zoom>
                <Zoom right>
                  <li>Flea & tick</li>
                </Zoom>
                <Zoom right>
                  <li>Second opinions</li>
                </Zoom>
              </ul>
            </div>
          </div>
          <div className="container3-content-telemedicine">
            <h1>Tools for better medicine</h1>
            <div className="content1-container3-content-telemedicine">
              <Zoom>
                <img src={started} width={'280px'} height={'460px'}></img>
              </Zoom>
              <div className="box-container3-content-telemedicine">
                <h2>Download PetCare </h2>
                <p>For using the app, you need to install it.</p>
              </div>
              <Zoom>
                <img src={dashboard} alt="" width={'280px'} height={'460px'} />
              </Zoom>
            </div>
            <div className="content2-container3-content-telemedicine">
              <Slide left>
                <img src={login} width={'280px'} height={'460px'}></img>
              </Slide>
              <div className="box2-container3-content-telemedicine">
                <h2>Sign in for create your pet profile</h2>
                <Zoom>
                  <img src={profile} width={'280px'} height={'460px'} />
                </Zoom>
              </div>
              <Slide right>
                <img src={health} width={'280px'} height={'460px'} />
              </Slide>
            </div>
            <div className="content3-container3-content-telemedicine">
              <div className="box3-container3-content-telemedicine">
                <h2>Choosing a doctor and a day, you can talk to them</h2>
                <Zoom>
                  <img
                    src={chooseADoctor}
                    width={'220px'}
                    height={'400px'}
                  ></img>
                </Zoom>
                <Zoom>
                  <img src={chooseADay} width={'220px'} height={'400px'} />
                </Zoom>
              </div>
              <Slide right>
                <img
                  className="call-telemedicine"
                  src={call}
                  width={'250px'}
                  height={'460px'}
                />
              </Slide>
            </div>
          </div>
          <FooterNavBar />
        </div>
      </div>
    </>
  )
}

export default Telemedicine
