// import React from 'react'
// import './Footer.css'
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// export default function Footer() {
//   return (
//     <div className='foot'> 
//           <div className="social-icons" >
//             <div>
//             <a href="https://www.facebook.com" target="_blank"  id='s-icons'>
//               <FaFacebook  className='ic'/>
//             </a>
//             </div>
//             <div>
//             <a href="https://www.twitter.com" target="_blank"  id='s-icons'>
//               <FaTwitter  className='ic'/>
//             </a>
//             </div>
//             <div>
//             <a href="https://www.linkedin.com" target="_blank"  id='s-icons'>
//               <FaLinkedin className='ic'/>
//             </a>
//             </div>
//             <div>
//             <a href="https://www.instagram.com" target="_blank"  id='s-icons'>
//               <FaInstagram className='ic'/>
//             </a>
//             </div>
//           </div>
//     </div>
//   )
// }
// Filename - Footer.js
import { FaFacebook, FaTwitter,FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from './logo.png'
import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyle";

const Footer = () => {
	return (
		<Box >
			<div className='footer-logo' style={{display:'flex',justifyContent:'center'}}>
			<div style={{marginTop:'20px',paddingBottom:'0px'}}><img src={logo} alt='' id='e' height={40} width={40}></img></div>
			<div ><h1
				style={{
					color: "black",
					textAlign: "center"

				}}
			>
				Elite Event Architecture
			</h1>
			</div>
			</div>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#abt-home">
							Aim
						</FooterLink>
						<FooterLink href="#abt-home">
							Vision
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#service">
							Photography
						</FooterLink>
						<FooterLink href="#service">
							Birthday Parties
						</FooterLink>
						<FooterLink href="#service">
							Catering
						</FooterLink>
						<FooterLink href="#service">
							Entertainment
						</FooterLink>
						<FooterLink href="#service">
							Invitation Card
						</FooterLink>
						<FooterLink href="#service">
							Destination Wedding
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Tamil Nadu
						</FooterLink>
						<FooterLink href="#">
							Kerala
						</FooterLink>
						<FooterLink href="#">
							Andhra Pradesh
						</FooterLink>
						<FooterLink href="#">
							Karnataka
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								> <a href="https://www.facebook.com" target="_blank"  id='s-icons' style={{color:'black',textDecoration:'none'}}>
								             <FaFacebook  className='ic'/>
											 <span style={{paddingLeft:'10px',color:'white'}}>Facebook</span>
								           </a>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									 <a href="https://www.instagram.com" target="_blank"  id='s-icons'style={{color:'black',textDecoration:'none'}}>
                                     <FaInstagram className='ic'/>
									<span style={{paddingLeft:'10px',color:'white'}}>Instagram</span>
            						 </a>						
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<a href="https://www.twitter.com" target="_blank"  id='s-icons' style={{color:'black',textDecoration:'none'}}>
                                   <FaTwitter  className='ic'/>  
								   <span style={{paddingLeft:'10px',color:'white'}}>Twitter</span>
                                     </a>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									 <a href="https://www.instagram.com" target="_blank"  id='s-icons' style={{color:'black',textDecoration:'none'}}>
          				            <FaYoutube className='ic'/>
									  <span style={{paddingLeft:'10px',color:'white'}}>Youtube</span>
         						   </a>
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;