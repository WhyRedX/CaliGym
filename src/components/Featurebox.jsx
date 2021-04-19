import React from "react";

function Featurebox(props) {
  return (
    <div className="a-box">
        <img src={props.image} alt="" />
      <div className="a-b-text">
        <h2>{props.title}</h2>
          <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Featurebox;
