import React from "react";
import "./article.css";
import Img1 from "../../assests/images/Articleimg1.png";
import Img2 from "../../assests/images/Articleimg2.png"
import Img3 from "../../assests/images/Articleimg3.png"

const Article = () => {
  return (
    <div className="outer-container">
      <div className="container">
      <img src={Img1} alt="..." id="img1"/>
      <img src={Img3} alt="..." id="img2"/>
      <img src={Img2} alt="..." id="img3"/>

        <div className="inner-text">
            
          <h1>
            A mentor is someone<br/> who allows you to see the hope inside yourself
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Article;
