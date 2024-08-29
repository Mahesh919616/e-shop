import React, {useState} from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (el)=>{
        if(selectedProduct.includes(el)){
            setSelectedProduct(selectedProduct.filter(item => item !== el))
        } else {
            setSelectedProduct([...selectedProduct, el])
        }
    }
    const filterProduct = selectedProduct.length === 0 ? 
    mobileData :
    mobileData.filter((element) => selectedProduct.includes(element.company))

    const key = 'company';
    const uniqueMobileData = [...new Map(mobileData.map(item => [item[key], item])).values()]
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {
                        uniqueMobileData.map((phone)=>
                            <div key={phone.id} className='pro-input'>
                                <label>
                                    <input type="checkbox" 
                                        checked = {selectedProduct.includes(phone.company)}
                                        onChange={()=>companyHandler(phone.company)}
                                    />
                                    {phone.company}
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
                                    <Link to={`/mobile/${item.id}`}>
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

export default MobilePage