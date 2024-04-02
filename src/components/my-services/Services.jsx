import React from "react";
import "./Services.css";
import service_1 from "../../assets/img/service-audio-equipment-desk.webp";
import service_2 from "../../assets/img/service-microphone.webp";
import service_3 from "../../assets/img/service-slider-buttons.webp";
import service_icon1 from "../../assets/img/icon-album.png";
import service_icon2 from "../../assets/img/icon-microphone.png";
import service_icon3 from "../../assets/img/icon-turntable.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt=""></img>
        <div className="caption">
          <img src={service_icon1} alt=""></img>
          <p>Complete albumn or song production.</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt=""></img>
        <div className="caption">
          <img src={service_icon2} alt=""></img>
          <p>Audio production.</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt=""></img>
        <div className="caption">
          <img src={service_icon3} alt=""></img>
          <p>Limited audio production. </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
