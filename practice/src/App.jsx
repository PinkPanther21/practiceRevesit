import { Navbar } from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {
 return (
  <>
  <div className="flex flex-col min-h-screen bg-linear-to-r from-white to-gray-300">
  <Navbar />

  <main className="grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </main>
</div>
  
  </>
 )
}

export default App
