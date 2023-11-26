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
                <div className='navicon'>Home</div>
                <div className='navicon'>About</div>
                <div className='navicon'>Contact</div>
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
        <section className='service' id='service'>
            <h1 className='heading'> Our <span style={{color:'darkblue'}}>Services</span></h1>
            
            <div className='box-container'>
            <div className='box' >
              <div className='child map'> 
            <FontAwesomeIcon className='ic' icon={faMapMarkerAlt} />
            <h3>Venue Selection</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' >
          <div className='child env'> 
            <FontAwesomeIcon className='ic' icon={faEnvelope} />
            <h3>Invitation Card</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' >
            <div className='child mus'>
            <FontAwesomeIcon className='ic' icon={faMusic} />
            <h3>Entertainment</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' >
            <div className='child uten'>
            <FontAwesomeIcon className='ic' icon={faUtensils} />
            <h3>Catering</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' >
          <div className='child pv'>
            <FontAwesomeIcon className='ic' icon={faPhotoVideo} />
            <h3>Photography</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
          <div className='box' >
          <div className='child cake'>
            <FontAwesomeIcon className='ic' icon={faBirthdayCake} />
            <h3>Birthday Parties</h3>
            <p>lorem ipsum</p>
            </div>
          </div>
            </div>
        </section>
        <div>
            
        </div>
    </div>
  );
}

