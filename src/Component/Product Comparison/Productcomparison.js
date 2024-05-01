import React from 'react'
import { FaRegUser, FaShippingFast } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdNavigateNext, MdOutlineFavoriteBorder } from 'react-icons/md';
import { MdOutlineShoppingCart } from "react-icons/md";
import './Productcomparison.css'
import { IoMdArrowDropdown, IoMdCloudDone } from 'react-icons/io';
import { RiCustomerService2Line } from 'react-icons/ri';
import { GiTrophyCup } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
function Productcomparison() {
    return (
        <>
            <div>
                <div className='p-3'>
                    <nav className='d-flex justify-content-between mt-2'>
                        <div>
                            <img src="img/Home/logo.png" alt="" />
                        </div>
                        <div>
                            <ul className='d-flex nav_menu h5'>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/Shop">Shop</NavLink></li>
                                <li><NavLink to="/Blog">Blog</NavLink></li>
                                <li><NavLink to="/Contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className='nav_icon h5'>
                            <a href="/"><FaRegUser /></a>
                            <a href="/"><IoSearch /></a>
                            <a href="/"><MdOutlineFavoriteBorder /></a>
                            <a href="/"><MdOutlineShoppingCart /></a>
                        </div>
                    </nav>
                </div>
                {/* shop banner start */}
                <div className='shop_banner text-center'>
                    <div className='d-grid justify-content-center'>
                        <img src="img/Single Product/logo.png" alt="" className='m-auto' />
                        <h1><b>Product Comparison</b></h1>
                        <span><b>Home</b> <MdNavigateNext /> Comparison</span>
                    </div>
                </div>
                {/* shop banner end */}
                {/* product start */}
                <div>
                    <div className='row p-5 w-75 m-auto'>
                        <div className='col'>
                            <h4><b>
                                Go to Product <br />page for more<br />
                                Products</b></h4>
                            <h5> <a href="/" className='border-bottom text-dark p-1'>
                                View More
                            </a></h5>
                        </div>
                        <div className='col'>
                            <img src="img/Product Comparison/product-1.png" alt="" />
                            <p> <b>Asgaard Sofa</b></p>
                            <p>Rs. 250,000.00</p>
                            <div className='d-flex gap-2 align-items-baseline'>
                                <p>4.7</p>
                                <img src="img/Product Comparison/star.png" alt="" />
                                <p className='text-secondary'>204 Review</p>
                            </div>
                        </div>
                        <div className='col'>
                            <img src="img/Product Comparison/product-2.png" alt="" />
                            <p> <b>Outdoor Sofa Set</b></p>
                            <p>Rs. 224,000.00</p>
                            <div className='d-flex gap-2 align-items-baseline'>
                                <p>4.2</p>
                                <img src="img/Product Comparison/star.png" alt="" />
                                <p className='text-secondary'>145 Review</p>
                            </div>
                            <a>
                                <NavLink to="/Cart">Add To Cart</NavLink>
                            </a>
                        </div>
                        <div className='col'>
                            <p><b>Add A Product</b></p>
                            <button className='rounded-2' style={{ backgroundColor: '#B88E2F', border: 'none', color: '#fff', padding: '10px' }}>Choose a Product <IoMdArrowDropdown /></button>
                        </div>
                    </div>
                    <div className='border border-bottom-2'></div>
                    <div className='mt-5 w-50 m-auto'>
                        <h5><b>General </b></h5>
                        <table className='table'>
                            <tr>
                                <td>Sales Package</td>
                                <td>1 sectional sofa</td>
                                <td>1 Three Seater, 2 Single Seater</td>

                            </tr>
                            <tr>
                                <td>Model Number</td>
                                <td>TFCBLIGRBL6SRHS</td>
                                <td>DTUBLIGRBL568</td>
                            </tr>
                            <tr>
                                <td>Secondary Material</td>
                                <td>Solid Wood</td>
                                <td>Solid Wood</td>
                            </tr>
                            <tr>
                                <td>Configuration</td>
                                <td>L-shaped</td>
                                <td>L-shaped</td>
                            </tr>
                            <tr>
                                <td>Upholstery Material</td>
                                <td>Fabric + Cotton</td>
                                <td>Fabric + Cotton</td>
                            </tr>
                            <tr>
                                <td>Upholstery Color</td>
                                <td>Bright Grey & Lion</td>
                                <td>Bright Grey & Lion</td>
                            </tr>
                        </table>
                    </div>
                    <div className='mt-5 w-50 m-auto'>
                        <h5><b>Product  </b></h5>
                        <table className='table'>
                            <tr>
                                <td>Filling Material</td>
                                <td>Foam</td>
                                <td>Matte</td>
                            </tr>
                            <tr>
                                <td>Finish Type</td>
                                <td>Bright Grey & Lion</td>
                                <td>Bright Grey & Lion</td>
                            </tr>
                            <tr>
                                <td>Adjustable Headrest</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Maximum Load Capacity</td>
                                <td>280 KG</td>
                                <td>300 KG</td>
                            </tr>
                            <tr>
                                <td>Origin of Manufacture</td>
                                <td>India</td>
                                <td>India</td>
                            </tr>
                        </table>
                    </div>
                    <div className='mt-5 w-50 m-auto'>
                        <h5><b>Dimensions  </b></h5>
                        <table className='table'>
                            <tr>
                                <td>Width</td>
                                <td>265.32 cm</td>
                                <td>265.32 cm</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>76 cm</td>
                                <td>76 cm</td>
                            </tr>
                            <tr>
                                <td>Depth</td>
                                <td>167.76 cm</td>
                                <td>167.76 cm</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>45 KG</td>
                                <td>45 KG</td>
                            </tr>
                            <tr>
                                <td>Seat Height</td>
                                <td>41.52 cm</td>
                                <td>41.52 cm</td>
                            </tr>
                            <tr>
                                <td>Leg Height</td>
                                <td>5.46 cm</td>
                                <td>5.46 cm</td>
                            </tr>
                        </table>
                    </div>
                    <div className='mt-5 w-50 m-auto'>
                        <h5><b>Warranty  </b></h5>
                        <table className='table'>
                            <tr>
                                <td>Warranty Summary</td>
                                <td>1 Year Manufacturing Warranty Type</td>
                                <td>1.2 Year Manufacturing Warranty</td>
                            </tr>
                            <tr>
                                <td>Warranty Service
                                    Type</td>
                                <td>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
                                <td>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
                            </tr>
                            <tr>
                                <td>Covered in Warranty</td>
                                <td>Warranty Agains Manufacturing Defect</td>
                                <td>Warranty of the product is limited to manufacturing defects only.</td>
                            </tr>
                            <tr>
                                <td>Not Covered in Warranty</td>
                                <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                                <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                            </tr>
                            <tr>
                                <td>Domestic Warranty</td>
                                <td>1 Year</td>
                                <td>3 Months</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <button className='product_comparison_btn'>Add To Cart</button>
                    <button className='product_comparison_btn'>Add To Cart</button>
                </div>
                {/* product end */}
                {/* High Quality start */}
                <div className='d-flex justify-content-between p-5 quality_mein mt-5'>
                    <div className='d-flex gap-3'>
                        <div ><GiTrophyCup className='h1' /></div>
                        <div>
                            <p><b>High Quality</b><br />
                                crafted from top materials</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div ><IoMdCloudDone className='h1' /></div>
                        <div>
                            <p><b>Warranty Protection</b><br />
                                Over 2 years</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div ><FaShippingFast className='h1' /></div>
                        <div>
                            <p><b>Free Shipping</b><br />
                                Order over 150 $</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div ><RiCustomerService2Line className='h1' /></div>
                        <div>
                            <p><b>24 / 7 Support</b><br />
                                Dedicated support</p>
                        </div>
                    </div>
                </div>
                {/* High Quality end */}
                {/* footer start */}
                <div className='d-flex justify-content-between p-5'>
                    <div className='d-grid'>
                        <h3><b>Funiro.</b></h3>
                        <p>400 University Drive Suite 200 Coral<br /> Gables,
                            FL 33134 USA</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="/" className='text-secondary'>Links</a></li>
                            <div className='d-grid gap-3 mt-4'>
                                <li><a href="/" className='text-dark'>Home</a></li>
                                <li><a href="/" className='text-dark'>Shop</a></li>
                                <li><a href="/" className='text-dark'>About</a></li>
                                <li><a href="/" className='text-dark'>Contact</a></li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul >
                            <li><a href="/" className='text-secondary'>Help</a></li>
                            <div className='d-grid gap-3 mt-4'>
                                <li><a href="/" className='text-dark'>Payment Options</a></li>
                                <li><a href="/" className='text-dark'>Returns</a></li>
                                <li><a href="/" className='text-dark'>Privacy Policies</a></li>
                            </div>
                        </ul>
                    </div>
                    <div>

                        <form>
                            <div class="form align-items-center ">
                                <div className='d-grid gap-3'>
                                    <label class="sr-only" for="inlineFormInput">Newsletter</label>
                                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Enter Your Email Address" />
                                </div>
                                <div>
                                    <button type="submit" class="btn mb-2 border border-bottm">SUBSCRIBE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='border border-bottom mt-5'></div>
                <div className='mt-2 pb-3' style={{ marginLeft: '40px' }}>
                    <span>2023 furino. All rights reverved</span>
                </div>
                {/* footer end */}
            </div>
        </>
    )
}

export default Productcomparison
