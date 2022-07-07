import React from 'react'
import exclu from './exclusive.png'
import big from './big.png'
import beyon from "./beyon.png"
import './Home.css'
const PartOne = () => {
  return (
    <div className='main'>
      <div className='shop'>
        <div className='girl'></div>
        <div className='item'>
          <div className='beyon'><img src={beyon} alt="image"></img></div>
          <div className='user'>
             <h3>Amazing Discounts</h3>
             <p>For all new email subscriber</p>
            <input placeholder='Your email adderess'/><button className="butt">subscribe</button>
          </div>
        </div>
      </div>
      <div className='discount'>
        <div className='beyon'><img src={exclu}/></div>
        <div className='beyon'><img src={big}/></div>
      </div>
    </div>
  )
}

export default PartOne