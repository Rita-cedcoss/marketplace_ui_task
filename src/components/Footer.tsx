import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__block'>
            <p>Your Company</p>
            <span style={{fontSize:"16px"}}>Our mission is to make gadjet purchase, 
                accessible and affordable.
            </span>
        </div>
        <div className='footer__block'>
        <p>Helpful Links</p>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Market Place</li>
                <li>Blog</li>
                <li>Contact Us </li>
            </ul>
        </div>
        <div className='footer__block'>
        <p>Site map</p>
            <ul>
                <li>Our Mobile App</li>
                <li>Frequently Asked Questions</li>
                <li>Help Desk</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        <div className='footer__block'>
        <p>Contact US</p>
           <div className='footer__block__contact'>
           <div className='product__display__item product__display__item--right '><i className="bi bi-facebook"></i></div>
           <div className='product__display__item product__display__item--right '><i className="bi bi-twitter"></i></div>
           <div className='product__display__item product__display__item--right '><i className="bi bi-instagram"></i></div>
           <div className='product__display__item product__display__item--right '><i className="bi bi-linkedin"></i></div>
           </div>
           <span style={{fontSize:"16px"}}>hello@yourcompany.com</span>
        </div>
    </div>
  )
}

export default Footer