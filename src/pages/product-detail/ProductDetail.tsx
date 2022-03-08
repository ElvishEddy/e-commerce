import React from "react";

import { Announcement, Navbar, Newsletter, Footer } from "../../components";
export const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Denim Jumpsuit</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptatibus nobis perferendis voluptatum ad maiores eos quisquam
            minus deleniti illo, in reiciendis dolor, accusantium sed facere
            similique, libero molestias temporibus.
          </p>
          <span>$ 20</span>
          <div>
            <span>Color:</span>
            <select>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </select>
          </div>

          <div>
            <span>Size:</span>
            <select>
              <option disabled selected>
                Size
              </option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
