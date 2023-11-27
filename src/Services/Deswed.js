import React from 'react'
import './Deswed.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Deswed() {
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
            <a href='#Navbar' style={{textDecoration:'none'}}><div className='navicon'>Home</div></a>
                <a href='#service' style={{textDecoration:'none'}}><div className='navicon'>Services</div></a>
                <div className='navicon'>Price</div>
                <a href='#ab-down' style={{textDecoration:'none'}}><div className='navicon'>About</div></a> 
               <a href='#con-down' style={{textDecoration:'none'}}> <div className='navicon'>Contact</div></a>
                
                <div className='navicon2'><button id='btn' onClick={handleLogout}>Logout</button></div>
            </div>  
        </nav>
        <div className='intro'>
            <div className='int'> <span style={{color:'darkblue'}}>Destination</span> Wedding</div>
            
        </div>
        <div className='ig'>
            <img src='https://www.brightland.in/img/wedding/banner.jpg' alt='Earch' id='we' ></img>
        </div>
        <div className='wed-org' style={{padding:'30px',display:'flex',justifyContent:'space-around'}}>
                 <div >
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://miro.medium.com/v2/resize:fit:1000/1*muSSfngWhn93YOuChYDjoA.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Wedding Mantras
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                 </div>
                 <div >
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://res.cloudinary.com/simpleview/image/upload/v1672934663/clients/neworleans/NO_Wedding_Guide_Cover_2023_083d1020-6521-4dff-9c26-335c2b627b05.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         New Orleans
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                 </div>
                 <div >
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://i.pinimg.com/736x/4a/a0/e9/4aa0e94cd17d8e1977400c7570eb1ab9.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Indian Destination Wedding
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                 </div>
        </div>
    </div>
  );
}

