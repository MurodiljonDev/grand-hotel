import React from "react";
import { useTranslation } from "react-i18next";

import mainCastle from "../../assets/aboutHostelOne.jpg";
import basseynAbout from "../../assets/Basseyn.jpg";
import kitchenRoom from "../../assets/sliderOneImage.jpg";

import { AboutUsItem } from "../../utils";

import "./aboutUs.scss";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about" id="aboutUs">
      <div className="container">
        <div className="about-box">
          <AboutUsItem imgUs={mainCastle} titleUs={t('main.aboutUs.ourCastel')} />
          <AboutUsItem imgUs={kitchenRoom} titleUs={t('main.aboutUs.ourKitchen')} />
          <AboutUsItem
            imgUs={basseynAbout}
            titleUs={t('main.aboutUs.ourbasseyn')}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
