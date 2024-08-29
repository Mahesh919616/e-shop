import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const AcPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (el)=>{
        if(selectedProduct.includes(el)){
            setSelectedProduct(selectedProduct.filter(item => item !== el))
        } else {
            setSelectedProduct([...selectedProduct, el])
        }
    }
    const filterProduct = selectedProduct.length === 0 ? 
    acData :
    acData.filter((element) => selectedProduct.includes(element.company))
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {
                        acData.map((ac)=>
                            <div key={ac.id} className='pro-input'>
                                <label>
                                    <input type="checkbox" 
                                        checked = {selectedProduct.includes(ac.company)}
                                        onChange={()=>companyHandler(ac.company)}
                                    />
                                    {ac.company}
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
                                    <Link to={`/ac/${item.id}`}>
                                        <img src={item.image} alt="" />
                                    </Link>
                                </div>
                                <div className="proModel">
                                    {item.company}, {item.model}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default AcPage