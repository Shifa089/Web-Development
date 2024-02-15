import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Logo({width = '100px'}) {
  return (
    <div>
      <Link to='/'><img className='sm:w-36' width={width} src={logo} alt="" /></Link>
    </div>
  )
}

export default Logo