import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Cart from "../assets/images/shopping_cart.png";
import Package from "../assets/images/Your_package.jpg";
import styled from "styled-components";

export default function ImageBag() {
  return (
    <ImageWrapper>
      <ImageContainer>
        <img
          style={{ margin: "0" }}
          width="550px"
          height="350"
          src={Cart}
          alt="shopping-cart"
        />
        <img width="350px" style={{}} src={Package} alt="your_package" />
      </ImageContainer>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 100%;
  margin: -10 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 85%;
  align-items: center;
  justify-content: space-between;
`;
