import React from 'react'
import { kitchenData } from '../data/kitchen'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { add, addToCart } from '../store/cartSlice';

const KitchenSingle = () => {

    const dispatch = useDispatch();

    const {id} = useParams()
    const product = kitchenData.find((item) => item.id === id)

    const sendDispatch = () => {
        dispatch(add())
        dispatch(addToCart(product))
    }

    return (
        <>
            <Navbar />
            <div className='ind-section'>
                <div className="ind-image">
                    <img src={product.image} alt="" />
                </div>
                <div className="ind-details space">
                    <div className="ind-company">
                        <h2>{product.company}</h2>
                    </div>
                    <div className="ind-model space">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="ind-price space">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="ind-desc space">
                        <p>{product.description}</p>
                    </div>
                    <button onClick={() => sendDispatch()}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default KitchenSingle