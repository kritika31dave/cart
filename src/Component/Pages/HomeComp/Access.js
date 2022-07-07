import React from 'react'
import './Product.css'
import padd13 from './Image/padd13.jpg'
import padd2 from "./Image/padd2.jpg"
import padd3 from './Image/padd3.jpg'
import padd4 from './Image/padd4.jpg'
import padd5 from './Image/padd5.jpg'
import padd6 from './Image/padd6.jpg'
import nose from './Image/nose.jpg'
import padd8 from './Image/padd8.jpg'
import sent1 from './Image/sent1.jpg'
import sent2 from './Image/sent2.jpg'
import sent3 from './Image/sent3.jpg'
import sent4 from './Image/sent4.jpg'
import { FaRegHeart,FaRegEye } from 'react-icons/fa';
const productArray=[
    {
        img:padd13,
        code:"IMK037",
        price:65.00,
        desc:"4 pcs hairband for girls",
        amnt:"Seamless bra tube top free size"
    },
    {
        img:padd2,
        code:"IMK036",
        price:79.00,
        desc:"4 in 1 push up bra set",
        amnt:"-"
    },{
        img:padd3,
        code:"IMK035",
        price:49.00,
        desc:"2 in 1 girl padded bra set",
        amnt:"-"
    },{
        img:padd4,
        code:"IMK032",
        price:79.00,
        desc:"4pcs sexy deep U wireless push",
        amnt:"UP Bra"
    }
    ,{
        img:padd5,
        code:"IMK030",
        price:81.00,
        desc:"4pcs sexy translucent padded",
        amnt:"Lace Vest"
    },{
        img:padd6,
        code:"IMK027",
        price:49.00,
        desc:"short sleeve cartoon print",
        amnt:"comfy nightware"
    },{
        img:nose,
        code:"IMK017",
        price:69.00,
        desc:"beauty enhancer and cleaner",
        amnt:"Softwear for women"
    },{
        img:padd8,
        code:"IMK016",
        price:78.00,
        desc:"4 pcs women casual shorts",
        amnt:"Comfy shorts"
    },{
        img:sent1,
        code:"IMK028",
        price:69.00,
        desc:"Tender shine Women 100ml ",
        amnt:"-"
    },{
        img:sent2,
        code:"IMK027",
        price:49.00,
        desc:"Shine crystal for women 100ml ",
        amnt:""
    },{
        img:sent3,
        code:"IMK026",
        price:56.00,
        desc:"sexy girl lomani 100ml  ",
        amnt:""
    },{
        img:sent4,
        code:"IMK025",
        price:42.00,
        desc:"Royal flower for women ",
        amnt:""
    }

]
const Access = () => {
  return (
    <>
        <div className='divsecThird'>
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

export default Access