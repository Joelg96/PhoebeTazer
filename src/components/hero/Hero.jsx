import React from "react";
import "animate.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text animate__animated animate__fadeInDown">
        <h1>Producing elite beats and sounds</h1>
        <p>Description. You need to fill this in, or it can be removed.</p>
        <button className=" btn hero-btn">
          <strong className="btn-text">Explore more</strong>
        </button>
      </div>
    </div>
  );
};

export default Hero;
