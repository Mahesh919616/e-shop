import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const KitchenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (el)=>{
        if(selectedProduct.includes(el)){
            setSelectedProduct(selectedProduct.filter(item => item !== el))
        } else {
            setSelectedProduct([...selectedProduct, el])
        }
    }
    const filterProduct = selectedProduct.length === 0 ? 
    kitchenData :
    kitchenData.filter((element) => selectedProduct.includes(element.brand))

    const key = 'brand';
    const uniqueCompData = [...new Map(kitchenData.map(item => [item[key], item])).values()]
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {
                        uniqueCompData.map((kitchen)=>
                            <div key={kitchen.id} className='pro-input'>
                                <label>
                                    <input type="checkbox" 
                                        checked = {selectedProduct.includes(kitchen.brand)}
                                        onChange={()=>companyHandler(kitchen.brand)}
                                    />
                                    {kitchen.brand}
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
                                    <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage