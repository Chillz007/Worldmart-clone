import React from "react";
import Breadcrumb from "./components/Breadcrumb";
import Crumbs from "./components/Crumbs";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import NavItems from "./components/NavItems";
import { navLink } from "./constant/constant";
import Logo from "./components/Logo";
import UserActions from "./components/UserActions";
import styled from "styled-components";
import Hero from "./components/Hero";
import ImageBag from "./components/ImageBag";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* <Breadcrumb>
        <Crumbs href="/">Home</Crumbs>
        <Crumbs href="/living">Living room</Crumbs>
        <Crumbs href="/living/couch">Counches</Crumbs>
        <Crumbs href="/living/couch/sectional">Sectionals</Crumbs>
      </Breadcrumb>

      <hr />
      <Button size="small" variant="fill">
        small
      </Button>
      <Button size="medium" variant="outlined">
        medium
      </Button>
      <Button size="large" variant="ghost">
        large
      </Button>

      <hr /> */}
        <Logo />
        <NavBar>
          {navLink.map((items) => {
            return (
              <NavItems key={items.id} href={items.href}>
                {items.navName}
              </NavItems>
            );
          })}
        </NavBar>
        <UserActions />
      </div>
      <Hero />
      <ImageBag />
      <Footer />
    </div>
  );
}
