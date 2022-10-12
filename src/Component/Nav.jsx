import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/NavStyles.css'
import Logo from './Logo';
import Buttom from './Buttom';
const Nav = () => {
  return (
    <nav className='containerNav'>
        <div className='containerContentNav'>
          <Logo colorTitle='black'/>
            <ul className='routesNav'>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/code'>About</Link></li>
              <li><Link to='/about'>Contact</Link></li>
              <li><Link to='/about'>Blog</Link></li>
              <li><Link to='/about'>Careers</Link></li>
            </ul>
            <Buttom
              text='Request Invite'
              
            />
        </div>
    </nav>
  )
}

export default Nav