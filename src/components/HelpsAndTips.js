import React, { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import "./style/helps-and-tips.scss";
import Slider from "react-slick";
import axios from "axios";

import tipsImage1 from "../graphics/tips1.jpg";
import tipsImage2 from "../graphics/tips2.jpg";
import tipsImage3 from "../graphics/tips3.jpg";
import ovalIcon from "../graphics/oval-icon.svg";

const HelpsAndTipsimport = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    axios({
      url: "https://wknd-take-home-challenge-api.herokuapp.com/help-tips",
      method: "GET",
    })
      .then(({ data }) => {
        setTips(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(tips);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="tips-slider">
        <h1 className="tips-heading">Help & tips</h1>
        <div className="tips">
          <section className="slider">
            {tips
              ? tips.map((val) => {
                  return (
                    <div className="slider-box" key={val.id}>
                      <Image src={val.image} className="slider-image" />
                      <div className="title">
                        <h5>{val.title}</h5>
                        <Image src={ovalIcon} size="tiny" className="icon" />
                      </div>
                    </div>
                  );
                })
              : null}
          </section>
        </div>
      </div>
    </>
  );
};

export default HelpsAndTipsimport;
