import React,{useState} from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'


const Signup = () => {
    const navigate=useNavigate();
    const handleSign=()=>{
         navigate('/login');
    };
    
    const[action,setAction] = useState("Sign Up");
    
  return (
    <div>
    <div className='lp' style={{backgroundColor:'grey',height:'100vh',display:'flex'}}>
        <div className='comp'>
           <div className='logo'><img src={logo} alt='' id='e' height={200} width={200}></img></div>
           <div id='el'>Arch</div>
        </div>

        <div id='lc'>
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder = "Name"/>
            </div>
           
            <div className="input">
               
                <input type="email" placeholder="Email-ID"/>
            </div>
            <div className="input">
               
                <input type="password" placeholder="Set Password"/>
            </div>
            <div className="input">
               
                <input type="password" placeholder="Confirm Password"/>
            </div>
        </div>
        {/* {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>} */}
        <div className='btn'><button onClick={handleSign} className='sign-btn'>SignUp</button></div>
        
        <div className="submit-container">
        {/* <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
        {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> */}
        </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Signup

