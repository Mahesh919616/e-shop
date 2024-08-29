import React, { useEffect } from 'react'
import { BsCart4 } from "react-icons/bs";
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, increaseCart, clearCart, getCartTotalAmount } from '../store/cartSlice';
import { toast } from 'react-toastify'

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCartTotalAmount());
        // eslint-disable-next-line
    }, [cart.cartItems])

    const handleRemoveFromCart = (el) => {
        dispatch(removeFromCart(el))
    }
    const checkout = () => {
        toast.info(`This page is under construction`, {position: 'bottom-right'})
    }
    return (
        <>
            <Navbar />
            {cartItems.length === 0 ? 
                <div className='cart-page'>
                    <div>
                        <BsCart4 className='cart-img'/>
                        <p className='cart-text'>Your Cart is Empty</p>
                    </div>
                </div> :
                <div className='cart-container'>
                    <h2>Shopping Cart</h2>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {
                            cartItems?.map((item, index) => 
                                <div className="cart-item" key={index}>
                                    <div className="cart-product">
                                        <img src={item.image} alt="" />
                                        <div>
                                            <h3>{item.product}</h3>
                                            <h5>{item.model}</h5>
                                            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        {item.price}
                                    </div>
                                    <div className="cart-quantity">
                                        <button onClick={() => dispatch(decreaseCart(item))}>-</button>
                                        <div className='cart-count'>{item.cartQuantity}</div>
                                        <button onClick={() => dispatch(increaseCart(item))}>+</button>
                                    </div>
                                    <div className="cart-total">
                                        {item.price * item.cartQuantity}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="cart-summary">
                        <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear</button>
                        <div className="cart-check-out">
                            <div className="sub-total">
                                <span className="sub-total">Subtotal</span>
                                <span className="amount">{cart.cartTotalAmount.total}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <button className="checkout" onClick={() => checkout()}>Checkout</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CartPage