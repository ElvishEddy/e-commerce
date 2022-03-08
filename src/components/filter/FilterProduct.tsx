import React from "react";

import {
  Container,
  FilterType,
  FilterName,
  Title,
  FilterGroup,
} from "./styles";

export const FilterProduct = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterGroup>
        <FilterType>
          <FilterName>Filter Products:</FilterName>
          <select>
            <option disabled selected>
              Color
            </option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>

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
        </FilterType>
        <FilterType>
          <FilterName>Sort Products:</FilterName>
          <select>
            <option selected>Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </FilterType>
      </FilterGroup>
    </Container>
  );
};
