import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {

    const firstFiveImages = computerData.slice(0, 5)    
    return (
        <>
            <h2 className='categoryHeading'>Computers</h2>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) =>
                        <div className='imgBox' key={item.id}>
                            <img className='proImage' src={item.image} alt="" />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Computers