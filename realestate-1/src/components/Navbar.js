import React, {useState} from 'react'
import './Navbar.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
          <h1><span><BsFillHouseFill />Real</span>Estate</h1>
        </div>
    </div>
  )
}

export default Navbar;