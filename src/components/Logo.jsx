import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoWrapper>
      <h2>WM</h2>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  padding: 20px;

  outline: 2px solid blue;
  h2 {
    color: blue;
  }
`;
