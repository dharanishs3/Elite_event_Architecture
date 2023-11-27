import React from 'react'
import './catering.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Catering() {
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
            <div className='int'> <span style={{color:'darkblue'}}>Catering</span> </div>
            
        </div>
        <div className='iv' >
            <img src='https://www.fftcaters.com/blog/wp-content/uploads/2021/08/Peach-Tree-City-Catering-Company-1024x683.jpg' alt='Earch' id='we'  ></img>
        </div>
        <div className='wed-org' style={{padding:'30px',display:'flex',justifyContent:'space-around'}}>
                 <div >
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="https://www.lafiestacatering.in/wp-content/uploads/2022/07/Things-To-Look-After-While-Choosing-The-Best-Catering-Services-in-Kolkata-1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         La fiesta
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
        image="https://images.click.in/classifieds/images/151/21_06_2023_12_09_46_2a7f376dcf1cc17d492c408e1d2aa071_t.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Zoop Go
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6fC8sXkE3rKMHMOFvIMEdz-Ex0PJUqPMtqEXphi6EfQ7uPAoGZyosbvzDmMMfl3zEKA&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         KingWorld Catering
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

