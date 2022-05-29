import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import './App.css'
import NavBar from './components/pages/NavBar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Doctors from './components/pages/Doctors'
import NotFound from './components/pages/NotFound'
import Econsult from './components/pages/Econsult'
import MedicalRecords from './components/pages/MedicalRecords'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import SimpleForm from './components/pages/Chatbot/SimpleForm'
// import RegisterPage from './components/pages/Chat/containers/RegisterPage/Register'
// import LoginPage from './components/pages/Chat/containers/LoginPage/Login'
import Telemedicine from './components/pages/Telemedicine'
import React, { useEffect } from 'react'
// import PrivateRoute from './components/pages/Chat/components/PrivateRoute'
// import HomePage from './components/pages/Chat/containers/ChatHomePage/Home'
// import { useDispatch, useSelector } from 'react-redux'
// import { isLoggedInUser } from './components/pages/Chat/actions'
import Faq from './components/pages/Faq'
import Adopt from './components/pages/DistanceAdopt'

function App() {
  // const auth = useSelector((state) => state.auth)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (!auth.authenticated) {
  //     dispatch(isLoggedInUser())
  //   }
  // }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route> */}
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/chatbot" element={<Chatbot />}></Route>
          {/* <Route path="/chatapp" element={<HomePage />}></Route> */}
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/econsult" element={<Econsult />}></Route>
          <Route path="/services/records" element={<MedicalRecords />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <SimpleForm />
      </BrowserRouter>
    </div>
  )
}

export default App
