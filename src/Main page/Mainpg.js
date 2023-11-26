import React from 'react'
import './Mainpg.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'


export default function Mainpg() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        window.alert('Are you sure you want to log out?');
        navigate('/');
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
                <div className='navicon'>Services</div>
                <div className='navicon'>About</div>
                <div className='navicon'>Contact</div>
                <div className='navicon2'><button id='btn' onClick={handleLogout}>Logout</button></div>
            </div>  
        </nav>
    </div>
  );
}

