import React from 'react'
import { womenData } from '../data/women'

const Women = () => {
    const firstFiveImages = womenData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>Women</h2>
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

export default Women