import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {
 return (
  <>
  <div className='min-w-dvh bg-linear-to-r/srgb from-white to-gray-300'> 
  
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
     
  </div>
  
  </>
 )
}

export default App
