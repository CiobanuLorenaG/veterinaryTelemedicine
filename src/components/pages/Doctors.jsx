import React from 'react'
import photo from '../photos/Doctors/dog.png'
import PopaGenoveva from '../photos/Doctors/documents/PopaGenoveva.png'
import RaduLucianLicenta from '../photos/Doctors/documents/RaduLucianDiplomaLicenta.png'
import RaduLucianAtestat from '../photos/Doctors/documents/RaduLucianAtestat.png'
import graduate from '../photos/Doctors/graduate.png'
import Jalba from '../photos/Doctors/documents/JalbaOlimpia.png'
import hey from '../photos/Doctors/Hey.png'
import featuresDoctors from '../photos/Doctors/features-doctors.png'
import heartMedicine from '../photos/Doctors/heartMedicine.png'
import stetoscopeMed from '../photos/Doctors/stetoscopMed.png'
import '../stylePages/Doctors.css'
import FooterNav from '../pages/FooterNavBar'
import Fade from 'react-reveal/Fade'
import NavBar from './NavBar'
import Zoom from 'react-reveal/Zoom'

function Doctors() {
  return (
    <div className="container-doctors">
      <NavBar />
      {/* <div className="container-header-doctors">
        <img src={photo} alt="happy dog" width={'150px'} />
        <h2 className="txt-header-doctors">Our Solutions for Veterinarians</h2>
      </div>
      <div className="content-features-doctors">
        <div className="img-features-doctors">
          <img
            className="img-features-doc"
            src={featuresDoctors}
            alt="Features for Doctors"
            width={'880px'}
          />
        </div>

        <a className="register-features-doc" href="/register">
          Get Started
        </a>
      </div> */}
      <div className="lst-doctors">
        <div className="lst-top-txt">
          {/* <img
            className="img-hello-doctors"
            src={hey}
            alt="hello image"
            width={'100px'}
          /> */}
          <h2 className="txt-lst-doctors">
            Now you can meet our doctors! <br />
            Using the chat you can talk to them about anything related to your
            pet
          </h2>
        </div>
        <div className="content-doctors">
          <Zoom>
            <div className="content-lst-doctors">
              <h2 className="txt-name-doctor">
                <strong>Dr. </strong>Jalba Olimpia-Ioana
              </h2>
              <br />
              <p>
                <strong>Gradution: </strong>Veterinary Medicine of Iasi (USAMV)
              </p>
              <br />
              <p>
                <strong>Specialization: </strong>Veterinary Medic
              </p>
              <br />
              <a href={Jalba} target="_blank">
                <img alt="Qries" src={graduate} width="160" height="120" />
              </a>
            </div>
          </Zoom>
          <Zoom>
            <div className="content-lst-doctors">
              <h2 className="txt-name-doctor">
                <strong>Dr. </strong>Popa Genoveva-Livioara
              </h2>
              <br />
              <p>
                <strong>Gradution: </strong>Veterinary Medicine of Iasi (USAMV)
              </p>
              <br />
              <p>
                <strong>Specialization: </strong>Veterinary Medic
              </p>
              <br />
              <a href={PopaGenoveva} target="_blank">
                <img alt="Qries" src={graduate} width="160" height="120" />
              </a>
            </div>
          </Zoom>
          <Zoom>
            <div className="content-lst-doctors">
              <h2 className="txt-name-doctor">
                <strong>Dr. </strong>Radu Lucian
              </h2>
              <br />
              <p>
                <strong>Gradution: </strong>Veterinary Medicine of Iasi (USAMV)
              </p>
              <br />
              <p>
                <strong>Specialization: </strong>Veterinary Medic
              </p>
              <br />
              <a href={RaduLucianAtestat} target="_blank">
                <img
                  alt="Qries"
                  className="photo-radu"
                  src={graduate}
                  width="160"
                  height="120"
                />
              </a>
            </div>
          </Zoom>
        </div>
      </div>
      <FooterNav />
    </div>
  )
}

export default Doctors
