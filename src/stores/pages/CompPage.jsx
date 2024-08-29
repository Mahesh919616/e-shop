import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const CompPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (el)=>{
        if(selectedProduct.includes(el)){
            setSelectedProduct(selectedProduct.filter(item => item !== el))
        } else {
            setSelectedProduct([...selectedProduct, el])
        }
    }
    const filterProduct = selectedProduct.length === 0 ? 
    computerData :
    computerData.filter((element) => selectedProduct.includes(element.company))

    const key = 'company';
    const uniqueCompData = [...new Map(computerData.map(item => [item[key], item])).values()]
    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {
                        uniqueCompData.map((comp)=>
                            <div key={comp.id} className='pro-input'>
                                <label>
                                    <input type="checkbox" 
                                        checked = {selectedProduct.includes(comp.company)}
                                        onChange={()=>companyHandler(comp.company)}
                                    />
                                    {comp.company}
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
                                    <Link to={`/computer/${item.id}`}>
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

export default CompPage