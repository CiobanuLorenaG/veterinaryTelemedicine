import React, {useRef} from 'react'
import NavBar from './NavBar'
import FooterNavBar from './FooterNavBar'
import Zoom from 'react-reveal/Zoom'
import LightSpeed from 'react-reveal/LightSpeed'
import download from '../photos/HomePage/download.png'
import unlock from '../photos/HomePage/unlock.png'
import ownerDog from '../photos/HomePage/ownerDog.png'
import worldwide from '../photos/HomePage/worldwide.png'
import box from '../photos/HomePage/box.png'
import doctor from '../photos/HomePage/doctor.png'
import phone from '../photos/HomePage/phone.png'
import missionCat from '../photos/HomePage/missionCat.jpg'
import oneStep from '../photos/HomePage/oneStep.png'
import twoSteps from '../photos/HomePage/twoStep.png'
import threeSteps from '../photos/HomePage/threeStep.png'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
function MedicalRecords() {
const myRef = useRef(null)
const executeScroll = () => scrollToRef(myRef)
return (
  <div
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}
  >
   
  </div>
)
}

export default MedicalRecords