import React from "react";

import { useTranslation } from "react-i18next";

import juniorSuite from "../../assets/Junior_Suite.jpg";
import luxsRoom from "../../assets/Luxs.jpg";
import standartRoom from "../../assets/photo_room_1.jpg";

import "./rooms.scss";

const Rooms = () => {
  const {t} = useTranslation()
  const roomsItemsImg = [standartRoom, juniorSuite, luxsRoom];
  const roomsItemsTitle = [
    {
      "title" : t('main.rooms.delux-room.title'),
      "desrciption": t('main.rooms.delux-room.description')
    },
    {
      "title" : t('main.rooms.junios-suite.title'),
      "desrciption": t('main.rooms.junios-suite.description')
    },
    {
      "title" : t('main.rooms.lux-room.title'),
      "desrciption": t('main.rooms.lux-room.description')
    }
  ];
  
  return (
    <div className="rooms" id="rooms">
      <div className="container">
        <div className="rooms-box">
          <div className="rooms-title">
            <h3>{t('main.rooms.title')}</h3>
            <p>
            {t('main.rooms.description')}
            </p>
          </div>
          <div className="rooms-categores">
            {roomsItemsImg.map((item, i) => (
              <div className="rooms-categories_item" key={i}>
                <img src={item} alt="img-rooms" />
                <h4>{roomsItemsTitle[i].title}</h4>
                <p>{roomsItemsTitle[i].desrciption}</p>   
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
