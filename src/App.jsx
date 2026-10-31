import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Shopping from './Pages/Shopping';
import Login from './Pages/Login';
import {Route, Routes} from 'react-router-dom';

import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Navbar2 from './components/Navbar2';


const App = () => {
  return (
    <div>
<Navbar/>
<Navbar2/>
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />} />
     <Route path='/login' element={<Login/>} />
    <Route path='/shopping' element={<Shopping/>}/>
     <Route path='/men' element={<Men/>} />
     <Route path='/women' element={<Women/>} />
     <Route path='/kids' element={<Kids/>} />
   
</Routes>

<Footer/>
    </div>
  )
}

export default App