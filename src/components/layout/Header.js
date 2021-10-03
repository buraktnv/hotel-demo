import React from "react";
import { logo } from "../pages/Home/assets/icons";

const header = () => {
  return (
    <div className="header">
      <div className="header__logo">{logo}</div>
      <div className="header__menu__sandwich">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12H8"
            stroke="#4C997F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 6H3"
            stroke="#4C997F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 18H6"
            stroke="#4C997F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="header__menu">
        <span className="header__menu__element">HOME</span>
        <span className="header__menu__element">ROOMS</span>
        <span className="header__menu__element">GALLERY</span>
        <span className="header__menu__element">ABOUT</span>
      </div>
      <button className="header__button">BOOK NOW</button>
    </div>
  );
};

export default header;
