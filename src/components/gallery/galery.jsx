import React from "react";

import GalleryImgA from "../../assets/photogaleryNew.jpg";
import GalleryImgB from "../../assets/forgalery2.jpg";
import GalleryImgC from "../../assets/frogalery3.jpg";
import GalleryImgD from "../../assets/forGalery4.jpg";

import "./galery.scss";

const Galery = () => {
  const galeryImages = [GalleryImgA, GalleryImgB, GalleryImgC, GalleryImgD];

  return (
    <div className="galery" id="galery">
      <div className="galery-box">
        <div className="galery-title">
          <h3>Fotogalereya</h3>
        </div>
        <div className="container-galery">
          <div className="galery-photos">
            {galeryImages.map((item, i) => (
              <div className="galery-photos_img" key={i}>
                <img src={item} alt="galery-photo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
