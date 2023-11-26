import React from 'react'
import './Mainpg.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faMusic, faUtensils, faPhotoVideo, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from './Footer/Footer'



export default function Mainpg() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        window.alert('Are you sure you want to log out?');
        navigate('/');
    }

  return (
    <div className='hp'>
        <nav className='Navbar' id='Navbar'>
            <div className='inner-left'>
                <div className='logo'><img src={logo} alt='' id='e' height={40} width={40}></img></div>
                <div id='ele'>Arch</div>
            </div>
            <div className='inner-right'>
                <a href='#Navbar' style={{textDecoration:'none'}}><div className='navicon'>Home</div></a>
                <a href='#service' style={{textDecoration:'none'}}><div className='navicon'>Services</div></a>
                <div className='navicon'>Price</div>
                <a href='#ab-down' style={{textDecoration:'none'}}><div className='navicon'>About</div></a> 
               <a href='#con-down' style={{textDecoration:'none'}}> <div className='navicon'>Contact</div></a>
                
                <div className='navicon2'><button id='btn' onClick={handleLogout}>Logout</button></div>
            </div>  
        </nav>
        <div className='intro'>
        <div className='int'>"Welcome to <span style={{color:'darkblue'}}>Elite Event Architecture</span>, </div>
            <div className='int'>where your special moments  </div>
            <div className='int'>become unforgettable events!" </div>
           
           
        </div>
        <div className='ig'>
            <img src='https://www.rajwadaevents.com/uploaded-files/feature-images/Corporate-Events03_50_48.jpg' alt='Earch' id='we' ></img>
        </div>
        <section className='service' id='service'>
            <h1 className='heading'> Our <span style={{color:'darkblue'}}>Services</span></h1>
            
            <div className='box-container' id='map'>
            <div className='box' >
              <div className='child map'> 
            <FontAwesomeIcon className='ic' icon={faMapMarkerAlt} />
            <h3>Destination Wedding</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box'  id='env'>
          <div className='child env'> 
            <FontAwesomeIcon className='ic' icon={faEnvelope} />
            <h3>Invitation Card</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' id='mus'>
            <div className='child mus'>
            <FontAwesomeIcon className='ic' icon={faMusic} />
            <h3>Entertainment</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' id='uten' >
            <div className='child uten'>
            <FontAwesomeIcon className='ic' icon={faUtensils} />
            <h3>Catering</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' id='pv'>
          <div className='child pv'>
            <FontAwesomeIcon className='ic' icon={faPhotoVideo} />
            <h3>Photography</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' id='cake' >
          <div className='child cake'>
            <FontAwesomeIcon className='ic' icon={faBirthdayCake} />
            <h3>Birthday Parties</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
            </div>
        </section>
        <div>
          <div id='ab-down'>
            <About/>
          </div>
          <div id='con-down'>
            <Contact/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
    </div>
  );
}

