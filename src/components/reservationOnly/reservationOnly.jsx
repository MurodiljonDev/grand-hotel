import React from "react";

import { Input } from "@mui/base/Input";
import Choise from "../choiseSelect/choise";
import ChoiseRooms from "../choiseTenNums/choiseRooms";
import InputMultiline from "../areaMuiComponent/textareaMui";

import "./reservationOnly.scss";

const ReservationOnly = () => {
  return (
    <div className="reservation" id="Bron">
      <div className="container">
        <div className="reservation-box">
          <h3>Xonani bron qilish uchun ariza</h3>
          <div className="reservation-rows">
            <div className="reservation-rows_group">
              <div className="reservation-row_item">
                <em>Ism</em>
                <Input type="text" />
              </div>
              <div className="reservation-row_item">
                <em>Familiya</em>
                <Input type="text" />
              </div>
              <div className="reservation-row_item">
                <em>Email</em>
                <Input type="email" />
              </div>
            </div>
            <div className="reservation-rows_group">
              <div className="reservation-row_item">
                <em>Kelish sanasi</em>
                <Input type="date" />
              </div>
              <div className="reservation-row_item">
                <em>Ketish sanasi</em>
                <Input type="date" />
              </div>
              <div className="reservation-row_item">
                <em>Xona turi</em>
                <div className="choose_wrapper">
                  <Choise />
                </div>
              </div>
            </div>
            <div className="reservation-rows_group">
              <div className="reservation-row_item">
                <em>Kattalar soni</em>
                <ChoiseRooms />
              </div>
              <div className="reservation-row_item">
                <em>Bolalar Soni</em>
                <Choise
                  optionOne={"1"}
                  optionTwo={"2"}
                  optionThree={"3"}
                  optionFour={"4"}
                />
              </div>
              <div className="reservation-row_item">
                <em>Xonalar soni</em>
                <ChoiseRooms />
              </div>
            </div>
            <div className="reservation-remember">
              <em>Eslatma</em>
              <InputMultiline />
              <button type="submit">So'rovni yuboring.</button>
              <p>
                Biz, albatta, sizning xabaringizga javob berishga yoki siz bilan
                bog'lanishga harakat qilamiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationOnly;
