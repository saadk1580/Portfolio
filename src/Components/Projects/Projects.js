import React, { Component } from "react";
import YoutubePro from "../Images/youtube.png";
import Hackerrank from "../Images/hacker.png";
import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects-container">
        <div className="Pro-1 Pro">
          <ProjectsShow
            projectName="YouTube LITE"
            projectImg="Project-youtube"
            title="Hackerrank"
            source={Hackerrank}
            link="https://github.com/saadk1580/YoutubeLite/tree/main/youtube"
            liveLink="https://youtubelite.saadrazzak.com/"
          />
        </div>
        <div className="bg-color">
          <p></p>
        </div>
        <div className="Pro-2 Pro">
          <ProjectsShow
            projectName="HackerNews Clone"
            projectImg="Project-hacker"
            title="Xplorer"
            source={YoutubePro}
            link="https://github.com/saadk1580/hackernewsclone"
            liveLink="https://hackernews.saadrazzak.com/"
          />
        </div>
        {/* <div className="Pro-3 Pro">
          <ProjectsShow
            projectName="Xplorer"
            projectImg="Project-xplorer"
            title="YouTube Lite"
            source={YoutubePro}
            link="https://github.com/saadk1580/Xplorer"
            liveLink="https://xplorer.saadrazzak.com/"
          />
        </div> */}
      </div>
    );
  }
}

function ProjectsShow(props) {
  return (
    <div className={props.projectImg + " Project"}>
      <div className="fade">
        <h2 className="pro-name">{props.projectName}</h2>
        <div className="pro-btns">
          <a href={props.link} rel="noreferrer" target="_blank">
            <p className="git">GitHub</p>
          </a>
          <a href={props.liveLink} target="_blank" rel="noreferrer">
            <p className="live">LIVE DEMO</p>
          </a>
        </div>
      </div>
    </div>
  );
}
