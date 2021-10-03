import React from "react";
import { logo } from "../pages/Home/assets/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__element">
        <div className="footer__element__logo">{logo}</div>
        <div className="footer__element__item">© 2010 — 2020</div>
        <div className="footer__element__item">Privacy — Terms</div>
      </div>
      <div className="footer__element">
        <div className="footer__element__title">Contact</div>
        <div className="footer__element__item">
          10, Clopotarii Vechi St. Zurich
        </div>
        <div className="footer__element__item">+41 (44) 325 54 52</div>
        <div className="footer__element__item">info@bougainvillea.com</div>
      </div>
      <div className="footer__element">
        <div className="footer__element__title">Product</div>
        <div className="footer__element__item">About</div>
        <div className="footer__element__item">Special Offers</div>
        <div className="footer__element__item">News</div>
        <div className="footer__element__item">Contact Us</div>
      </div>
      <div className="footer__element">
        <div className="footer__element__title">Features</div>
        <div className="footer__element__item">Wellness & Spa</div>
        <div className="footer__element__item">Restaurants & Bars</div>
        <div className="footer__element__item">Excursions</div>
        <div className="footer__element__item">Events</div>
      </div>
      <div className="footer__element">
        <div className="footer__element__title">Resources</div>
        <div className="footer__element__item">Classic</div>
        <div className="footer__element__item">Superior</div>
        <div className="footer__element__item">Deluxe</div>
        <div className="footer__element__item">Master</div>
      </div>
    </div>
  );
};

export default Footer;
