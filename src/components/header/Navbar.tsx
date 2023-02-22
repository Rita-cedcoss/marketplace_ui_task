import React from 'react'

const Navbar = () => {
  return (
    <header className='navbar'>
       <div className='navbar__logo'><p>YOUR LOGO</p></div>
       <div>
         <ul className='navbar__list'>
            <li>Market Place</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
       </div>
       <div><img src='Group 2609203.png' alt='' height="54px" width="54px"/> <img src='Ellipse 67 (2).png' alt='' height="54px" width="54px"/></div>
    </header>
  )
}

export default Navbar