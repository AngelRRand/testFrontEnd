import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
        <h1>Test</h1>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/code'>Code</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav