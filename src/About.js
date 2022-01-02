import React from "react";
import "./About.scss";
import Java from "./Images/java.png";
import JavaScript from "./Images/js.png";
import Rjs from "./Images/react.png";
import Cpp from "./Images/cpp.png";
import HTML from "./Images/html.png";
import CSS from "./Images/css.png";
import AWS from "./Images/aws_logo.png";

function About() {
  return (
    <div className="about-container">
      <p className="about-description">
        IT analyst and passionate software engineer. Always looking foreward to
        working with different technologies to create dynamic and responsive
        application. Strong understaning of software engineer methadologies and
        algorithms to solve complex problems. <br />{" "}
        <b>Here are some of the technologies I mostly work with:</b>
      </p>
      <div className="stock-div">
        <img src={Java} className="stock-pics java " alt="Java logo" />
        <img src={JavaScript} className="stock-pics js" alt="JavaScript logo" />
        <img src={Rjs} className="stock-pics rjs" alt="Reactjs logo" />
        <img src={Cpp} className="stock-pics cpp" alt="Cpp logo" />
        <img src={HTML} className="stock-pics html" alt="HTML logo" />
        <img src={CSS} className="stock-pics css" alt="CSS logo" />
        <img src={AWS} className="aws" alt="AWS logo" />
      </div>
    </div>
  );
}

export default About;
