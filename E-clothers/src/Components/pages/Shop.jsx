import './css/Shops.css'
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";



const Shop = () => (
    <div className="container">
        <div className="Filters-page" >
            <div className="Breadcrumbs-group">
                <ul className='breadcrumbs'>
                    <li className='breadcrumbs-items activ-disabled'><a href='#'>Home / </a></li>
                    <li className='breadcrumbs-items activ-disabled'><a href='#'>Clothers /</a></li>
                    <li className='breadcrumbs-items'><a href='#'>Men Shirts</a></li>
                </ul>
            </div>
            <div className='row-group'>
                <div className='colums-1 filters-left'>
                    <div className="row-filters">
                        <h2 className='title-Filters'>Filters</h2>
                        <p className='text-Filters'>Clear</p>
                    </div>
                    <div className='order-detail'>
                        <div className='categeories-group'>
                            <div className='row-filters bg-catergories'>
                                <h4 className='title-categories'>Categories</h4>
                                <AiOutlineLine className='line-icons' />
                            </div>
                            <div className='categeoies-list'>
                                <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Men</h2>
                                    <input type='checkbox'></input>
                                </div>
                                    <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Women</h2>
                                    <input type='checkbox'></input>
                                </div>
                                    <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>KIDS</h2>
                                    <input type='checkbox'></input>
                                </div>
                                    <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Accessories</h2>
                                    <input type='checkbox'></input>
                                </div>
                            </div>
                            <div className='categeoies-list'>
                                <div className='row-filters bg-catergories'>
                                    <h4 className='title-categories'>Prices</h4>
                                    <AiOutlineLine className='line-icons' />
                                </div>
                                <div className='progress-Price'>
                                    <div className='progress'>
                                        <div className='progress-btn'></div>
                                    </div>
                                          <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Range</h2>
                                    <h5 className='title-price'>$20 - $300</h5>
                                </div>
                                </div>
                            </div>
                                 <div className='row-filters bg-catergories'>
                                <h4 className='title-categories'>Brands</h4>
                                <AiOutlineLine className='line-icons' />
                            </div>
                            <div className='categeoies-list'>
                                 <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>H&M</h2>
                                    <input type='checkbox'></input>
                                </div>
                                 <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Mark & Spencer</h2>
                                    <input type='checkbox'></input>
                                </div>
                                 <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Dior</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Gucci</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Prada</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Versace</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>Zara</h2>
                                    <input type='checkbox'></input>
                                </div>
                                <div className='Num-count'>
                                    <h5 className='title-num'>+ 34 More</h5>
                                </div>
                            </div>

                              <div className='row-filters bg-catergories'>
                                <h4 className='title-categories'>Size</h4>
                                <AiOutlineLine className='line-icons' />
                                </div>
                                <div className='row-filters '>
                                    <div className='size-num categories-items'>
                                         <h2 className='title-order'>S</h2>
                                          <input type='checkbox'></input>
                                    </div>
                                        <div className='size-num categories-items'>
                                         <h2 className='title-order'>M</h2>
                                          <input type='checkbox'></input>
                                    </div>
                                        <div className='size-num categories-items'>
                                         <h2 className='title-order'>L</h2>
                                          <input type='checkbox'></input>
                                    </div>
                                        <div className='size-num categories-items'>
                                         <h2 className='title-order'>XL</h2>
                                          <input type='checkbox'></input>
                                    </div>
                                        <div className='size-num categories-items'>
                                         <h2 className='title-order'>XXL</h2>
                                          <input type='checkbox'></input>
                                    </div>
                                </div>

                               <div className='row-filters bg-catergories'>
                                <h4 className='title-categories'>DISCOUNT</h4>
                                <AiOutlineLine className='line-icons' />
                            </div>
                                                        <div className='categeoies-list'>
                                 <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>10% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                 <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>20% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                 <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>30% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>40% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>50% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>60% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                   <div className='row-filters-1 categories-items'>
                                    <h2 className='title-order'>80% and above</h2>
                                    <input type='checkbox'></input>
                                </div>
                                </div>

                        </div>
                    </div>
                </div>
                <div className='colums-2 filters-right'>
                    <div className='row row-1'>

                        <div className='Sort-left'>
                            <span className='sort-menus'><TfiMenuAlt /></span>
                            <p className='menus-text'>Sort by :</p>
                            <div className='form-select'>
                                <select>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                    <option className='option-select' value="New Arrive">New Arrivals</option>
                                </select>
                            </div>
                        </div>
                        <div className='Sort-right'>
                            <h5 className='count-show'>Showing 1-20 <span className='count-end'>of 356 Products</span></h5>
                        </div>
                    
                    </div>

                    <div className='row row-2'>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge old-sales'>Sale</span>
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge old-sales'>Sale</span>
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                <span className='badge new'>New</span>
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                          <div className='col-2'>
                            <div className='Products-Card'>
                                {/* <span className='badge new'>New</span> */}
                                <img src='src/assets/41kDS6JIn-L._SL500_.jpg' alt='fashion-clother'></img>
                                <h4> Printed A-Line Top</h4>
                                <p className='Price'>$20.08 <del>$35.00</del></p>
                                 <a href='page'><button className='Cart-btn'>Add to cart</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='pagination-Group'>
                        <ul className='pagination'>
                            <li className='page-item arrow-flex'><a href='#' className='page-link'><MdOutlineArrowBackIos /> Previous</a></li>
                            <li className='page-item'><a href='#' className='page-link'>1</a></li>
                            <li className='page-item'><a href='#' className='page-link'>2</a></li>
                            <li className='page-item'><a href='#' className='page-link'>3</a></li>
                            <li className='page-item'><a href='#' className='page-link'>4</a></li>
                            <li className='page-item arrow-flex'><a href='#' className='page-link'>Next <MdOutlineArrowForwardIos /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Shop