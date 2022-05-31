import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import './App.css'
import NavBar from './components/pages/NavBar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Doctors from './components/pages/Doctors'
import NotFound from './components/pages/NotFound'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import SimpleForm from './components/pages/Chatbot/SimpleForm'
import Telemedicine from './components/pages/Telemedicine'
import React, { useEffect } from 'react'
import Faq from './components/pages/Faq'
import Adopt from './components/pages/DistanceAdopt'
import HomeChat from './components/pages/Chat/pages/Home'
import NavbarChat from './components/pages/Chat/Navbar'
import Register from './components/pages/Chat/pages/Register'
import Login from './components/pages/Chat/pages/Login'
import Profile from './components/pages/Chat/pages/Profile'
import AuthProvider from './components/pages/Chat/context/auth'
// import PrivateRoute from './components/pages/Chat/PrivateRoute'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <NavbarChat /> */}
            <Route path="/home" element={<Home />}></Route>
            <Route path="/services/register" element={<Register />}></Route>
            <Route path="/services/login" element={<Login />}></Route>
            <Route path="/telemedicine" element={<Telemedicine />} />
            <Route path="/chatbot" element={<Chatbot />}></Route>
            <Route path="/services/chat" element={<HomeChat />}></Route>
            <Route path="/services/profile" element={<Profile />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/doctors" element={<Doctors />}></Route>
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          <SimpleForm />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
