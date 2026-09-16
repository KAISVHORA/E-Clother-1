import './css/Home.css'
import { BiDetail } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import heroImage from '../../assets/clother.png';
import offerImage from '../../assets/clother-offers.png';
import productImage from '../../assets/41kDS6JIn-L._SL500_.jpg';
import productImageTwo from '../../assets/41ju4jdKW9L._SL500_.jpg';
import productImageThree from '../../assets/41sjV7SFr6L._SL500_.jpg';
import productImageFour from '../../assets/41tfrlPfA8L._SL500_.jpg';
import brandLogo from '../../assets/logo.png';



const Home = () => {
    return (
        <div className="container">
            {/* clothers-bg */}
            <div className='clothers-bg'>
                <div className='row'>
                    <div className='left-content col-1'>
                        <h5>Clothers</h5>
                        <h1>Level uo you style with our <span>summer</span> collections</h1>
                        <button className='Primary-B'>Shop Now</button>
                    </div>
                    <div className='right-image col-1'>
                                                <img src={heroImage} alt='clother'></img>
                         <div className='skybehinda'></div>
                    </div>
                </div>
            </div>
            {/* End-clothers-bg */}

            {/* Customer-details */}
            <div className='Customer-details'>
                    <div className='Text-caption'>
                        <h1><span>We Provide best</span> <em>Customer experiences</em></h1>
                    </div>
                <div className='row row-gap'>
                    <div className='col-3'>
                        <div className='Cards'>
                            <BiDetail className='icons-card' />
                            <h1>Original Products</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis non est delectus.</p>
                        </div>
                    </div>
                     <div className='col-3'>
                        <div className='Cards'>
                           <FaRegThumbsUp className='icons-card'/>
                            <h1>Satisfaction guarante</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis non est delectus.</p>
                        </div>
                    </div>
                     <div className='col-3'>
                        <div className='Cards'>
                            <MdFiberNew className='icons-card' />
                            <h1>New Arrivals everyday</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis non est delectus.</p>
                        </div>
                    </div>
                     <div className='col-3'>
                        <div className='Cards'>
                            <FaShippingFast className='icons-card' />
                            <h1>Fast & Free Shipping</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis non est delectus.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End-Customer-details */}

            {/* clother-methood-picks */}
            <div className='clother-methood-picks'>
                <div className='row row-1'>
                     <div className='Text-caption'>
                        <h1><span>Currated</span> <em>Picks</em></h1>
                    </div>
                    <div className='Arrow-r-l'>
                        <IoIosArrowBack className='icons-arrow' />
                        <IoIosArrowForward className='icons-arrow' />
                    </div>
                </div>
                <div className='row row-2'>
                    <div className='col-4'>
                        <div className='clother-picks'>
                            <div className='Overlay-picks'>
                                <img src={productImage} alt='fashin-t-shirt'></img>
                            </div>
                            <h3>Sale</h3>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='clother-picks'>
                            <div className='Overlay-picks'>
                                <img src={productImageTwo} alt='fashin-t-shirt'></img>
                            </div>
                            <h3>Arrival</h3>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='clother-picks'>
                            <div className='Overlay-picks'>
                                <img src={productImageThree} alt='fashin-t-shirt'></img>
                            </div>
                            <h3>Man</h3>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='clother-picks'>
                            <div className='Overlay-picks'>
                                <img src={productImageFour} alt='fashin-t-shirt'></img>
                            </div>
                            <h3>Fashion</h3>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='clother-picks'>
                            <div className='Overlay-picks'>
                                <img src={productImage} alt='fashin-t-shirt'></img>
                            </div>
                            <h3>Accessories</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* End-clother-methood-picks */}

            {/* Offers-news */}
                <div className='row offers-new'>
                    <div className='col-1 img-overlay'>
                        <img src={offerImage} alt='clother-offers'></img>
                       <div className='overlay-content'>
                         <h5>Limited Offer</h5>
                        <h1>35% off only this friday<br/> and get special gift</h1>
                                                <button className='Primary-B'>Shop Now</button>
                       </div>
                    </div>
                    <div className='col-1 bg-content-offers'>
                            <h1>Subscribe to our newsletter to get upates to our latest collections</h1>
                        <p>Get 20% off on your first order just by subscribing to our newsletter</p>
                           <div className='content-offers-form'>
                                                                 <form>
                                                                   <div className='email-icons-1'>
                                                                     <MdOutlineEmail className='e-icons'/>
                                                                    <input type='email' name='email' placeholder='Enter Your Email'></input>
                                                                   </div>
                                                                    <input type="submit" className='Primary-B small-button' value="Subscribe Now"></input>
                                                                </form>
                                                       </div>
                      
                    </div>
                </div>
            {/* End-Offers-news */}

            {/* ProductsAll */}
            <div className='ProductAll'>
                <div className='container'>
                       <div className='row row-1'>
                     <div className='Text-caption'>
                        <h1><span>Featured</span> <em>products</em></h1>
                    </div>
                    <a href="shop"><button className='Primary-B'>View all</button></a>
                    </div>
                    <div className='row row-2'>
                        <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge old-sales'>Sale</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge old-sales'>Sale</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* End-ProductsAll */}

            {/* Brands-logo */}
            <div className='Brands-logo'>

                  <div className='row row-1'>
                     <div className='Text-caption'>
                        <h1><span>Brands</span></h1>
                    </div>
                    <div className='Arrow-r-l'>
                        <IoIosArrowBack className='icons-arrow' />
                        <IoIosArrowForward className='icons-arrow' />
                    </div>
                </div>

                <div className='row row-2'>
                    <div className='col-4'>
                        <div className='brands'>
                            <img src={brandLogo} alt='brand-logo'></img>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='brands'>
                            <img src={brandLogo} alt='brand-logo'></img>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='brands'>
                            <img src={brandLogo} alt='brand-logo'></img>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='brands'>
                            <img src={brandLogo} alt='brand-logo'></img>
                        </div>
                    </div>
                      <div className='col-4'>
                        <div className='brands'>
                            <img src={brandLogo} alt='brand-logo'></img>
                        </div>
                    </div>
                </div>

            </div>
            {/* End-Brands-logo */}

        </div>
    )
}

export default Home
