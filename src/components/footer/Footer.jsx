import "./Footer.css";
import linkedin_icon from "../../assets/img/contact-linkedin-icon.svg";
import github_icon from "../../assets/img/footer-github-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Joel Goode. All rights reserved.</p>
      <ul>
        <a href="https://github.com/Joelg96">
          <img className="footer-icon" src={github_icon} alt="LinkedIn Icon" />
        </a>
        <a href="https://www.linkedin.com/in/joel-goode">
          <img
            className="footer-icon"
            src={linkedin_icon}
            alt="LinkedIn Icon for Joel Goode, the developer."
          />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
