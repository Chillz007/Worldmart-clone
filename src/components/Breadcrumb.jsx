import React from "react";
import styled from "styled-components";

export default function Breadcrumb({ children }) {
  return (
    <nav aria-label="BreadCrumbs">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;
