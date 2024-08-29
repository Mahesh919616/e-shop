import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { SiShopee } from "react-icons/si";
import { toast } from 'react-toastify';

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.value);

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