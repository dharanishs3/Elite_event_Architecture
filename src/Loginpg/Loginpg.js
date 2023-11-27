// import React,{useState} from 'react'
// import './Loginpg.css'
// import logo from './logo.png'
// import { useNavigate } from 'react-router-dom';



// const Login = () => {

//     const navigate=useNavigate();
//     const handleLogin=()=>{
//         navigate('/login/Main');
//     };
//     const handleRegister=()=>{
//         navigate('signup');
//     };
//     const[action,setAction] = useState("Login");
    
//   return (
//     <div>
//     <div className='lp' style={{backgroundColor:'grey',height:'100vh',display:'flex'}}>
//         <div className='comp'>
//            <div className='logo'><img src={logo} alt='' id='e' height={200} width={200}></img></div>
//            <div id='el'>Arch</div>
//         </div>

//         <div id='lc'>
//        <div className='containe' >
//            <div className="header">
//                <div className="text">{action}</div>
//                <div className="underline"></div>
//            </div>
//            <div className="inputs">
            

//             {action==="Login"?<div></div>: <div className="input">
//                 <input type="text" placeholder = "Name" required/>
//             </div>}
           
//             <div className="input">
            

//                 <input type="email" placeholder="Email-ID"/>
//             </div>
//             <div className="input">
//                 <input type="password" placeholder="Password"/>
//             </div>
           
//         </div>
//         {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>}
//         <div className='login-btn'><button className='log-btn' onClick={handleLogin}>Login</button></div>
//         <div className='already'><span>Doesn't have an account ? <a onClick={handleRegister}><span id='r'>Register</span></a></span></div>
        
//         {/* <div className="submit-container">
//         <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//     </div> */}
//         </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Login


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Loginpg.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setMailid] = useState('');
  const handleMail = (event) => { 
      setMailid(event.target.value) 
  }
  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }
  const handleLogin = (event) => {

    event.preventDefault();
    axios.get(`http://localhost:3001/users?email=${email}&password=${password}`)
      .then(res=>{
        if(res.data.length>0)
        {
          alert("LoggedIn Successfully! ")
          navigate("/login/Main");
        }
        else{
          alert("User account doesn't exist");
        }
      }

        )  
  }
  const handleRegister=()=>{
            navigate('signup');
     };
  return (
    <div>
      <div className='lp' style={{ backgroundColor: 'grey', height: '100vh', display: 'flex' }}>
        <div className='comp'>
          <div className='logo'><img src={logo} alt='' id='e' height={200} width={200}></img></div>
          <div id='el'>Arch</div>
        </div>

        <div id='lc'>
          <div className='containe'>
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="email" placeholder="Email-ID" value={email} onChange={handleMail} />
              </div>
              <div className="input">
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} />
              </div>
            </div>
            <div className='login-btn'>
              <button className='log-btn' onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className='already'>
              <span>Doesn't have an account ? <a onClick={handleRegister}><span id='r'>Register</span></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;