import React from "react";

import {
  Announcement,
  Navbar,
  Categories,
  Footer,
  Newsletter,
  Products,
  Slider,
} from "../../components";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
