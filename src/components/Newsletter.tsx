import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <p style={{fontSize:"50px"}}>Subscribe to Our Newsletter</p>
      <p>Don't miss out on our top deals! Dont worry we will not spam you.</p>
      <div className='newsletter__form'>
        <input className='newsletter__inp' placeholder='Enter Your Email Here...'/>
        <button className='newsletter__btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter