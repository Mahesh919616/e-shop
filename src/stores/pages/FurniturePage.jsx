import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const FurniturePage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (el)=>{
        if(selectedProduct.includes(el)){
            setSelectedProduct(selectedProduct.filter(item => item !== el))
        } else {
            setSelectedProduct([...selectedProduct, el])
        }
    }
    const filterProduct = selectedProduct.length === 0 ? 
    furnitureData :
    furnitureData.filter((element) => selectedProduct.includes(element.brand))

    const key = 'brand';
    const uniqueCompData = [...new Map(furnitureData.map(item => [item[key], item])).values()]
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {
                        uniqueCompData.map((furniture)=>
                            <div key={furniture.id} className='pro-input'>
                                <label>
                                    <input type="checkbox" 
                                        checked = {selectedProduct.includes(furniture.brand)}
                                        onChange={()=>companyHandler(furniture.brand)}
                                    />
                                    {furniture.brand}
                                </label>
                            </div>
                        )
                    }
                </div>
                <div className='pageSection'>
                    {
                        filterProduct.map((item) =>
                            <div key={item.id}>
                                <div className="pageImg">
                                    <Link to={`/furniture/${item.id}`}>
                                        <img src={item.image} alt="" />
                                    </Link>
                                </div>
                                <div className="proModel">
                                    {item.brand}, {item.model}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default FurniturePage