import React from "react";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Product from "./Product";

const Main = () => {
  return (
    <section>
      <Banner />
      <Product />
      <Offer content="Best Selling Product" />
      <Product />
      <Newsletter />
    </section>
  );
};

export default Main;
