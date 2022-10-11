import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/NavStyles.css'
const Nav = () => {
  return (
    <nav className='containerNav'>
      <div className='marginContainersNav'>
        <div className='containerContentNav'>
          <div className='logoNav'>
            <div className='containerLogo'>
              <div className='paralelogramoLeft logo'></div>
              <div className='paralelogramoMid logo'></div>
              <div className='paralelogramoRight logo'></div>
            </div>
            <p >easybank</p>
          </div>
          <div>
            <ul className='routesNav'>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/code'>Code</Link></li>
              <li><Link to='/about'>Contact</Link></li>
              <li><Link to='/about'>Blog</Link></li>
              <li><Link to='/about'>Careers</Link></li>
            </ul>
          </div>
          <div>
            <button className='btnNav'>
              Request Invite
            </button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Nav