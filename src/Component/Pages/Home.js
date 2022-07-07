import React from 'react'
import PartOne from './HomeComp/PartOne'
import Product from './HomeComp/Product'
import ProductTwo from './HomeComp/ProductTwo'
import TopCollection from './HomeComp/TopCollection'
import Access from './HomeComp/Access'
import Assorted from './HomeComp/Assorted'
const Home = () => {
  return (
    <>
      <PartOne/>
      <Product/>
      <div className='more'><button className='shoping'>View more nightware collection</button></div>
      <ProductTwo/>
      <div className='moreSec'><button className='shoping'>View more women collection</button></div>
      <TopCollection/>
      <div className='moreSec2'><button className='shoping'>View more women collection</button></div>
      <Access/>
      <div className='moreSec3'><button className='shoping'>View more Accessories collection</button></div>
      <Assorted/>
      <div className='moreSec4'><button className='shoping'>View more Assorted Deals</button></div>
      <div className='footer'>
        
          <h6>©2022 Best Online Shopping Site in Qatar | Best Deals & Offers | itsmykart.com All rights reserved</h6>
          <div className='content'><h6>Privacy Policy</h6>
          <h6>Terms</h6>
          <h6>Return Policy</h6>
          <h6>Contact Us</h6></div>
        
      </div>
    </>
  )
}

export default Home