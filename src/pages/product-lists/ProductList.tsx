import React from "react";

import {
  Announcement,
  Navbar,
  Products,
  Newsletter,
  Footer,
  FilterProduct,
} from "../../components";

export const ProductList = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <FilterProduct />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};
