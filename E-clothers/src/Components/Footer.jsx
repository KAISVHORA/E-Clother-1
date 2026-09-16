import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import clothersLogo from '../assets/clothers.png';

const Footer = () => {
    return (
        <div>
        <div className='Footer'>
            <div className='container'>
                <div className=' row-col'>
                    <div className='footer-content col-3'>
                                 <div className='logo'>
                <img src={clothersLogo} alt="clother-logo"/>
            </div>
            <p className='text-ft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, perferendis alias! Quasi, repellat. Ams ipsa maxime impedit iste.</p>
            <div className='Footer-icons'>
                <FaFacebook className='icons-style'/>
                <FaSquareXTwitter className='icons-style' />
                <FaInstagramSquare className='icons-style' />
                <FaLinkedin className='icons-style' />
            </div>
                    </div>

                    <div className='col-3 icons-link'>
                        <h1>Quick Link</h1>
                        <li><Link>Home</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link>Pages</Link></li>
                        <li><Link>Contact</Link></li>
                    </div>

                    <div className='col-3 icons-link'>
                         <h1>Contact Us</h1>
                         <address>
                            <div className='row-1 text-content'>
                                                              <FaMapMarkerAlt className='icons-style'/>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,</p>
                            </div>
                                                        <div className='icon-bottom '>
                                                             <MdEmail className='icons-style' />
                                                              <a href='milto:Clothers@email.com' className='text-content'> Clothers Slogan Here</a>                            </div>
                                                              
                                                                                                                      <div className=' icon-bottom'>
                                                             <FaPhone className='icons-style' />
                                                              <a href='tel:++91 0987654321'  className='text-content'> +91 0987654321</a>                            </div>
                                                            
                         </address>
                    </div>
                        <div className='col-3 icons-link '>
                                                                <h1>Subscribe</h1>
                                                                <p  className='text-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos quae itaque repudiandae cum dolore.</p>
                                                       <div className='Sub-footer-form'>
                                                                 <form>
                                                                    <input type='email' name='email' placeholder='Your Email'></input>
                                                                    <input type="submit" className='Primary-B' value="Subscribe Now"></input>
                                                                </form>
                                                       </div>
                                                              </div>
                </div>
            </div>
        </div>
                        <hr/>
                {/* footer-sup */}
                            <div className='footer-sup'>
                <p>Copyright 2025 &copy; ClothersSlocanhere website </p>
            </div>
            {/* End-footer-sup */}
        </div>
        
    )
}

export default Footer
