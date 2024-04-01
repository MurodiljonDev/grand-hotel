import React, { useEffect } from "react";

import mainCastle from "../../assets/aboutHostelOne.jpg";
import basseynAbout from "../../assets/Basseyn.jpg";
import kitchenRoom from "../../assets/sliderOneImage.jpg";

import { AboutUsItem } from "../../utils";

import "./aboutUs.scss";

const AboutUs = () => {

  return (
    <div className="about">
      <div className="container">
        <div className="about-box">
          <AboutUsItem imgUs={mainCastle} titleUs={"Bizning bino"} />
          <AboutUsItem imgUs={kitchenRoom} titleUs={"Ajoyib Oshxona"} />
          <AboutUsItem
            imgUs={basseynAbout}
            titleUs={"Sog'lomlashtiruvchi markaz"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
