import { Box, Container, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import Rider from "../assets/images/delivery.jpg";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Footer() {
  return (
    <FooterContainer>
      <Container sx={{ marginLeft: "25px" }}>
        <Typography
          variant="h2"
          sx={{ color: "white", width: "50%", paddingTop: "50px" }}
        >
          Features & <Span>Benefits</Span>
        </Typography>
        <Typography variant="body2" color={"white"} width={"35%"} my={2}>
          Your go-to for rapid delivery, ensuring your satisfaction at the speed
          of light.
        </Typography>
        <IconHolder>
          <AccessTimeIcon />
          {"Get your delivery in 48 hours "}
        </IconHolder>
        <IconHolder>
          <CalendarMonthIcon />
          {"7-days easy return"}
        </IconHolder>
        <IconHolder>
          <CurrencyExchangeIcon />
          {"Cash On Delivery is available "}
        </IconHolder>
      </Container>
      <Img>
        <img src={Rider} alt="delivery-rider" />
      </Img>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: linear-gradient(2deg, #02023a, #4f4fec);
  display: flex;
`;

const Img = styled.div`
  display: flex;

  img {
    width: 80%;
    border-radius: 300px;
    padding: 30px;
    margin: 10px auto;
    align-self: center;
    outline: 4px solid white;
  }
`;

const Span = styled.span`
  color: yellow;
`;

const IconHolder = styled.div`
  display: flex;
  gap: 5px;
  color: white;
  font-family: "Roboto" sans-serif;
  font-weight: 500;
  padding-top: 10px;
  align-items: center;
`;
