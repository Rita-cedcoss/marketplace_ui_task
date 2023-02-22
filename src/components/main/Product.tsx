import React from 'react'

const Product= () => {
  return (
    <div className='Product'>
       <div className="autofill">
        {
        [1,2,3].map((item:any)=>{
          return(
            <div className="item1">
            <div className='product__display'>
              <span className='product__display__item'>-59%</span>
              <div className='product__display__item product__display__item--right '><i className="bi bi-suit-heart"></i></div>   
            </div>
            <div>
              <img src="Image.png" width="100%"/>
            </div>
            <div className='product__display'>
              <div className='product__display__item product__display__item--audio'>Audio Device</div>
              <div className='product__display__item--1'>₦600,000</div>
            </div>
            <p className='product__display__text'>Nokia Essential Wireless Headphones 120CM BLACK</p>
            <div className='product__display'><button className='product__display__item product__btnadd'>Add to cart</button>
            <button className="product__display__item product__btn">Buy Now</button>
            </div>
        </div>
          )
        })   
        }
    </div>

    </div>
  )
}

export default Product