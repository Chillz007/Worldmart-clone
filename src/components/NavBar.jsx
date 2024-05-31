import React from "react";
import styled from "styled-components";
import { COLORS } from "../constant/constant";

export default function NavBar({ children }) {
  return (
    <NavWrapper>
      <NavBarList>{children}</NavBarList>
    </NavWrapper>
  );
}

const NavBarList = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  background-color: ${COLORS.primary};
  padding: 12px 40px;
  width: 100%;
  border-radius: 15px;
`;

const NavWrapper = styled.nav`
  text-align: center;
`;
