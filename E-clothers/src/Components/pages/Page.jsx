import './css/Page.css'
import { FaRegStar } from "react-icons/fa";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { RiBox3Line } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import productImage from '../../assets/41kDS6JIn-L._SL500_.jpg';




const Page = () => {
    return (
        <div className="container">
            <div className='pages'>
                            <div className="Breadcrumbs-group">
                <ul className='breadcrumbs'>
                    <li className='breadcrumbs-items activ-disabled'><a href='#'>Home / </a></li>
                    <li className='breadcrumbs-items activ-disabled'><a href='#'>Clothers /</a></li>
                    <li className='breadcrumbs-items'><a href='#'>Men Shirts</a></li>
                </ul>
            </div>
                <div className='row row-3'>
                    <div className='col-1 img-cart-left'>
                        <img src={productImage} alt='Product'></img>

                        <div className='photo-menu-cart'>
                            <img src={productImage} alt='Product thumbnail'></img>
                            <img src={productImage} alt='Product thumbnail'></img>
                            <img src={productImage} alt='Product thumbnail'></img>
                        </div>

                    </div>
                    <div className='col-1 details-right'>
                        <div className='star-content'>
                            <div className='star-5'>
                                <FaRegStar className='star'/>
                                <FaRegStar className='star'/>
                                <FaRegStar className='star' />
                                <FaRegStar className='star'/>
                            </div>
                            <div className='Star-Rated'>
                                <span className='title-rated'>Rated 4.12 / 5 by 455 customers</span>
                            </div>
                        </div>
                       <h1 className='title-name'>The Indian Garage Co</h1>
                       <p className='text-name'> Men White & Teal Blue Slim Fit Striped Casual Shirt</p>
                       <div className='prices-off'>
                        <h1 className='title-prices'>$399.00 <br/><del>$420.00</del><span className='title-off'> (68% OFF) </span></h1>
                       </div>
                       <div className='mores-color'>
                        <h5 className='title-mores'>More Colors</h5>
                        <div className='img-mores'>
                            <img src={productImage} alt='Product thumbnail'></img>
                            <img src={productImage} alt='Product thumbnail'></img>
                            <img src={productImage} alt='Product thumbnail'></img>
                        </div>
                        <div className='name-size'>
                            <div className='select-content'>
                                <h2 className='title-select'>Select Size</h2>
                                <h2 className='title-size-guides'>Size Guides</h2>
                            </div>
                            <div className='select-size'>
                            <h4 className='title-size'>38</h4>
                            <h4 className='title-size'>40</h4>
                            <h4 className='title-size'>43</h4>
                            <h4 className='title-size'>44</h4>
                            <h4 className='title-size'>46</h4>
                            </div>
                            <div className='square-num'>
                                <CgMathMinus />
                                <h5 className='title-squ'>1</h5>
                                <CgMathPlus />
                            </div>
                        </div>
                        <div className='Add-cart-button'>
                                                    <a href="cart"><button className='Primary-B Add-button'><BsMinecartLoaded /> Add to cart</button></a>
                                                                                                        <button className='Primary-B Add-button Add-button Add-button-white'><FaRegHeart />  Add to Wishlist</button>
                        </div>
                        <div className='Delivery-Return'>
                            <div className='Delivey Delivery-Return  button-Delivery'>
                                <FiTruck className='delivery-icons' />
                                <h6 className='title-Deliery'>Free Delivery</h6>
                            </div>
                            <div className='Return Delivery-Return button-Delivery'>
                                <RiBox3Line className='delivery-icons' />
                                <h6 className='title-Deliery'>7 Day easy Return</h6>
                            </div>
                        </div>
                              <div className='Available'>
                                      <div className='form-select'>
                                <select>
                                    <option className='option-select' value="New Arrive"><MdOutlineLocalOffer />Available offers</option>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                </select>
                            </div>
                              </div>
                       
                       </div>

                    </div>
                </div>

                <div className='Product-content-D'>
                    <div className='product-Descript'>
                        <h1 className='Title-Product'>Product Description</h1>
                        <h1 className='Title-Product title-reiview-gray'>Reviews (24)</h1>
                    </div>
                            <div className='progress'>
                                        <div className='progress-btn-1'></div>
                                    </div>
                                    <div className='Description'>
                                        <h2 className='title-Description'>Description</h2>
                                        <p className='text-Description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda mollitia repudiandae deserunt quis nemo iste omnis asperiores obcaecati consequuntur pariatur?</p>
                                    </div>
                                    <div className='progress'>
                                    </div>
                                    <div className='Product-detail'>
                                        <h2 className='title-detail-p'>Product Detail</h2>
                                        <div className='Product-group'>
                                            <h4 className='title-Pro'>Material</h4>
                                            <p className='text-Pro'>100% cotton</p>
                                        </div>
                                         <div className='Product-group'>
                                            <h4 className='title-Pro'>Sleeve Length</h4>
                                            <p className='text-Pro'>Long Sleeve</p>
                                        </div>
                                         <div className='Product-group'>
                                            <h4 className='title-Pro'>Colar</h4>
                                            <p className='text-Pro'>Spread Collar</p>
                                        </div>
                                         <div className='Product-group'>
                                            <h4 className='title-Pro'>Print or Pattern Type</h4>
                                            <p className='text-Pro'>Vertical Stripes</p>
                                        </div>
                                         <div className='Product-group'>
                                            <h4 className='title-Pro'>Occasion</h4>
                                            <p className='text-Pro'>Casusal</p>
                                        </div>
                                         <div className='Product-group'>
                                            <h4 className='title-Pro'>Placket</h4>
                                            <p className='text-Pro'>Button Placket</p>
                                        </div>
                                         <div className='Product-group'>
                                            <h4 className='title-Pro'>Number of Pockets</h4>
                                            <p className='text-Pro'>1</p>
                                        </div>
                                             <div className='Product-group'>
                                            <h4 className='title-Pro'>Pocket Type</h4>
                                            <p className='text-Pro'>Patch</p>
                                        </div>
                                             <div className='Product-group'>
                                            <h4 className='title-Pro'>Cuff</h4>
                                            <p className='text-Pro'>Button</p>
                                        </div>
                                             <div className='Product-group'>
                                            <h4 className='title-Pro'>Transparency</h4>
                                            <p className='text-Pro'>Opaque</p>
                                        </div>
                                             <div className='Product-group'>
                                            <h4 className='title-Pro'>Weave Pattern</h4>
                                            <p className='text-Pro'>Regular</p>
                                        </div>
                                             <div className='Product-group'>
                                            <h4 className='title-Pro'>Surface Styling</h4>
                                            <p className='text-Pro'>Chest Pocket</p>
                                        </div>
                                             <div className='Product-group'>
                                            <h4 className='title-Pro'>Main Trend</h4>
                                            <p className='text-Pro'>New Basics</p>
                                        </div>

                                        <div className='Product-Complete'>
                                                       <div className='progress'>
                                    </div>
                                                   <div className='Description'>
                                        <h2 className='title-Description'>Complete The Look</h2>
                                        <p className='text-Description'>Lorem ipsum dolor sit amet consectetur rem voluptate qui temporibus impedit, obcaecati atque beatae laborum. Aliquid a in asperiores quis optio, beatae praesentium illo voluptatum odit rem cumque est aliquam reprehenderit cum doloribus nihil libero! Perspiciatis possimus soluta error saepe eaque voluptas.</p>
                                    </div>
                                        </div>
                                    </div>
                </div>
                <div className='product-order-1'>

                          <div className='row row-1'>
                                     <div className='Text-caption'>
                                        <h1>Related Products</h1>
                                    </div>
                                    <div className='Arrow-r-l'>
                                        <IoIosArrowBack className='icons-arrow' />
                                        <IoIosArrowForward className='icons-arrow' />
                                    </div>
                                </div>
                                                    <div className='row row-2'>
                        <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                <button className='Cart-btn'>Add to cart</button>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge old-sales'>Sale</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                <button className='Cart-btn'>Add to cart</button>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                <button className='Cart-btn'>Add to cart</button>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src={productImage} alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                <button className='Cart-btn'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
