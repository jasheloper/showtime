import React from "react";
import "./App.css";

function Show(props) {
  return (
    <div className="show">
      <h1>{props.name}</h1>
      <div></div>
      {props.image}
      <div className="button">
        <button className="readmore">{props.readmore}</button>
      </div>

      <p>{props.summary}</p>
    </div>
  );
}

export default Show;
