
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import Footer from './components/Footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
