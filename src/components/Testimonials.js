import React, { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import "./style/testimonials.scss";
import Slider from "react-slick";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios({
      url: "https://wknd-take-home-challenge-api.herokuapp.com/testimonial",
      method: "GET",
    })
      .then(({ data }) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container lines">
        <h1 className="text-heading">Testimonial</h1>
        <div className="testimonial">
          <section className="slider">
            <Slider {...settings}>
              {testimonials
                ? testimonials.map((val, id) => {
                    return (
                      <div className="slider-box" key={val.id}>
                        <section className="container">
                          <h1>{val.by}</h1>
                          <p>{val.testimony}</p>
                        </section>
                      </div>
                    );
                  })
                : null}
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
      </div>
    </>
  );
};

export default Testimonials;
