import React from 'react'
import './Blog.css'
import { FaRegUser, FaSearch, FaShippingFast } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { MdNavigateNext, MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri'
import { IoMdCloudDone } from 'react-icons/io'
import { GiTrophyCup } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';

function Blog() {
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
                        <h1><b>Blog</b></h1>
                        <span><b>Home</b> <MdNavigateNext /> Blog</span>
                    </div>
                </div>
                {/* shop banner end */}
                {/* Blog Post Start */}
                <div className='d-flex justify-content-center'>
                    <div className='w-50 p-5'>
                        <div>
                            <img src="img/Blog/blog_post-1.png" alt="" />
                        </div>
                        <div className='mt-4'>
                            <h4><b>Going all-in with millennial design</b></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <a href='/' className='blog_btn'>Read More</a>
                        </div>
                        <div className='mt-5'>
                            <img src="img/Blog/blog_post-2.png" alt="" />
                        </div>
                        <div className='mt-4'>
                            <h4><b>Exploring new ways of decorating</b></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <a href='/' className='blog_btn'>Read More</a>
                        </div>
                        <div className='mt-5'>
                            <img src="img/Blog/blog_post-3.png" alt="" />
                        </div>
                        <div className='mt-4'>
                            <h4><b>Handmade pieces that took time to make</b></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <a href='/' className='blog_btn'>Read More</a>
                        </div>
                    </div>
                    <div>
                        <div className='blog_data_menu'>
                            <div className='border border-outline-dark p-2 rounded-3'>
                                <FaSearch />
                            </div>
                            <div className='text-secondary-2 mt-4'>
                                <h4 className='text-dark'><b>Categories</b></h4>
                                <div className='d-flex justify-content-between'>
                                    <p>Crafts</p>
                                    <p>2</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Design</p>
                                    <p>8</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Handmade</p>
                                    <p>7</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Interior</p>
                                    <p>1</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Wood</p>
                                    <p>6</p>
                                </div>
                            </div>
                        </div>
                        <div className='blog_data_menu'>
                            <div className='border-outline-dark'>
                            </div>
                            <div className='d-grid gap-3'>
                                <h4 className='text-dark'><b>Recent Posts</b></h4>
                                <div className='d-flex gap-4'>
                                    <img src="img/Blog/recentposts-1.png" alt="" width={80} height={80} />
                                    <div>
                                        <p>Going all-in with millennial design</p>
                                        <p className='text-secondary'>03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <img src="img/Blog/recentposts-2.png" alt="" width={80} height={80} />
                                    <div>
                                        <p>Exploring new ways of decorating</p>
                                        <p className='text-secondary'>03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <img src="img/Blog/recentposts-3.png" alt="" width={80} height={80} />
                                    <div>
                                        <p>Handmade pieces that took time to make</p>
                                        <p className='text-secondary'>03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <img src="img/Blog/recentposts-4.png" alt="" width={80} height={80} />
                                    <div>
                                        <p>Modern home in Milan</p>
                                        <p className='text-secondary'>03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <img src="img/Blog/recentposts-5.png" alt="" width={80} height={80} />
                                    <div>
                                        <p>Colorful office redesign</p>
                                        <p className='text-secondary'>03 Aug 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Blog Post End */}
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

export default Blog
