import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { ProButton } from "./UserActions";
import styled from "styled-components";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Typography variant="h2">
        Fulfill Your Shopping Dreams with World Mart
      </Typography>
      <Typography variant="body2" my={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam
        porro maiores cum inventore adipisci eligendi non qui quas illum, nam
        sunt culpa id quam ab aut ex neque. Est.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Button variant="contained">View Product</Button>
        <Button variant="outlined" type="medium">
          Exciting Offer
        </Button>
      </Stack>
    </Box>
  );
}

const ProButtonn = styled.div``;
