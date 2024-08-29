import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const MenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (el)=>{
        if(selectedProduct.includes(el)){
            setSelectedProduct(selectedProduct.filter(item => item !== el))
        } else {
            setSelectedProduct([...selectedProduct, el])
        }
    }
    const filterProduct = selectedProduct.length === 0 ? 
    menData :
    menData.filter((element) => selectedProduct.includes(element.brand))
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {
                        menData.map((men)=>
                            <div key={men.id} className='pro-input'>
                                <label>
                                    <input type="checkbox" 
                                        checked = {selectedProduct.includes(men.brand)}
                                        onChange={()=>companyHandler(men.brand)}
                                    />
                                    {men.brand}
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
                                    <Link to={`/men/${item.id}`}>
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

export default MenPage