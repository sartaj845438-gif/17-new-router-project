import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-center items-center justify-evenly bg-cyan-800 font-bold p-3 py-3 text-white'>
    <h2>New Market</h2>
    <div className='flex flex-wrap gap-20 '>
      <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
        <Link to='/shopping'>Shopping</Link>
         <Link to='/login'>Login</Link>
    </div>
    </div>
  )
}

export default Navbar