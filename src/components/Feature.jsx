import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../images/1.png";
import fimage2 from "../images/2.png";
import fimage3 from "../images/3.png";
function Feature() {
  return (
    <div id="features">
      <h2 className="head">
        Do you have a Program? We Do! ready to <span>START</span>.
      </h2>
      <div className="a-container">
        <Featurebox
          image={fimage1}
          title="WORKOUT PROGRAM"
          paragraph="Transform your body with Calisthenics & Weighted Calisthenics. Build muscle & get shredded with science based training."
        />
        <Featurebox
          image={fimage2}
          title="STRETCHING PROGRAM"
          paragraph="Improve your Mobility & Flexibility with our unique system. Fix your posture, prevent injuries and eradicate imbalances."
        />
        <Featurebox
          image={fimage3}
          title="NUTRITION GUIDE"
          paragraph="Get your nutrition on point to support your training goals. Gain muscle, lose fat and get shredded with the right nutrition."
        />
      </div>
    </div>
  );
}

export default Feature;
