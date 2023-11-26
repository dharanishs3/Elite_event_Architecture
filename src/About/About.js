import React from 'react'
import './About.css'
import { BrowserRouter,Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import dharanish from './dharanish.jpeg';
import aswath from './aswath.jpeg'

export default function About() {
  return (
    <div className='ab' id='abt-home'>
           <h1 className='heading'><span style={{color:'darkblue'}}>ABOUT </span>US</h1>
           <div className='ro'>
              <div className='image'>
               <img src='https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2020/01/22-scaled.jpg'></img>
              </div>
           <div className='content'>
            <h3>We will give a very <span style={{color:'lightblue'}}>special celebration</span> for you</h3>
            <p>
                
            Welcome to Elite Event Architecture, where we turn dreams into 
            extraordinary experiences. As seasoned professionals in event 
            design and management, we bring creativity, meticulous detail, 
            and client-centric focus to every project. From corporate galas 
            to intimate celebrations, our team is dedicated to crafting seamless, 
            stylish, and unforgettable events. Let's make your vision a reality with 
            Elite Event Architecture – where events transcend expectations.
            </p>
                 <a href='#service' smooth><button id='ser'>Services</button></a>
           
           </div>
           </div>
           <div className='abt-detail'>
            <div id='aswath'>
                <div><Avatar alt="Aswath S" src={aswath} sx={{ width: 150, height: 150 }}/></div>
                <div>Aswath</div>
            </div>
            <div id='sd'>
                <div><Avatar alt="Aswath S" src={dharanish} sx={{ width: 150, height: 150 }}/></div>
                <div>dharanish</div>
            </div>
            <div id='dilip'> 
                <div><Avatar alt="Aswath S" src="/static/images/avatar/1.jpg" sx={{ width:150, height: 150 }}/></div>
                <div>Dilip</div>
            </div>
           </div>
    </div>
  );
}
