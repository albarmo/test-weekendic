import React, { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import "./style/text.scss";

const Text = ({ heading, paragraf }) => {
  return (
    <>
      <Container text className="text">
        <h2>{heading}</h2>
        <p>{paragraf}</p>
      </Container>
    </>
  );
};

export default Text;
