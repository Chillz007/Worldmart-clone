import React from "react";
import styled from "styled-components";

export default function NavItems({ href, children }) {
  return (
    <NavItemWrapper>
      <NavLink href={href}>{children}</NavLink>
    </NavItemWrapper>
  );
}

const NavItemWrapper = styled.li`
  display: inline;

  &:not(:first-of-type) {
    margin-left: 28px;
  }
`;

const NavLink = styled.a`
  font-size: 1.2rem;
  font-family: sans-serif;
  text-decoration: none;
  color: inherit;
  color: white;
  &:hover {
    text-decoration: revert;
  }
`;
