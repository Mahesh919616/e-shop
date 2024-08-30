import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { SiShopee } from "react-icons/si";
import { toast } from 'react-toastify';
import { RxPerson } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.value);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const login = () => {
        toast.info(`This page is under construction`, {position: 'bottom-right'})
    }
    return (
        <>
            <div className="navbar-section">
                <div className="navSection">
                    <NavLink to='/e-shop' className="custom-link">
                        <div className="title">
                            <SiShopee className='shop-icon'/><h2>e-SHOP</h2>
                        </div>
                        <p className='tag-name'>on your finger tips</p>
                    </NavLink>
                    {/* <div className="search">
                        <input type="text" placeholder='Search...' />
                    </div> */}
                    <div className="user">
                        <div className="user-details" onClick={() => login()}>Login / Sign Up </div>                        
                            <Link to='/cart' className="custom-link">
                                <div className='cart-section'>
                                    <div className="cart">Cart</div>
                                    <div className='cart-count'>
                                        <BsCart4 />
                                        <p className='count'>{cartCount}</p>
                                    </div>
                                </div>
                            </Link>
                    </div>
                </div>
                <div className="subMenu-mobile-view">
                    <ul>
                        <NavLink to='/mobiles' className="custom-link">
                            <li>Mobiles</li>
                        </NavLink>
                        <NavLink to='/computers' className="custom-link">
                            <li>Computers</li>
                        </NavLink>
                        <NavLink to='/watches' className="custom-link">
                            <li>Watches</li>
                        </NavLink>
                        <NavLink to='/men' className="custom-link">
                            <li>Men</li>
                        </NavLink>
                        <NavLink to='/women' className="custom-link">
                            <li>Women</li>
                        </NavLink>
                        <NavLink to='/acs' className="custom-link">
                            <li>AC</li>
                        </NavLink>
                        <NavLink to='/furnitures' className="custom-link">
                            <li>Furniture</li>
                        </NavLink>
                        <NavLink to='/kitchen' className="custom-link">
                            <li>Kitchen</li>
                        </NavLink>
                    </ul>
                </div>
                <style>{`
                    @media screen and (min-width: 741px) {
                        .subMenu-mobile-view ul{
                            display: none;
                        }
                    }
                    @media screen and (max-width: 741px) {
                        .subMenu-mobile-view ul{
                            display: ${ hamburgerOpen ? 'inline' : 'none' };
                            background-color: #0c1e42;
                            height: 161vh;
                            width: 24vw;
                            margin-top: 80px;
                            position: absolute;
                            padding-left: 20px;
                            padding-top: 20px;
                            list-style: none;
                        }
                        .subMenu-mobile-view ul li{
                            padding: 10px 0px;
                        }
                        .subMenu-mobile-view ul li:hover{
                            color: orangered;
                        }
                    }
                `}      
                </style>
                <div className="hamburger-icon-section">
                    <GiHamburgerMenu className='hamburger-icon'onClick={() => toggleHamburgerMenu()} />
                </div>
                <div className="navSection-mobile-view">
                    <NavLink to='/e-shop' className="custom-link">
                        <div className="title">
                            <SiShopee className='shop-icon'/>
                        </div>
                    </NavLink>
                    {/* <div className="search">
                        <input type="text" placeholder='Search...' />
                    </div> */}
                    <div className="user">
                        <RxPerson onClick={() => login()} className='login-icon' title='Login'/>                        
                            <Link to='/cart' className="custom-link">
                                <div className='cart-section'>
                                    <div className='cart-count'>
                                        <BsCart4 title='Cart' />
                                        <p className='count'>{cartCount}</p>
                                    </div>
                                </div>
                            </Link>
                    </div>
                </div>
                <div className="subMenu">
                    <ul>
                        <NavLink to='/mobiles' className="custom-link">
                            <li>Mobiles</li>
                        </NavLink>
                        <NavLink to='/computers' className="custom-link">
                            <li>Computers</li>
                        </NavLink>
                        <NavLink to='/watches' className="custom-link">
                            <li>Watches</li>
                        </NavLink>
                        <NavLink to='/men' className="custom-link">
                            <li>Men</li>
                        </NavLink>
                        <NavLink to='/women' className="custom-link">
                            <li>Women</li>
                        </NavLink>
                        <NavLink to='/acs' className="custom-link">
                            <li>AC</li>
                        </NavLink>
                        <NavLink to='/furnitures' className="custom-link">
                            <li>Furniture</li>
                        </NavLink>
                        <NavLink to='/kitchen' className="custom-link">
                            <li>Kitchen</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar