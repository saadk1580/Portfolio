import React, { Component } from "react";
import YoutubePro from "./Images/youtube.png";
import Hackerrank from "./Images/hacker.png";
import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects-container">
        <div className="Pro-1 Pro">
          <ProjectsShow
            projectImg="Project-youtube"
            title="Hackerrank"
            source={Hackerrank}
            discription="Technology Used: JavaScript "
          />
        </div>
        <div className="bg-color">
          <p></p>
        </div>
        <div className="Pro-2 Pro">
          <ProjectsShow
            projectImg="Project-hacker"
            title="Xplorer"
            source={YoutubePro}
            discription=""
          />
        </div>
        <div className="Pro-3 Pro">
          <ProjectsShow
            projectImg="Project-xplorer"
            title="YouTube Lite"
            source={YoutubePro}
            discription=""
          />
        </div>
      </div>
    );
  }
}

function ProjectsShow(props) {
  return (
    <div className={props.projectImg + " Project"}>
      <div className="fade">
        {/* <img src={props.source} alt={props.title} /> */}
        <p className="git">EXPLORE</p>
      </div>
    </div>
  );
}
