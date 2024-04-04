import React from "react";

import { useTranslation } from "react-i18next";

import "./reservation.scss";

const Reservation = () => {
  const { t } = useTranslation();
  const reservationDates = [
    "Mehmonxona Toshkent shahrining markaziy hududida joylashgan – “UzExpocenter” xalqaro koʻrgazmalar zalidan 5 daqiqalik yoʻl va markaziy oziq-ovqat bozoridan piyoda 10 daqiqalik masofada joylashgan.",
    "Markaziy joylashuviga qaramay, mehmonxona sokin ko'chada joylashgan bo'lib, u o'tib ketayotgan mashinalardan shovqin bo'lmasligini kafolatlaydi",
    "Mehmonxona yaqinida restoranlar, barlar, oziq-ovqat bozori, markaziy maydon va Amir Temur muzeyi joylashgan",
    "Grand Capital mehmonxonasidagi xonalar soni 51 ta xonani tashkil etadi. Ulardan 40 tasi DELUXE toifadagi xonalar, 7 tasi Junior Suite xonalari va 4 tasi Suite xonalari",
    "Mehmonxona hududida ikkita zaldan iborat “POYTAXT” restorani mavjud. Bu milliy va yevropa taomlari taqdim etuvchi fast-fud restorani hamda kamin maydoni va oilaviy kechki ovqat uchun stendlari bo‘lgan shinam xonada alohida raqs maydoni mavjud.",
    "Fitness markazi, yopiq suzish havzasi, fin saunasi, turk hammomi, massaj - dam olish va sport uchun zarur bo'lgan barcha qo'shimcha xizmatlar Grand Capital Hotel mehmonlarini kutmoqda",
    "Milliy lazzat va intererning nafisligi, eng zamonaviy xalqaro xizmat ko'rsatish standartlari bilan uyg'unlashgan holda, ushbu mehmonxonani chinakam noyob qiladi.",
  ];

  return (
    <div className="reservationWay">
      <div className="container">
        <div className="reservationWay-box">
          <div className="reservationWay-title">
            <h3>{t("main.header.title")}</h3>
          </div>
          <div className="reservationWay-description">
            <h5>{t("main.wayToReser.descrTitle")}</h5>
            <div className="reservationWay-description_items">
              <p>{t("main.wayToReser.descriptOne")}</p>
              <p>{t("main.wayToReser.descriptTwo")}</p>
              <p>{t("main.wayToReser.descriptThree")}</p>
              <p>{t("main.wayToReser.descriptFour")}</p>
              <p>{t("main.wayToReser.descriptFive")}</p>
              <p>{t("main.wayToReser.descriptSix")}</p>
            </div>
            <div className="reservationWay-btn">
              <a href="#Bron">
                <button>
                  {t("main.wayToReser.btn")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
