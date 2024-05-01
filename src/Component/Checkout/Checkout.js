import React from 'react'
import './Checkout.css'
import { FaCircle, FaRegCircle, FaRegUser, FaShippingFast } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { MdNavigateNext, MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri'
import { IoMdCloudDone } from 'react-icons/io'
import { GiTrophyCup } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';

function Checkout() {
    return (
        <>
            <div>
                {/* Navbar  Start */}
                <div className='p-3'>
                    <nav className='d-flex justify-content-between mt-2'>
                        <div>
                            <img src="img/Shop/logo.png" alt="" />
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
                {/* Navbar  End */}
                {/* shop banner start */}
                <div className='shop_banner text-center'>
                    <div className='d-grid justify-content-center'>
                        <img src="img/Single Product/logo.png" alt="" className='m-auto' />
                        <h1><b>Checkout</b></h1>
                        <span><b>Home</b> <MdNavigateNext /> Checkout</span>
                    </div>
                </div>
                {/* shop banner end */}
                {/* Billing details Start */}
                <div className='d-flex mt-5 justify-content-center gap-5'>
                    <div>
                        <h4><b>Billing details</b></h4>
                        <form className='mt-5'>
                            <div className='d-flex justify-content-between'>
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" id="email" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Last Name</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                            </div>
                            <div className='d-grid gap-3'>
                                <div class="form-group">
                                    <label>Company Name (Optional)</label>
                                    <input type="text" class="form-control" id="email" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Country / Region</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Street address</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Town / City</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Province</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label for="text">ZIP code</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Phone</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label for="text">Email address</label>
                                    <input type="text" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    {/* <label for="text">Province</label> */}
                                    <input type="text" class="form-control" id="pwd" placeholder='Additional information' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-25 p-5'>
                        <div className='d-flex justify-content-between'>
                            <h5><b>Product</b></h5>
                            <h5><b>Subtotal</b></h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Asgaard sofa <b>x 1</b></p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Total</p>
                            <h5><b>Rs. 250,000.00</b></h5>
                        </div>
                        <div className='border mb-2'></div>
                        <div>
                            <p><FaCircle /> &nbsp; Direct Bank Transfer</p>
                            <p className='text-secondary'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className='text-secondary'>
                                <p><FaRegCircle /> &nbsp; Direct Bank Transfer</p>
                                <p><FaRegCircle />&nbsp; Cash On Delivery</p>
                            </div>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b> privacy policy.</b></p>
                            <div className='text-center mt-5'>
                                <button className='btn btn-outline-dark' style={{ width: '222px', height: '58.95px', borderRadius: '15px' }}><b>Place order</b></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Billing details End */}
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

export default Checkout
