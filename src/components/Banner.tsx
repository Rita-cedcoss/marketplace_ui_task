import React from 'react'
import Offer from './Offer'

const Banner = () => {
  return (
    <>
    <section className='banner'>
        <div className='banner__left'>
           <div className='banner__left__text'>
           <p style={{fontSize:"16px"}}>
            WE'RE STILL
            </p>
            <h3 style={{fontSize:"64px"}}>
            Filling up <br></br> the spaces.
            </h3>
            <div className='banner__btnDeals'>
            <button className='banner__btn'>Explore Marketplace</button>
            <p style={{paddingLeft: "19px"}}>See Top Deals</p>
            </div>
           </div>    
        </div>
        <div className='banner__right'>
            <img src="Rectangle 10342.png" width="100%" height="100%"/>
        </div>
    </section>
    <Offer content="Our Top Deals"/>
    </>
  )
}

export default Banner