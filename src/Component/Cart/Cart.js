import React from 'react'
import { FaRegUser, FaShippingFast } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { MdDelete, MdNavigateNext, MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import './Cart.css'
import { RiCustomerService2Line } from 'react-icons/ri'
import { IoMdCloudDone } from 'react-icons/io'
import { GiTrophyCup } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
function Cart() {
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
                        <span><b>Home</b> <MdNavigateNext /> Cart</span>
                    </div>
                </div>
                {/* shop banner end */}
                {/* Product Chakout Start */}
                <div className='d-flex p-5 m-auto checkbox_mein'>
                    <div className='w-50'>
                        <div className='d-flex gap-5 product_data'>
                            <p><b>Product</b></p>
                            <p><b>Price</b></p>
                            <p><b>Quantity</b></p>
                            <p><b>Subtotal</b></p>
                        </div>
                        <div className='d-flex mt-5'>
                            <div>
                                <img src="img/Cart/cart-1.png" alt="" />
                            </div>
                            <div className='d-flex align-items-center gap-5 m-3'>
                                <p>Asgaard sofa</p>
                                <p>Rs. 250,000.00</p>
                                <p className='product_no'>1</p>
                                <p>Rs. 250,000.00</p>
                                <h5><MdDelete /></h5>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='cart_totals'>
                            <div>
                                <h3 className='text-center'><b >Cart Totals</b></h3>
                                <div className='mt-5'>
                                    <div className='d-flex gap-5'>
                                        <b>Subtotal</b>
                                        <p>Rs. 250,000.00</p>
                                    </div>
                                    <div className='d-flex gap-5'>
                                        <b>Total</b>
                                        <b style={{ color: '#B88E2F' }}>Rs. 250,000.00</b>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <NavLink to="/Checkout">
                                            <button className='btn btn-outline-dark' style={{ width: '222px', height: '58.95px', borderRadius: '15px' }}><b>Check Out</b></button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Chakout End */}
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

export default Cart
