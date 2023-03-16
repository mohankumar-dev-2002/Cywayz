import "./slider.css";
import  img1 from "../../assests/images/sponsor1.png";
import  img2 from "../../assests/images/sponsor2.png";
import  img3 from "../../assests/images/sponsor3.png";
import  img4 from "../../assests/images/sponsor4.png";
import  img5 from "../../assests/images/sponsor5.png";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
      <div className="outer-container-slides">
        <div className="slides">
          <h4>Our Sponsors</h4>
          <span className="sponsor-line"></span>
        </div>
        <Slider {...settings}>
          <div className=" image-container">
           <img src={img1} alt="" />
          </div>
          <div className="image-container">
          <img src={img2} alt="" />
          </div>
          <div className="image-container">
          <img src={img3} alt="" />
          </div>
          <div className="image-container">
          <img src={img4} alt="" />
          </div>
          <div className="image-container" >
          <img src={img5} alt="" />
          </div>
        
        </Slider>
      </div>
    </>
  );
}
