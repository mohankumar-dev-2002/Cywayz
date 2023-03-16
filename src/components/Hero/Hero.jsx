import React from "react";
import "./hero.css";
import SearchBtn from "./SearchBtn";
import laptop from "../../assests/images/Laptop.png";
import Bookdata from './Data.json';
const Hero = () => {
  const heading =[`Book and meet over 13,383+ mentors for 1:1 mentorship in `,<br/>,`our global community.`]
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="text-content">
          <h1>Good Mentors teach</h1>
          <h1>how to think, not what to think</h1>
          <p>
            {heading.map((x)=>{
              return x;
            })}
          </p>
          <SearchBtn data={Bookdata}/>
        </div>
      </div>
      <div className="laptop-img">
        <div className="top">
          <img src={laptop} alt="" />
        </div>
        <div className="login-btn"><button type="submit">Login</button></div>
      </div>
    </div>
  );
};

export default Hero;
