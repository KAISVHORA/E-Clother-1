
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navber from './Components/Navber'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import Page from './Components/pages/Page'
import Contact from './Components/pages/Contact'
import Sign from './Components/pages/signup/sign'
import Login from './Components/pages/signup/login'
import Filters from './Components/pages/Filters/Filters'
import Cart from './Components/pages/Cart/Cart'

function App() {

  return (
    <>
    <Navber/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='shop' element= {<Shop/>} />
         <Route path='filter' element={<Filters/>}/>
      <Route path='page' element= {<Page/>} />
      <Route path='contact' element= {<Contact/>}/>
      <Route path='sign' element={<Sign/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
