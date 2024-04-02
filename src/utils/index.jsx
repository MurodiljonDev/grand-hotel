import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./index.scss";

const AboutUsItem = ({ imgUs, titleUs }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className={"about-box_item"}
    >
      <img src={imgUs} alt={titleUs} />
      <h4>{titleUs}</h4>
      <div className="about-item_animation"></div>
    </div>
  );
};

export { AboutUsItem };
