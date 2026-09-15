
import './Navber.css'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";




const Navber = () => {
    return (
        
        <div className='container'>
           <div className='Header'>
            <div className='logo'>
                <img src="src/assets/clothers.png "  alt="clother-logo"/>
            </div>
             <nav className='Navber'> 
                <ul className='nav-menus'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="page">Page</Link>
                    </li>
                     <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>

            </nav>
             <div className='Cart-Menus'>
                      <div className='icon-menus'>
                          <div className='Search-icon'> <IoIosSearch /></div>
                   <div className='login-profile'>
                    <Link to="sign"><BiSolidUser /></Link>
                   </div>
                    </div>
                   <div className='carts'>
                    <Link to="cart"><PiShoppingCartSimpleBold /></Link>
                   </div>
                   <div className='menus'><IoMdMenu /></div>
            </div>
           </div>
        </div>
    )
}

export default Navber