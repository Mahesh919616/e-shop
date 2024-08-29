import React from 'react'
import { acData } from '../data/ac'

const AC = () => {

    const firstFiveImages = acData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>ACs</h2>
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

export default AC