import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>Kitechen</h2>
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

export default Kitchen