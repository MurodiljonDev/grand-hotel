import React from "react";

import "./rooms.scss";
import standartRoom from "../../assets/photo_room_1.jpg";
import juniorSuite from "../../assets/Junior_Suite.jpg";
import luxsRoom from "../../assets/Luxs.jpg";

const Rooms = () => {
  const roomsItemsImg = [standartRoom, juniorSuite, luxsRoom];
  const roomsItemsTitle = [
    "Yaxshilangan standart xona (Deluxe xona)",
    "Yosh Lyuks(Junior Suite)",
    "Toifasi Lyuks xona",
  ];
  const roomsItemsDescriptions = [
    "Ushbu turdagi xonada katta to'shak yoki ikkita alohida yotoqli bitta xona mavjud. Xonada: stol, garderob va yotoqxona uchun qo'shimcha yorug'lik bilan jihozlangan maxsus ish maydoni mavjud. Xona individual konditsioner, shuningdek, qishda isitish tizimi bilan jihozlangan. Banyoda isitiladigan pollar. Xona hajmi 26 dan 28 m2 gacha",
    "Ushbu turdagi xona bitta keng xonadan iborat bo'lib, bitta ikki kishilik yoki 2 ta bir kishilik karavot (mehmonning iltimosiga ko'ra), stolli ish joyi va kresloda qulay o'tirish mumkin bo'lgan dam olish maydoni. Xonada katta shkaf bor. Xonaning maydoni 38 dan 42 m2 gacha.",
    "Bu xonalar 2 xonadan iborat - o'tirish maydoni bo'lgan keng yashash xonasi, alohida mehmon hammomi va tabiiy yog'och mebellari bilan jihozlangan qulay yotoq xonasi, shuningdek, keng hammom. Ushbu toifadagi xonalarda barcha kerakli idishlar bilan jihozlangan kichik oshxonalar ham mavjud. Xonaning maydoni 50 dan 56 m2 gacha.",
  ];
  return (
    <div className="rooms">
      <div className="container">
        <div className="rooms-box">
          <div className="rooms-title">
            <h3>Xonalar</h3>
            <p>
              Mehmonxonada 51 ta xona mavjud bo'lib, ular quyidagi toifalarga
              bo'linadi: Yaxshilangan standart xonalar, Junior Suite xonalar va
              LUX toifali xonalar.
            </p>
          </div>
          <div className="rooms-categores">
            {roomsItemsImg.map((item, i) => (
              <div className="rooms-categories_item" key={i}>
                <img src={item} alt="img-rooms" />
                <h4>{roomsItemsTitle[i]}</h4>
                <p>{roomsItemsDescriptions[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
