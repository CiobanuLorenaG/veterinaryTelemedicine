import React, {useRef} from 'react'
import FooterNavBar from './FooterNavBar'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function pacient() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <div>
      <div ref={myRef}>I wanna be seen</div>
      <button onClick={executeScroll}> Click to scroll </button>
      <FooterNavBar />
    </div>
  )
}

export default pacient
