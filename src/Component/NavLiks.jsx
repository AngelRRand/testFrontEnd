import React from 'react'
import { Link } from 'react-router-dom';
const NavLiks = () => {
    return (
        <ul className='nav__routes'>
            <li><Link className='route' to='/home'>Home</Link></li>
            <li><Link className='route' to='/code'>About</Link></li>
            <li><Link className='route' to='/about'>Contact</Link></li>
            <li><Link className='route' to='/about'>Blog</Link></li>
            <li><Link className='route' to='/about'>Careers</Link></li>
        </ul>
    )
}

export default NavLiks