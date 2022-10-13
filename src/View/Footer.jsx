import React from 'react';
import './Footer.css';
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram
} from "react-icons/ai";
import { RiPinterestFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Logo from '../Component/Logo';
import Buttom from '../Component/Buttom';
import Container from '../Component/Container';
const Footer = () => {
  return (
    <footer className='footer'>
      <Container
        footer={true}
      >
        <div className='footer__container footer__left footer__Mobile'>

          <div className='footer__containerLogo footer__Mobile footer__height'>
            <Logo colorTitle='white' />
            <div className='footer__networks'>
              <AiFillFacebook className='footer__icon' />
              <AiFillYoutube className='footer__icon' />
              <AiOutlineTwitter className='footer__icon' />
              <RiPinterestFill className='footer__icon' />
              <AiOutlineInstagram className='footer__icon' />
            </div>
          </div>

          <div className='footer__routes'>
            <ul className='footer__ul footer__Mobile '>
              <li><Link>About Us</Link></li>
              <li><Link>Contact</Link></li>
              <li><Link>Blog</Link></li>
            </ul>
            <ul className='footer__ul footer__Mobile '>
              <li><Link>Carrers</Link></li>
              <li><Link>Support</Link></li>
              <li><Link>Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
        <div className='footer__container footer__rigth footer__Mobile footer__height'>
          <Buttom
            text='Request Invite'
          />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer