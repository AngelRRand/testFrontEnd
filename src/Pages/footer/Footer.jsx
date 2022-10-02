import React from 'react';
import '../../Styles/FooterStyles.css';
import Facebook from '../../Assets/Networks/Facebook.svg';
import Youtube from '../../Assets/Networks/Youtube.svg';
import Twitter from '../../Assets/Networks/Twitter.svg';
import Pinterest from '../../Assets/Networks/Pinterest.svg';
import Instragram from '../../Assets/Networks/Instagram.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='containerFooter'>
      <div className='marginFooter'>
        <div className='containerContentFooter'>

          <div className='containerLeftFooter'>

            <div className='logoNetFooter'>
              <div className='logoFooter'>
                <div className='containerLogo'>
                  <div className='paralelogramoLeft logo'></div>
                  <div className='paralelogramoMid logo'></div>
                  <div className='paralelogramoRight logo'></div>
                </div>
                <p >easybank</p>
              </div>
              <div className='netFooter'>
                <img src={Facebook} alt="Facebook" />
                <img src={Youtube} alt="Youtube" />
                <img src={Twitter} alt="Twitter" />
                <img src={Pinterest} alt="Pinterest" />
                <img src={Instragram} alt="Instragram" />
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