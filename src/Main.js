import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from './Component/Pages/Home'
import Deal from './Component/Pages/Deal'
import Women from './Component/Pages/Women'
import Comfi from './Component/Pages/Comfi'
import Nav from './Component/Nav'
import Sign from './Component/Pages/Sign'
import Wish from './Component/Pages/Wish'
import Cart from './Component/Pages/Cart'
const Main = () => {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/deal" element={<Deal/>}/>
    <Route path="/men" element={<Women/>}/>
    <Route path="/com" element={<Comfi/>}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/wish" element={<Wish/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
     
    </>
  )
}

export default Main