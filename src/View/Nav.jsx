import React, { useState, useEffect } from 'react'
import './Nav.css'
import Logo from '../Component/Logo';
import Buttom from '../Component/Buttom';
import Container from '../Component/Container';
import NavLiks from '../Component/NavLiks';
const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", changeWidth)
    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  return (
    <nav className='nav'>
      <Container
        nav={true}
      >
        <Logo colorTitle='black' />
        {
          (toggleMenu || screenWidth > 1024) ? (
            <>
              <NavLiks />

              <Buttom
                text='Request Invite'
              />
            </>
          ) : (
            <>
            
            </>
          )
            
        }

      </Container>
    </nav>
  )
}

export default Nav