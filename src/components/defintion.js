import React, { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import "./style/defintion.scss";

const Defintion = () => {
  return (
    <>
      <div className="defintion">
        <section className="defintion-text">
          <p>
            <span>Deffinition;</span> a practice or exercise to test or improve
            one's fitness for athletic competiion, ability, or performance to
            exhaus (something, such as a mine ) by working to deserve arrange,
            or achive by resolving difficulties. Merriam - Webster.com
            Dictionary.
          </p>
          <p className="defintion-company">-weekend team</p>
        </section>
      </div>
    </>
  );
};

export default Defintion;
