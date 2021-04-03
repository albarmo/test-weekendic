import React, { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import "./style/navbar.scss";

import navImage from "../graphics/bitmap.png";

const Navbar = () => {
  return (
    <>
      <Container fluid className="navbar">
        <section className="navbar-box">
          <Image src={navImage} size="smaller" />
          <section className="navbar-text">
            <p>Good Morning</p>
            <p>Fellas</p>
          </section>
        </section>
      </Container>
    </>
  );
};

export default Navbar;
