import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-title">
            <h2>GRAND CAPITAL HOTEL</h2>
            <p>Keng va zamonaviy xonalar va kvartiralar</p>
            <span>Ham biznes, ham dam olish uchun juda mos keladi.</span>
          </div>
          <div className="contact-location">
            <h5>
              Узбекистан, г.Ташкент ул.Шарафобод, д.2 Ориентир метро "Минор"
            </h5>
            <div className="contact-location_phone">
              <span>Raqamlarimiz:</span>
              <h6>
                <a href="#">+998 71 237 01 11</a>
              </h6>
              <h6>
                <a href="#">+998 99 512 01 11</a>
              </h6>
            </div>
            <div className="contact-location_phone">
              <span>Email:</span>
              <h6>
                <a href="#">reservation@grandcapitalhotel.uz</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
