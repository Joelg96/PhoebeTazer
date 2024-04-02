import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/img/brand-logo.png";
import menu_icon from "../../assets/img/side-nav-menu-icon.svg";
import close_icon from "../../assets/img/close-icon.png"; // New close icon
import { Link } from "react-scroll";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Phoebe Tazer headshot" className="brand-logo" />
      <ul className={sideMenu ? "side-menu" : "hide-side-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="music" smooth={true} offset={-260} duration={500}>
            Music
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button className="contact-btn">Contact</button>
          </Link>
        </li>
      </ul>
      <img
        src={sideMenu ? close_icon : menu_icon}
        alt="Side navigation menu button icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default NavBar;
