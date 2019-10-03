import React from "react";
import "./style.css";

const Title = props => (
  <div className="title">
    <div className="title2">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Title;