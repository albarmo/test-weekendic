import React, { useState, useEffect } from "react";
import {
  Navbar,
  Jumbotron,
  Defintion,
  Testimonials,
  Text,
  Footer,
} from "../components";
import "./style/home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Defintion />
      <div className="section2">
        <Testimonials style={{ marginTop: "-200px" }} />
        <Text
          heading="POV"
          paragraf="Deffinition; a practice or exercise to test or improve one's fitness for athletic competiion, ability, or performance to exhaus (something, such as a mine ) by working to deserve arrange, or achive by resolving difficulties. Merriam - Webster.com Dictionary."
        />
        <Text
          heading="Resource"
          paragraf="Deffinition; a practice or exercise to test or improve one's fitness for athletic competiion, ability, or performance to exhaus (something, such as a mine ) by working to deserve arrange, or achive by resolving difficulties. Merriam - Webster.com Dictionary."
        />
        <Testimonials style={{ marginTop: "-200px" }} />
        <Text
          heading="You're all set"
          paragraf="the wise man therefor always holds in these maters to this principal of selection."
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
