import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import livingRoom from "../../assets/sliderOneImage.jpg";
import mainCastel from "../../assets/sliderTwoImg.jpg";
import mainRoom from "../../assets/sliderThreeImg.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import "./header.scss";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="header">
      <div className="header-box">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="header-box_item">
              <img src={livingRoom} alt="livingRoom" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="header-box_item">
              <img src={mainCastel} alt="mainCastel" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="header-box_item">
              <img src={mainRoom} alt="smallRoom" />
            </div>{" "}
          </SwiperSlide>
        </Swiper>
        <div
          className="header-text"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2 className="animate__flip">Grand Capital Hotelga Hush Kelibsiz</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
