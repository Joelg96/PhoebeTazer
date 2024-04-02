import React from "react";
import "./Contact.css";
import envolope_icon from "../../assets/img/contact-mail-icon.png";
import location_icon from "../../assets/img/contact-location-icon.png";
import instagram_icon from "../../assets/img/contact-instagram-icon.svg";
import soundcloud_icon from "../../assets/img/contact-soundcloud-icon.svg";
import linkedin_icon from "../../assets/img/contact-linkedin-icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const apikey = import.meta.env.VITE_EMAIL_FORM_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apikey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for your message! I will be in touch soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send a message</h3>
        <p>
          Feel free to message me for more details and pricing! You can also
          provide feedback, questions, or suggestions.
        </p>
        <ul>
          <li>
            <img
              className="contact-icon"
              src={envolope_icon}
              alt="envolope icon"
            />
            PhoebeTazer@gmail.com
          </li>
          <li>
            <img
              className="contact-icon"
              src={location_icon}
              alt="envolope icon"
            />
            Chico, CA
          </li>
          <li>
            <a href="https://www.instagram.com/phoebe_tazer">
              <img
                className="contact-icon"
                src={instagram_icon}
                alt="Instagram Icon"
              />
            </a>
            <a href="https://soundcloud.com/user-434665739">
              <img
                className="contact-icon"
                src={soundcloud_icon}
                alt="SoundCloud Icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
          <label>Phone</label>
          <input type="tel" name="user_phone" placeholder="(optional)" />
          <label>Message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          />
          <button className="submit-btn" type="submit" value="Send">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
