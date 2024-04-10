import { Link } from "react-scroll";
import "./About.css";
import about_profile from "../../assets/img/about-profile-img.webp";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_profile}
          alt="Phoebe Tazer profile in colored jacket with headphones on smiling."
          className="about-img"
        ></img>
      </div>
      <div className="about-right">
        <h3>About Me</h3>
        <h2>Hi! I&apos;m Phoebe Tazer</h2>
        <p>
          As a fellow musician and vocalist, my passion for creating superior
          quality music is of the utmost importance. Almost a decade ago, I
          began my career as an audio engineer with the desire to give my music
          the polished presentation it deserved. After spending years developing
          my skills in music venues and professional studios, I now provide this
          service for many other passionate musicians.
        </p>
        <p>
          I have worked with all types of artists from rappers to classical
          pianists, and always listen carefully to their requests in order to
          bring their unique vision to life. I apply the same dedicated approach
          to live music and take pride in creating spectacular musical
          experiences.
        </p>
        <Link to="contact" smooth={true} offset={-260} duration={500}>
          <button className="contact-btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
