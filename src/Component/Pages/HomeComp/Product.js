import React from 'react'
import './Product.css'
import padd from './Image/padd.jpg'
import padd2 from "./Image/padd2.jpg"
import padd3 from './Image/padd3.jpg'
import padd4 from './Image/padd4.jpg'
import padd5 from './Image/padd5.jpg'
import padd6 from './Image/padd6.jpg'
import padd7 from './Image/padd7.jpg'
import padd8 from './Image/padd8.jpg'
import padd9 from './Image/padd9.jpg'
import padd10 from './Image/padd10.jpg'
import padd11 from './Image/padd11.jpg'
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
        img:padd7,
        code:"IMK017",
        price:69.00,
        desc:"Fashion High Quality women 5pcs panties",
        amnt:"Softwear for women"
    },{
        img:padd8,
        code:"IMK016",
        price:78.00,
        desc:"4 pcs women casual shorts",
        amnt:"Comfy shorts"
    },{
        img:padd9,
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
        img:padd11,
        code:"IMK026",
        price:56.00,
        desc:" 2pcs sexy women floral bra ",
        amnt:""
    },{
        img:padd12,
        code:"IMK025",
        price:42.00,
        desc:"2pcs sexy women floral bra ",
        amnt:""
    }

]
const Product = () => {
  return (
    <>
    <h1>Lingere NightWare Collections</h1>
    <div className='div'>
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

export default Product