import React from 'react';
import logo from './logo.svg';
import Navbar from './components/header/Navbar';
import "./components/components.css"
import Banner from './components/header/Banner';
import ProductList from './components/main/Product';
import Product from './components/main/Product';
import Offer from './components/header/Offer';
import Newsletter from './components/main/Newsletter';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='container'>
       <Navbar/>
       <Banner/>
       <Product/>
       <Offer content="Best Selling Product"/>
       <Product/>
       <Newsletter/>
       <Footer/>

    </div>  
   
  );
}

export default App;
