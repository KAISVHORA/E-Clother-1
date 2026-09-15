
import { IoCartOutline } from "react-icons/io5";

const login = () =>{
    return(
        <div className="container">
            <div className="form-sign">
                <div className="row">
                     <div className='col-1 image-left-sign'>
                            <img src='src/assets/clothers.png' alt='logo-clthers'></img>
                        <h1>Get access to our Order,<br/> Wishlist and Recommendations</h1>
                         <button className='Primary-B secondary-W'><a href="sign">SINGUP</a></button>
                    </div>
                            <div className='col-1 content-right-sign'>
                                            <div className='Title-icons'>
                                                <IoCartOutline className='cart-sign'/>
                                                <h1 className='title-store'>C-STORE</h1>
                                               
                                            </div>
                                            <form className='content-right-form'>
                                                <label>EMAIL</label>
                                                <input type='email' name='email'></input>
                                                <label>PASSWORD</label>
                                                <input type='pw' name='password'></input>
                                            </form>
                                                                      <button className='Primary-B'><a href="login">LOGIN</a></button>
                                        </div>
                </div>
            </div>
        </div>
    )
}
export default login