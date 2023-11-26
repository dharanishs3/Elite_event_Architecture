import { backdropClasses } from '@mui/material'
import React from 'react'
import './Contact.css'
import ContactForm from './Contactform'

export default function Contact() {
  return (
    <div >
        <div className='co'>
        <div><h1><span>CONTACT</span> US</h1></div>
        <div className='forms'>

            <div> <ContactForm/></div>
        </div>
        </div>
    </div>
  );
}
