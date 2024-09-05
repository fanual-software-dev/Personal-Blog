import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <Link to={'/'}>Home</Link>
      <Link to={'/'}>Blogs</Link>
      <Link to={'/'}>About</Link>
      <Link to={'/'}>Contact</Link>

    </div>
  )
}

export default NavLinks
