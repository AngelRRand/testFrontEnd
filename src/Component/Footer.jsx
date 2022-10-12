import React from 'react';
import './Styles/FooterStyles.css';
import { 
  AiFillFacebook,
  AiFillYoutube, 
  AiOutlineTwitter, 
  AiOutlineInstagram
} from "react-icons/ai";
import { RiPinterestFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Logo from './Logo';
const Footer = () => {
  return (
    <footer className='containerFooter'>
      <div className='marginFooter'>
        <div className='containerContentFooter'>

          <div className='containerLeftFooter'>

            <div className='logoNetFooter'>
              
              {/* LGO */}
              <Logo colorTitle='white'/>

              <div className='netFooter'>
                <AiFillFacebook className='iconNet'/>
                <AiFillYoutube className='iconNet'/>
                <AiOutlineTwitter className='iconNet'/>
                <RiPinterestFill className='iconNet'/>
                <AiOutlineInstagram className='iconNet'/>
              </div>
            </div>

            <div className='linksFooter'>
                <ul>
                  <li><Link>About Us</Link></li>
                  <li><Link>Contact</Link></li>
                  <li><Link>Blog</Link></li>
                </ul>
                <ul>
                  <li><Link>Carrers</Link></li>
                  <li><Link>Support</Link></li>
                  <li><Link>Privacy Policy</Link></li>
                </ul>
            </div>

          </div>



          <div className='containerRightFooter'>
            <div className='btnCopyFooter'>
              <button className='btnNav text'>
                Request Invite
              </button>
              <span>© Easybank. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer