import React from 'react'
import './Home.css'
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { GrLinkNext } from 'react-icons/gr';

function Home() {
    const ProductCard = ({ imgSrc, name, description, price }) => (
        <div className='product_card_main'>
            <img src={imgSrc} alt={name} />
            <div className="p-3" style={{ backgroundColor: '#6c757d14' }}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <h5 className="card-title">{price}</h5>
                <NavLink to='/Cartsidebar' className='shop_btn'>Add to cart <GrLinkNext /></NavLink>
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
            id: 5,
            imgSrc: 'img/Home/Product/product-5.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
        {
            id: 6,
            imgSrc: 'img/Home/Product/product-6.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
        {
            id: 7,
            imgSrc: 'img/Home/Product/product-7.png',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000'
        },
        {
            id: 8,
            imgSrc: 'img/Home/Product/product-8.png',
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
                {/* Banner Start */}
                <div className='banner_img'>
                    <div>
                        <div className='banner_text'>
                            <div className='p-5'>
                                <p><b>New Arrival</b></p>
                                <h1 className='text-warning'><b>Discover Our<br />New Collection</b></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                <button className='banner_btn mt-4'>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Browse The Range Start */}
                <div className='mt-5'>
                    <div className='text-center'>
                        <h2><b>Browse The Range</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='d-flex text-center justify-content-between p-4'>
                        <div>
                            <img src="img/Home/Dining.png" alt="" />
                            <p className='mt-3'><b>Dining</b></p>
                        </div>
                        <div>
                            <img src="img/Home/Living.png" alt="" />
                            <p className='mt-3'><b>Living</b></p>
                        </div>
                        <div>
                            <img src="img/Home/Bedroom.png" alt="" />
                            <p className='mt-3'><b>Bedroom</b></p>
                        </div>
                    </div>
                </div>
                {/* Browse The Range End */}
                {/* Our Products Start */}
                <div>
                    <div className='text-center'>
                        <h2><b>Our Products</b></h2>
                    </div>
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
                    <div className='text-center'>
                        <button className='our_product_btn'>Show More</button>
                    </div>
                </div>
                {/* Our Products End */}
                {/* 50+ Beautiful rooms inspiration  start*/}
                <div className='inspriration_mein d-flex mt-5 '>
                    <div>
                        <h2><b>50+ Beautiful rooms<br />
                            inspiration</b></h2>
                        <p>Our designer already made a lot of beautiful<br /> prototipe of rooms that inspire you</p>
                        <button className='product_btn'>Explore More</button>
                    </div>
                    <div>
                        <img src="img/Home/roomimg/room-1.png" alt="" />
                        <img src="img/Home/roomimg/room-2.png" alt="" />
                    </div>
                </div>
                {/* 50+ Beautiful rooms inspiration  end*/}
                {/* Share your setup with Start */}
                <div>
                    <div className='text-center'>
                        <p>Share your setup with</p>
                        <h2><b>#FuniroFurniture</b></h2>
                    </div>
                    <div>
                        <img src="img/FuniroFurniture.png" alt="" width={'100%'} />
                    </div>
                </div>
                <div className='border border-bottom mt-5'></div>
                {/* Share your setup with End */}
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

export default Home
