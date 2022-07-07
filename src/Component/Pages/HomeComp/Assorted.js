import React from 'react'
import './Product.css'
import sent5 from './Image/sent5.jpeg'
import sent6 from "./Image/sent6.jpg"
import { FaRegHeart,FaRegEye } from 'react-icons/fa';
const productArray=[
    {
        img:sent5,
        code:"IMK037",
        price:65.00,
        desc:"Shine crystal for women 100ml",
        amnt:"Seamless bra tube top free size"
    },
    {
        img:sent6,
        code:"IMK036",
        price:79.00,
        desc:"Shine crystal for women 100ml",
        amnt:"-"
    }
]
const Assorted = () => {
  return (
    <>
        <div className='divsecFourth'>
    {
        productArray.map((item)=>
                <div className='itemPro'>
                    <button className='buttPro'><img src={item.img}/> </button>
                      <div className='itemDesc'>
                       <p>{item.desc}</p> 
                       <h3>{item.code}</h3>
                       <h3>QAR {item.price}</h3>
                       <div className='option'>
                        <button>Select Option</button>
                        <button><FaRegHeart/></button>
                        <button><FaRegEye/></button>
                       </div>
                     </div>
                </div>
            
        )
    }
    </div>
    </>
  )
}

export default Assorted