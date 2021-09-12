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
          />
        </div>
        <div className="Pro-3 Pro">
          <ProjectsShow
            projectImg="Project-xplorer"
            title="YouTube Lite"
            source={YoutubePro}
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
        <p className="git">EXPLORE</p>
      </div>
    </div>
  );
}
