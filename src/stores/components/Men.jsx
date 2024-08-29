import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const firstFiveImages = menData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>Men</h2>
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

export default Men