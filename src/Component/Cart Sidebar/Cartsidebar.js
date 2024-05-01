import React, { useState } from 'react'
import './Cartsidebar.css'
import { FaFacebook, FaLinkedin, FaRegUser, FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdNavigateNext, MdOutlineFavoriteBorder } from 'react-icons/md';
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineShopping } from 'react-icons/ai';
import { IoMdCloseCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function Cartsidebar() {
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        setShowModal(true);
        // Additional logic for adding item to cart can go here
    };
    return (
        <>
            <div>
                {/* nav start */}
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
                {/* nav end */}
                {/* filter start */}
                <div className='filter_mein p-3'>
                    <div>
                        <div className='d-flex align-items-center gap-4'>
                            <p>Home <MdNavigateNext /></p>
                            <p>Shop<MdNavigateNext /></p>
                            <p>|</p>
                            <p><b>Asgaard sofa</b></p>
                        </div>
                    </div>
                </div>
                {/* filter end */}
                {/* Product Details Start */}
                <div className='d-flex p-5' style={{ justifyContent: 'center', marginRight: '200px' }}>
                    <div className='d-flex p-3'>
                        <div className='d-grid '>
                            <img src='img/addtocard/sofa-1.png'></img>
                            <img src='img/addtocard/sofa-2.png'></img>
                            <img src='img/addtocard/sofa-3.png'></img>
                            <img src='img/addtocard/sofa-4.png'></img>
                        </div>
                        <div>
                            <img src='img/addtocard/sofa.png'></img>
                        </div>
                    </div>
                    <div className=' p-5'>
                        <h1>Asgaard sofa</h1>
                        <h5>Rs. 250,000.00</h5>
                        <div>
                            <img src="img/addtocard/star.png" alt="" /> |
                            <span>  5 Customer Review</span>
                        </div>
                        <p>Setting the bar as one of the loudest speakers in its class, the<br />Kilburn is a compact, stout-hearted hero with a well-balanced<br /> audio which boasts a clear midrange and extended highs for a <br />sound.</p>
                        <p>Size</p>
                        <div className='d-flex gap-3'>
                            <p className='btn_color text-center align-content-center rounded-2' style={{ width: '30px', height: '30px' }}>L</p>
                            <p className='btn_color_2 text-center align-content-center rounded-2' style={{ width: '30px', height: '30px' }} >XL</p>
                            <p className='btn_color_2 text-center align-content-center rounded-2' style={{ width: '30px', height: '30px' }}>XXL</p>
                        </div>
                        <p>Color</p>
                        <div className='d-flex gap-3'>
                            <p className='product_color'></p>
                            <p className='product_color_2'></p>
                            <p className='product_color_3'></p>
                        </div>
                        <div className='d-flex gap-4 mt-3'>
                            <a href="#" class="btn btn-outline btn-lg active" role="button" aria-pressed="true">- 1 + </a>
                            <a href="#" class="text-dark" role="button" aria-pressed="true">
                                <button onClick={() => handleAddToCart()} className='btn btn-outline btn-lg active'>Add To Cart </button></a>
                            <a class="btn btn-outline btn-lg active " role="button" aria-pressed="true"><NavLink to="/Productcomparison" className='text-dark'>+
                                Compare</NavLink> </a>
                        </div>
                        <div className='border border-bottom-2 mt-5'></div>
                        <div className='mt-3'>
                            <div className='d-flex gap-2'>
                                <p>SKU :</p>
                                <p>SS001</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <p>Category : </p>
                                <p>Sofas</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <p>Tags : </p>
                                <p> Sofa, Chair, Home, Shop</p>
                            </div>
                            <div className='d-flex gap-2 align-content-center'>
                                <p>Share : </p>
                                <div className='d-flex gap-3'>
                                    <FaFacebook />
                                    <FaLinkedin />
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-bottom-2'></div>
                {/* Product Details End */}
                {/* Description start */}
                <div>
                    <div className='d-flex justify-content-center gap-5 mt-5 h4' >
                        <p><b>Description</b></p>
                        <p className='text-secondary'>Additional Information</p>
                        <p className='text-secondary'>Reviews [5]</p>
                    </div>
                    <div className='w-50 m-auto'>
                        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-5 justify-content-center mt-5'>
                        <img src="img/Single Product/sofa-1.png" alt="" />
                        <img src="img/Single Product/sofa-2.png" alt="" />
                    </div>
                </div>
                {/* Description ene */}
                {/* Related Products Start */}
                <div className='p-5'>
                    <div className='text-center'>
                        <h2><b>Related Products</b></h2>
                    </div>
                    <div className='d-flex justify-content-between mt-5'>
                        <div className='product_card_main'>
                            <div>
                                <img src="img/Home/Product/product-1.png" />
                            </div>
                            <div class="p-3" style={{ backgroundColor: '#6c757d14' }}>
                                <h5 class="card-title">Syltherine</h5>
                                <p class="card-text">Stylish cafe chair</p>
                                <h5 class="card-title">Rp 2.500.000</h5>
                            </div>
                        </div>
                        <div>
                            <img src="img/Home/Product/product-2.png" />
                            <div class="p-3" style={{ backgroundColor: '#6c757d14' }}>
                                <h5 class="card-title">Leviosa</h5>
                                <p class="card-text">Stylish cafe chair</p>
                                <h5 class="card-title">Rp 2.500.000</h5>
                            </div>
                        </div>
                        <div>
                            <img src="img/Home/Product/product-3.png" />
                            <div class="p-3" style={{ backgroundColor: '#6c757d14' }}>
                                <h5 class="card-title">Lolito</h5>
                                <p class="card-text">Luxury big sofa</p>
                                <h5 class="card-title">Rp 7.000.000</h5>
                            </div>
                        </div>
                        <div>
                            <img src="img/Home/Product/product-4.png" alt="" />
                            <div className='p-3' style={{ backgroundColor: '#6c757d14' }}>
                                <h5 class="card-title">Respira</h5>
                                <p class="card-text">Outdoor bar table and stool</p>
                                <h5 class="card-title">Rp 500.000</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='our_product_btn'>Show More</button>
                </div>
                {/* Related Products End */}
                <div className='border border-bottom mt-5'></div>
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
                {/* cart sidbar start */}
                {showModal && (
                    <div className='mt-5 w-25 model_mein'>
                        <div className='d-flex justify-content-between'>
                            <b>Shopping Cart</b>
                            <p><AiOutlineShopping className='h4' /></p>
                        </div>
                        <div className='border border-bottom-1'></div>
                        <div className='mt-5 gap-5 d-grid'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <img src="img/addtocard/Asgaard sofa.png" alt="" />
                                <div>
                                    <p><b>Asgaard sofa</b></p>
                                    <p>1  X   Rs. 250,000.00</p>
                                </div>
                                <IoMdCloseCircle className='h4' />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <img src="img/addtocard/Casaliving Wood.png" alt="" />
                                <div>
                                    <p><b>Casaliving Wood</b></p>
                                    <p>1  X  Rs. 270,000.00</p>
                                </div>
                                <IoMdCloseCircle className='h4' />
                            </div>
                            <div>
                                <div className='d-flex gap-5'>
                                    <h5>Subtotal</h5>
                                    <h5>Rs. 520,000.00</h5>
                                </div>
                                <div className='border border-bottom-1'></div>
                                <div className='d-flex gap-5 mt-3'>
                                    <button className='rounded-5 btn btn-outline-dark'>Cart</button>
                                    <button className='rounded-5 btn btn-outline-dark'>CheckOut</button>
                                    <button className='rounded-5 btn btn-outline-dark'>Comparison</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
                {/* cart sidbar end */}
            </div >
        </>
    )
}

export default Cartsidebar

