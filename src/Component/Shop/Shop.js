import React from 'react'
import './Shop.css'
import { FaRegUser, FaShippingFast } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdNavigateNext, MdOutlineFavoriteBorder } from 'react-icons/md';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";
import { GiTrophyCup } from 'react-icons/gi';
import { IoMdCloudDone } from 'react-icons/io';
import { RiCustomerService2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { GrLinkNext } from 'react-icons/gr';

function Shop() {
    const ProductCard = ({ imgSrc, name, description, price }) => (
        <div className='product_card_main'>
            <img src={imgSrc} alt={name} />
            <div className="p-3" style={{ backgroundColor: '#6c757d14' }}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h5 className="card-title">{price}</h5>
                <NavLink to='/Cartsidebar' className=' shop_btn'>Add to cart <GrLinkNext /></NavLink>
            </div>
        </div>
    );

    const products = [
        {
            id: 1,
            imgSrc: 'img/Home/Product/product-1.png',
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000'
        },
        {
            id: 2,
            imgSrc: 'img/Home/Product/product-2.png',
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000'
        },
        {
            id: 3,
            imgSrc: 'img/Home/Product/product-3.png',
            name: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rp 7.000.000'
        },
        {
            id: 4,
            imgSrc: 'img/Home/Product/product-4.png',
            name: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rp 7.000.000'
        },
        {
            id: 4,
            imgSrc: 'img/Home/Product/product-4.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
        {
            id: 5,
            imgSrc: 'img/Home/Product/product-4.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
        {
            id: 6,
            imgSrc: 'img/Home/Product/product-4.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
        {
            id: 6,
            imgSrc: 'img/Home/Product/product-4.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
    ];

    return (
        <>
            <div>
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
                {/* shop banner start */}
                <div className='shop_banner'>
                    <div>
                        <h1><b>Shop</b></h1>
                        <span>Home <MdNavigateNext /> Shop</span>
                    </div>
                </div>
                {/* shop banner end */}
                {/* filter start */}
                <div className='d-flex filter_mein p-3'>
                    <div className='d-flex gap-5 align-items-center'>
                        <div className='d-flex align-items-center'>
                            <FaFilter />
                            <b>Filter</b>
                        </div>
                        <div><img src="img/Shop/icon1.png" alt="" /></div>
                        <div><img src="img/Shop/icon2.png" alt="" /></div>
                        <div>Showing 1–16 of 32 results</div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className=' d-flex align-items-center gap-3'>
                            <div>Show</div>
                            <div className='bg-light p-3'>16</div>
                        </div>
                        <div className=' d-flex align-items-center gap-3 '>
                            <div>Short by</div>
                            <div className='bg-light p-3'>Default</div>
                        </div>
                    </div>
                </div>
                {/* filter end */}
                {/* product card start */}
                <div className="p-5 flex-wrap d-flex justify-content-around product_card">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            imgSrc={product.imgSrc}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
                {/* product card end */}
                {/* pagination start */}
                <div className='d-flex gap-4 justify-content-center'>
                    <span className='pagination-btn p-3'>1</span>
                    <span className='pagination-btn-2 p-3'>2</span>
                    <span className='pagination-btn-2 p-3'>3</span>
                    <span className='pagination-btn-2 p-3'>Next</span>
                </div>
                {/* pagination end */}
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

export default Shop