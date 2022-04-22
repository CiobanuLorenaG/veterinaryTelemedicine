import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/pages/NavBar'
import Home from './components/pages/Home'
import Doctor from './components/pages/Doctor'
import Pacient from './components/pages/Pacient'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/doctor" element={<Doctor />}></Route>
          <Route path="/pacient" element={<Pacient />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
