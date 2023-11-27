import React from 'react'
import './Invi.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Invi() {
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
            <div className='int'> <span style={{color:'darkblue'}}>Invitation</span> Design</div>
            
        </div>
        <div className='iv' >
            <img src='https://i.etsystatic.com/16242302/r/il/2aa5df/2214660727/il_fullxfull.2214660727_aeug.jpg' alt='Earch' id='we'  ></img>
        </div>
        <div className='wed-org' style={{padding:'30px',display:'flex',justifyContent:'space-around'}}>
                 <div >
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://thumbs.dreamstime.com/z/floral-background-card-wedding-invitation-template-set-brown-leaves-save-date-greeting-poster-cover-design-183788587.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Dreams Time
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
        image="https://dreamcardsweb.s3.amazonaws.com/tags/e--invitation-online_m.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dream Cards
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
        image="https://threebestrated.in/images/THAT1CARD-Chennai-TN.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         THAT1CARD
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

