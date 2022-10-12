import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/NavStyles.css'
const Nav = () => {
  return (
    <nav className='containerNav'>
      <div className='marginContainersNav'>
        <div className='containerContentNav'>
          
          {/* LGO */}

          <div>
            <ul className='routesNav'>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/code'>About</Link></li>
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