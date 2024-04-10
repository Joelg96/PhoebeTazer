import "animate.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text animate__animated animate__fadeInDown">
        <h1>Producing elite beats and sounds</h1>
        <p>
          Creative professional experienced in audio engineering, studio
          production and live music.
        </p>
        <button className=" btn hero-btn">
          <strong className="btn-text">Explore more</strong>
        </button>
      </div>
    </div>
  );
};

export default Hero;
