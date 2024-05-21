import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Afisha from './pages/Afisha/Afisha'
import Policy from './pages/Policy/Policy'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/afisha' element={<Afisha />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
      </Routes>
      <Footer />
    </>
  )
}


