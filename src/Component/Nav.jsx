import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/Nav.css'
import Logo from './Logo';
import Buttom from './Buttom';
import Container from './Container';
const Nav = () => {
  return (
    <nav className='nav'>
        <Container
          nav={true}
        >
          <Logo colorTitle='black'/>
            <ul className='routes'>
              <li><Link className='route' to='/home'>Home</Link></li>
              <li><Link className='route' to='/code'>About</Link></li>
              <li><Link className='route' to='/about'>Contact</Link></li>
              <li><Link className='route' to='/about'>Blog</Link></li>
              <li><Link className='route' to='/about'>Careers</Link></li>
            </ul>
            <Buttom
              text='Request Invite'
            />
        </Container>
    </nav>
  )
}

export default Nav