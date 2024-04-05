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
        <img
          src={service_1}
          alt="A computer desk with speakers and headphones"
        ></img>
        <div className="caption">
          <img
            src={service_icon1}
            alt="audio disk and albumn sleeve with music notes"
          ></img>
          <p>Studio sound engineering.</p>
        </div>
      </div>
      <div className="service">
        <img
          src={service_2}
          alt="studio microphone with red light filter"
        ></img>
        <div className="caption">
          <img src={service_icon2} alt="microphone icon"></img>
          <p>Vocal and instrumental production.</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="studio sound mixing board"></img>
        <div className="caption">
          <img src={service_icon3} alt="sound mixing board icon"></img>
          <p>Live sound engineering. </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
