import React, { useState, useEffect } from "react";
import "./App.scss";
import Projects from "./Projects";
import About from "./About";

function App() {
  const [seconds, setSeconds] = useState(0);

  let words = [
    "Software Engineer",
    "Googler",
    "IT Analyst",
    "Stackoverflow",
    "Front End Developer",
    "ReactJS",
    "NodeJS",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) =>
        seconds < words.length - 1 ? seconds + 1 : seconds - (words.length - 1)
      );
    }, 2200);
    document.getElementsByClassName("mm").innerHTML = words[seconds];
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div className="Home">
        <div className="Header">
          <h1 className="Title">
            {" "}
            <span className="logo">SR</span> Saad Razzak
          </h1>

          <ul className="Nav">
            <li className="Projects-btn">Projects</li>
            <li className="Contact-btn">Contact</li>
          </ul>
        </div>
      </div>

      <div className="bg">
        <p key={words[seconds]} className="mm">
          {words[seconds]}
        </p>
      </div>
      <div>
        <About />
      </div>

      <div>
        <div className="Pro-header">
          <h1>Personal Projects</h1>
        </div>
        <Projects />
      </div>

      <div className="contact-container">
        <h1>Contact</h1>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}

export default App;
