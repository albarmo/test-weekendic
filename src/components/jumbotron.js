import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import "./style/jumbotron.scss";

import ImageRobo from "../graphics/robo.png";

const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron">
        <section className="jumbotron-box">
          <section className="jumbotron-text">
            <h1>WEEKEND FROM HOME</h1>
            <p>Stay active with a little workout</p>
          </section>
          <section className="jumbotron-image">
            <Image src={ImageRobo} alt="robo-image" />
            <button className="jumbotron-button">Let's Go</button>
          </section>
        </section>
      </div>
    </>
  );
};

export default Jumbotron;
