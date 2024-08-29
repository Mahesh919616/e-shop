import React from 'react'
import { watchData } from '../data/watch'

const Watch = () => {
    const firstFiveImages = watchData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>Watches</h2>
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

export default Watch