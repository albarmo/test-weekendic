import React, { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import "./style/testimonials.scss";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1 className="text-heading">Testimonial</h1>
      <div className="testimonial">
        <section className="slider">
          <Slider {...settings}>
            <div className="slider-box">
              <section className="container">
                <h1>Blu Kicks</h1>
                <p>
                  places where you can leverage tools and software to free up
                  time to focus on growing the bussines
                </p>
              </section>
            </div>
            <div className="slider-box">
              <section className="container">
                <h1>Blu Kicks</h1>
                <p>
                  places where you can leverage tools and software to free up
                  time to focus on growing the bussines
                </p>
              </section>
            </div>
            <div className="slider-box">
              <section className="container">
                <h1>Blu Kicks</h1>
                <p>
                  places where you can leverage tools and software to free up
                  time to focus on growing the bussines
                </p>
              </section>
            </div>
            <div className="slider-box">
              <section className="container">
                <h1>Blu Kicks</h1>
                <p>
                  places where you can leverage tools and software to free up
                  time to focus on growing the bussines
                </p>
              </section>
            </div>
            <div className="slider-box">
              <section className="container">
                <h1>Blu Kicks</h1>
                <p>
                  places where you can leverage tools and software to free up
                  time to focus on growing the bussines
                </p>
              </section>
            </div>
            <div className="slider-box">
              <section className="container">
                <h1>Blu Kicks</h1>
                <p>
                  places where you can leverage tools and software to free up
                  time to focus on growing the bussines
                </p>
              </section>
            </div>
          </Slider>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
