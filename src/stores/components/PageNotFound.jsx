import React from 'react'
import Navbar from './Navbar'
import { BiSolidErrorAlt } from "react-icons/bi";

const PageNotFound = () => {
  return (
    <>
        <Navbar />
        <div className='cart-page'>
            <div>
                <BiSolidErrorAlt className='error-img' />
                <p className='cart-text'>404 Page Not Found or Invalid URL</p>
            </div>
        </div>
    </>
  )
}

export default PageNotFound