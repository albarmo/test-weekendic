import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./style/footer.scss";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <section className="footer-box">
          <p>
            <b>wknd</b>@2021
          </p>
          <p className="version">alpha version 0.1</p>
        </section>
      </Container>
    </>
  );
};

export default Footer;
