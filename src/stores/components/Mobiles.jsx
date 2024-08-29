import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0, 5)
    return (
        <>
            <h2 className='categoryHeading'>Mobiles</h2>
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

export default Mobiles