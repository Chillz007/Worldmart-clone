import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../constant/constant";

export default function Button({ variant, size, children }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else {
    Component = OutlinedButton;
  }

  const SIZES = {
    small: {
      "--borderRadius": 40 + "px",
      "--fontsize": 16 / 16 + "rem",
      "--padding": "5px 12px",
    },

    medium: {
      "--borderRadius": 2 + "px",
      "--fontSize": 18 / 16 + "rem",
      "--padding": "16px 24px",
    },

    large: {
      "--borderRadius": 4 + "px",
      "--fontSize": 21 / 16 + "rem",
      "--padding": "20px 36px",
    },
  };
  const styles = SIZES[size];

  return <Component style={styles}>{children}</Component>;
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.black};
`;

const OutlinedButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
`;
const GhostButton = styled(ButtonBase)``;
