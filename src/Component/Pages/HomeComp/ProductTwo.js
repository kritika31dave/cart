import React from 'react'

import './Product.css'
import padd from './Image/padd.jpg'
import padd2 from "./Image/padd2.jpg"
import padd3 from './Image/padd3.jpg'
import padd4 from './Image/padd4.jpg'
import padd13 from "./Image/padd13.jpg"
import padd14 from './Image/padd14.jpg'
import padd15 from './Image/padd15.jpg'
import padd16 from './Image/padd16.jpg'
import padd7 from './Image/padd7.jpg'
import padd8 from './Image/padd8.jpg'
import padd9 from './Image/padd9.jpg'
import padd10 from './Image/padd10.jpg'
import padd17 from './Image/padd17.jpg'
import padd12 from './Image/padd12.jpg'
import { FaRegHeart,FaRegEye } from 'react-icons/fa';
const productArray=[
    {
        img:padd,
        code:"IMK037",
        price:65.00,
        desc:"4 in 1 girl and women vest",
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
        img:padd13,
        code:"IMK032",
        price:79.00,
        desc:"3 in one set hair band",
        amnt:"UP Bra"
    }
    ,{
        img:padd4,
        code:"IMK030",
        price:81.00,
        desc:"4pcs sexy translucent padded",
        amnt:"Lace Vest"
    },{
        img:padd14,
        code:"IMK027",
        price:49.00,
        desc:"3 in one micotowels",
        amnt:"comfy nightware"
    },{
        img:padd7,
        code:"IMK017",
        price:69.00,
        desc:"Fashion High Quality women 5pcs panties",
        amnt:"Softwear for women"
    },{
        img:padd16,
        code:"IMK016",
        price:78.00,
        desc:"4 pcs women casual Tshirts",
        amnt:"Comfy shorts"
    },{
        img:padd15,
        code:"IMK028",
        price:69.00,
        desc:"2 in 1 set strapless bra silicone ",
        amnt:"-"
    },{
        img:padd10,
        code:"IMK027",
        price:49.00,
        desc:"5pcs women sandos ",
        amnt:""
    },{
        img:padd17,
        code:"IMK026",
        price:56.00,
        desc:" 18pcs stainless steel nail pedicure",
        amnt:""
    },{
        img:padd12,
        code:"IMK025",
        price:42.00,
        desc:"2pcs sexy women floral bra ",
        amnt:""
    }

]
const PartTwo = () => {
  return (
    <>
        
        <div className='divsec'>
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

export default PartTwo