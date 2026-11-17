import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import Crumb from './components/Crumb'
import Theme from './components/Theme'
import Graphic from './components/Graphic'
import Denuncia from './components/Denuncia'
import TemaDetalhe from './components/TemaDetalhe'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/Crumb' element={<Crumb />} />
          <Route path='/Theme' element={<Theme />} />
          <Route path='/temas/:temaId' element={<TemaDetalhe />} />
          <Route path='/Graphic' element={<Graphic />} />
        </Routes>
          <Denuncia />
  
      </Router>
    </>
  )
}

export default App
