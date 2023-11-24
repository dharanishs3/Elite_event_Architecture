import React from 'react'
import './Homepg.css'
import logo from './logo.png'
import Marriage from './Marriage.jpeg'
import birthdayparty from './birthdayparty.webp'
import photobooth from './photobooth.webp'
import wed from './wed.jpeg'
import { useNavigate } from 'react-router-dom'


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
    </div>
  );
}

