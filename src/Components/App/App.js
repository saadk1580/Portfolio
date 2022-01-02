import React, { useState, useEffect } from "react";
import "./App.scss";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ScrollIntoView from "react-scroll-into-view";
import Contact from "../Contact/Contact";

function App() {
  const [seconds, setSeconds] = useState(0);

  let words = [
    "Software Engineer",
    "IT Analyst",
    "Front End Developer",
    "Googler",
    "ReactJS",
    "HTML/CSS",
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
            <li className="Contact-btn">
              {" "}
              <ScrollIntoView selector=".pp">Projects</ScrollIntoView>
            </li>
            <li className="Projects-btn">
              <ScrollIntoView selector=".contact-container">
                Contact
              </ScrollIntoView>
            </li>
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

      <div className="Pro-header">
        <h1 className="pp">Personal Projects</h1>
        <Projects />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
