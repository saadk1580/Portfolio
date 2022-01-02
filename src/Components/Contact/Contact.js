import React from "react";
import LinkedIn from "../Images/li_img.png";
import twitter from "../Images/twitter_logo.png";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div>
        <a
          className="linkedIn"
          href="https://www.linkedin.com/in/saadrazzak/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact_img li-logo"
            src={LinkedIn}
            target="_blank"
            alt="LinkeIn logo"
          />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/Saadsaad1797"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact_img twitter-logo"
            src={twitter}
            target="_blank"
            alt="Twitter logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
