import React from 'react'
import './Homepg.css'
import logo from './logo.png'
import Marriage from './Marriage.jpeg'
import birthdayparty from './birthdayparty.webp'
import photobooth from './photobooth.webp'
import wed from './wed.jpeg'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faMusic, faUtensils, faPhotoVideo, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from './Footer/Footer'




export default function Homepg() {
    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate('/login');
    }
  return (
    <div className='hp'>
        <nav className='Navbar'>
            <div className='inner-left'>
                <div className='logo'><img src={logo} alt='' id='e' height={40} width={40}></img></div>
                <div id='ele'>Arch</div>
            </div>
            <div className='inner-right'>
               <a href='#Navbar' style={{textDecoration:'none'}}><div className='navicon'>Home</div></a>
               <a href='#ab-down' style={{textDecoration:'none'}}><div className='navicon'>About</div></a> 
               <a href='#con-down' style={{textDecoration:'none'}}> <div className='navicon'>Contact</div></a>
                <div className='navicon2'><button id='btn' onClick={handleLogin}>Login</button></div>
            </div>  
        </nav>
        <div className='intro'>
            <div className='int'>ITS TIME TO CELBRATE! THE</div>
            <div className='int'>BEST <span style={{color:'darkblue'}}>EVENT ORGANIZERS</span></div>
            <div><Button variant="contained" onClick={handleLogin} id='gstart'><span style={{fontWeight:'bolder'}}>Get Started</span></Button></div>
        </div>
        <div className='ig'>
            <img src='https://www.rajwadaevents.com/uploaded-files/feature-images/Corporate-Events03_50_48.jpg' alt='Earch' id='we' ></img>
        </div>
        {/* <section className='service' id='service'>
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
        </section> */}
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

