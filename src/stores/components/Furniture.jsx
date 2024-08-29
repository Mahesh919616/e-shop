import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>Furnitures</h2>
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

export default Furniture