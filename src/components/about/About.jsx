import React from "react";
import { Link } from "react-scroll";
import "./About.css";
import about_profile from "../../assets/img/about-profile-img.webp";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_profile} alt="" className="about-img"></img>
      </div>
      <div className="about-right">
        <h3>About Me</h3>
        <h2>Hi! I&apos;m Phoebe Tazer</h2>
        <p>
          This is your bio. FILL IN WITH YOUR WORDS. As an audio engineer, I am
          deeply passionate about shaping the sonic landscapes of music and
          sound. With years of experience in recording, mixing, and mastering, I
          have honed my skills to deliver top-notch audio quality across various
          genres and projects.
        </p>
        <p>
          My commitment to perfection drives me to continually refine my craft
          and explore new techniques to enhance the listening experience.
          Collaborating with artists and creators, I strive to capture their
          vision and translate it into captivating auditory journeys. From
          capturing the raw energy of live performances to sculpting intricate
          soundscapes in the studio, I take pride in my ability to bring music
          to life with clarity, depth, and emotion.
        </p>
        <Link to="contact" smooth={true} offset={-260} duration={500}>
          <button className="contact-btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
