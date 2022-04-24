import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/pages/NavBar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Doctors from './components/pages/Doctors'
import NotFound from './components/pages/NotFound'
import Econsult from './components/pages/Econsult'
import Chat from './components/pages/Chat'
import MedicalRecords from './components/pages/MedicalRecords'
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/econsult" element={<Econsult />}></Route>
          <Route path="/services/chat" element={<Chat />}></Route>
          <Route path="/services/records" element={<MedicalRecords />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
