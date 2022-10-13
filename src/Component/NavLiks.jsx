import React from 'react'
import { Link } from 'react-router-dom';
import Buttom from './Buttom';
import './Styles/NavLink.css'
const NavLiks = ({mobile}) => {
    return (
        <ul className={mobile ? 'nav__movile' : 'nav__routes'}>
            <li><Link className='route' to='/home'>Home</Link></li>
            <li><Link className='route' to='/code'>About</Link></li>
            <li><Link className='route' to='/about'>Contact</Link></li>
            <li><Link className='route' to='/about'>Blog</Link></li>
            <li><Link className='route' to='/about'>Careers</Link></li>
            {
                mobile ? (
                    <li className='nav_btn'>
                        <Buttom text='Request Invite'/>
                    </li>
                ) : (
                    <></>
                )
            }
        </ul>
    )
}

export default NavLiks