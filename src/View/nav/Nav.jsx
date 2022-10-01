import React from 'react'
import { Link } from 'react-router-dom';
import '../../Styles/NavStyles.css'
const Nav = () => {
  return (
    <nav className='containerNav'>
        <h1 className='logoNav'>TEST</h1>
        <ul className='routesNav'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/code'>Code</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav