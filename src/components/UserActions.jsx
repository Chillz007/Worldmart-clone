import React from "react";
import Button from "./Button";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { Stack } from "@mui/material";
import styled from "styled-components";
// import styled from "styled-components";

export default function UserActions() {
  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{
        alignItems: "center",
      }}
    >
      <SearchIcon />
      <ShoppingBagOutlinedIcon />
      <ProButton>
        <LoginIcon />
        Login
      </ProButton>
    </Stack>
  );
}

export const ProButton = styled.button`
  font-size: var(--fontSize);
  background-color: blue;
  align-items: center;
  border: 2px solid blue;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  border-radius: 30px;
`;
