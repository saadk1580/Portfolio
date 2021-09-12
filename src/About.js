import React from "react";
import "./About.scss";
import Java from "./Images/java.png";
import JavaScript from "./Images/js.png";
import Rjs from "./Images/react.png";
import Cpp from "./Images/cpp.png";
import HTML from "./Images/html.png";
import CSS from "./Images/css.png";

function About() {
  return (
    <div className="about-container">
      <p className="about-description">
        Tech enthausiat person and currently works as a IT analyst. I have a
        diverse software engineering bacground and primarly work with JavaScript
        and React library to create dynamic and responsive web applications.
        Strong understaning of software engineer methadologies and algorithms to
        solve complex problems. <br />{" "}
        <b>Here are some of the technologies I have experince working with:</b>
      </p>
      <div className="stock-div">
        <img src={Java} className="stock-pics java " alt="Java logo" />
        <img src={JavaScript} className="stock-pics js" alt="JavaScript logo" />
        <img src={Rjs} className="stock-pics rjs" alt="Reactjs logo" />
        <img src={Cpp} className="stock-pics cpp" alt="Cpp logo" />
        <img src={HTML} className="stock-pics html" alt="HTML logo" />
        <img src={CSS} className="stock-pics css" alt="CSS logo" />
      </div>
    </div>
  );
}

export default About;
