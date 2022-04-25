import React from 'react'
import photo from '../photos/Doctors/dog.png'
import doctor1 from '../photos/Doctors/doctor1.png'
import doctor2 from '../photos/Doctors/doctor2.png'
import doctor3 from '../photos/Doctors/doctor3.png'
import featuresDoctors from '../photos/Doctors/features-doctors.png'
import heartMedicine from '../photos/Doctors/heartMedicine.png'
import stetoscopeMed from '../photos/Doctors/stetoscopMed.png'
import '../stylePages/Doctors.css'
import FooterNav from '../pages/FooterNavBar'
import Fade from 'react-reveal/Fade'

function Doctors() {
  return (
    <div className="container-doctors">
      <div className="container-header-doctors">
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
        {/* <div className="features-doctors">
          <h2 className="txt-doctors"> Practice Managemet Solution</h2>
          <p>
            Improve connectivity, enhance your practice's reputation, book more
            appointments. <strong>PetCare</strong>, a new revolutionary way to
            manage your practice remotely.
          </p>
        </div>
        <div className="features-doctors">
          <h2 className="txt-doctors">
            Become <strong>PetCare</strong> Vet
          </h2>
          <p>
            When you sign up, you get a ready customer base for online consultations/opinions, based your availability.
          </p>
        </div> */}
        <a className='register-features-doc' href="/register">Get Started</a>
      </div>
      <div className="lst-doctors">
        <div className="header-lst-doctors">
          <img
            className="img-txt-lst-doc"
            src={heartMedicine}
            width={'50px'}
            height={'50px'}
          ></img>
          <h1 className="txt-lst-doctors">Our doctors:</h1>
          {/* <img src={stetoscopeMed} width={'50px'}></img> */}
        </div>
        <div className="content-lst-doctors">
          <img src={doctor1} width={'150px'} className="img-doctor"></img>
          <h1 className="txt-name-doctor">Dr. Alexandra Paduraru</h1>
          <p>
            <strong>Specialization</strong>: Radiographer
          </p>
          <p>
            <strong>Graduation</strong>: Veterinary Medicine of Cluj (USAMV)
          </p>
        </div>

        <div className="content-lst-doctors">
          <img src={doctor2} width={'150px'} className="img-doctor"></img>
          <h1 className="txt-name-doctor">Dr. Ciprian Popescu</h1>
          <p>
            <strong>Specialization</strong>: Surgery
          </p>
          <p>
            <strong>Graduation</strong>: Veterinary Medicine of Iasi (USAMV)
          </p>
        </div>

        <div className="content-lst-doctors">
          <img src={doctor3} width={'150px'} className="img-doctor"></img>
          <h1 className="txt-name-doctor">Dr. Anisia Marcu</h1>
          <p>
            <strong>Specialization</strong>: Dentistry
          </p>
          <p>
            <strong>Graduation</strong>: Veterinary Medicine of Iasi (USAMV)
          </p>
        </div>
      </div>
      <FooterNav />
    </div>
  )
}

export default Doctors
