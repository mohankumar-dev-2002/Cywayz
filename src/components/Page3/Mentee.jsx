import React from "react";
import "./mentee.css";
import menteecontent from "../../assests/images/menteecontent.png";
const Mentee = () => {
  return (
    <div>
      <div className="mentee-container">
        <img src={menteecontent} alt="" />
        <div className="content">
          <h1>
            What you can achieve as
            <br /> a mentee?
          </h1>
        </div>
        <div className="lower-group">
        <span className="icon" >Technical</span>
        <span className="icon" >Hand-on mentoring</span>
        <span className="icon" >Caree guidance</span>
        <span className="icon" >International certificate</span>
        <span className="icon" >Interview process</span>
      </div>
      </div>
     
    </div>
  ); 
};

export default Mentee;
