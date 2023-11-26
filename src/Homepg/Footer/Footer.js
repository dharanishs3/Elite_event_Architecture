import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='foot'> 
          <div className="social-icons" >
            <div>
            <a href="https://www.facebook.com" target="_blank"  id='s-icons'>
              <FaFacebook  className='ic'/>
            </a>
            </div>
            <div>
            <a href="https://www.twitter.com" target="_blank"  id='s-icons'>
              <FaTwitter  className='ic'/>
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com" target="_blank"  id='s-icons'>
              <FaLinkedin className='ic'/>
            </a>
            </div>
            <div>
            <a href="https://www.instagram.com" target="_blank"  id='s-icons'>
              <FaInstagram className='ic'/>
            </a>
            </div>
          </div>
    </div>
  )
}
