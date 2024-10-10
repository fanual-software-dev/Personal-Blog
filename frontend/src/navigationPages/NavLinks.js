import React from 'react'
import { Link} from 'react-router-dom'


const NavLinks = () => {
  return (
    <div className='nav-div'>
      <p className='Logo'><span>T</span>he-<span>B</span>logers</p>
      <div className='nav-links'>
        <Link to='/Home'>Home</Link>
        <Link to='/Blogs'>Blogs</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

    </div>
  )
}

export default NavLinks
