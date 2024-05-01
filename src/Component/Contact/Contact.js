import React from 'react'
import './Contact.css'
import { RiCustomerService2Line } from 'react-icons/ri'
import { FaMapMarkerAlt, FaPhoneAlt, FaRegUser, FaShippingFast } from 'react-icons/fa'
import { IoIosTime, IoMdCloudDone } from 'react-icons/io'
import { GiTrophyCup } from 'react-icons/gi'
import { IoSearch } from 'react-icons/io5'
import { MdNavigateNext, MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
function Contact() {
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
                        <h1><b>Contact</b></h1>
                        <span><b>Home</b> <MdNavigateNext /> Contact</span>
                    </div>
                </div>
                {/* shop banner end */}
                {/* Contact Form start */}
                <div>
                    <div className='touch_data'>
                        <h3><b>Get In Touch With Us</b></h3>
                        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    </div>
                    <div className='d-flex p-5 justify-content-center mt-5' style={{ gap: '8rem' }}>
                        <div className=' gap-5'>
                            <div className='d-flex gap-3'>
                                <div>
                                    <h4><FaMapMarkerAlt /></h4>
                                </div>
                                <div>
                                    <p><b>Address</b></p>
                                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-5'>
                                <div>
                                    <h4><FaPhoneAlt /></h4>
                                </div>
                                <div>
                                    <p><b>Phone</b></p>
                                    <p>Mobile: +(84) 546-6789<br />
                                        Hotline: +(84) 456-6789</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-5'>
                                <div>
                                    <h4><IoIosTime /></h4>
                                </div>
                                <div>
                                    <p><b>Working Time</b></p>
                                    <p>Monday-Friday: 9:00 - 22:00
                                        Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className='form d-grid gap-4'>
                                <div className='form-group'>
                                    <b>Your Name</b>
                                    <input type="text" placeholder='Abc' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <b> Email Address</b>
                                    <input type="email" placeholder='abc@gmail.com' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <b>Subject</b>
                                    <input type="text" placeholder='This is an optional' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <b>Message</b>
                                    <textarea cols="30" rows="2" placeholder='Hi! i’d like to ask about' className='form-control'></textarea>
                                </div>
                                <div>
                                    <button className='contact_btn'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Contact Form end */}
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

export default Contact
