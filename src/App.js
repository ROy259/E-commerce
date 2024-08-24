import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Men from './components/Men';
import Women from './components/Women';
import Kid from './components/Kid'
import Electronincs from './components/Electronincs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Orders from './components/Orders';
import { useState } from 'react';
function App() {

  const [cartCount,setcartCount]=useState(0)

  const handleCartCount=()=>{
    setcartCount(cartCount+1)
  }

  return (

   <>
   <div>

<BrowserRouter>
<Navbar cartCount={cartCount}/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Men' element={<Men handle={handleCartCount}/>}/>
  <Route path='/Women' element={<Women handle={handleCartCount}/>}/>
  <Route path='/Kid' element={<Kid handle={handleCartCount}/>}/>
  <Route path='/Electronincs' element={<Electronincs handle={handleCartCount}/>}/>
  <Route path='/Orders' element={<Orders/>}/>
  




</Routes>
<Footer/>

</BrowserRouter>

   {/* <Navbar/>
    <Home/>
    <Men/>
    <Women/>
    <Kid/>
    <Electronincs/> */}
   
   </div>
   
   </>
  );
}

export default App;
