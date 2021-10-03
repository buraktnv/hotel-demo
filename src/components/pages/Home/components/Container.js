import React, { useState } from "react";
import {
  star,
  optionIcon,
  optionIcon2,
  wallet,
  calender,
  time,
  wifi,
  check,
  serving,
  star__2,
} from "../assets/icons";

const Container = () => {
  return (
    <main className="content">
      <div className="section-1">
        <div className="introduction">
          <div className="introduction__title">
            Welcome the <br />
            <span className="hotel__name">Baugainvillea</span> Hotel
          </div>
          <div className="introduction__description">
            This quote best describes how we would want our guests to feel.
            Though we are nestled in the heart of Bougainvillea.
          </div>
          <button className="button">DISCOVER MORE</button>
        </div>
      </div>
      <div className="section-2">
        <div className="booking__wrapper">
          <div className="booking">
            <div className="booking__options">
              <div className="booking__option">
                <div className="booking__option__title">CHECK-IN</div>
                <div className="booking__option__date">
                  <div className="booking__option__date__day">28</div>

                  <div className="booking__option__date__month">
                    Jun
                    <br /> {optionIcon}
                  </div>
                </div>
              </div>
              <div className="booking__option">
                <div className="booking__option__title">CHECK-OUT</div>
                <div className="booking__option__date">
                  <div className="booking__option__date__day">30</div>

                  <div className="booking__option__date__month">
                    Jun
                    <br /> {optionIcon}
                  </div>
                </div>
              </div>

              <div className="booking__option">
                <div className="booking__option__title">ADULTS</div>
                <div className="booking__option__date">
                  <div className="booking__option__date__day">1</div>

                  <div className="booking__option__date__month">
                    {optionIcon2}
                    <br /> {optionIcon}
                  </div>
                </div>
              </div>

              <div className="booking__option">
                <div className="booking__option__title">CHILDS</div>
                <div className="booking__option__date">
                  <div className="booking__option__date__day">1</div>

                  <div className="booking__option__date__month">
                    {optionIcon2}
                    <br /> {optionIcon}
                  </div>
                </div>
              </div>
            </div>
            <div className="button__wrapper">
              <button className="button">CHECK AVAILABILITY</button>
            </div>
          </div>
        </div>

        <div className="title">Best Rooms</div>
        <div className="rooms">
          <div className="room">
            <img src="assets/room-1.png" alt="room-1" className="room__image" />
            <div className="room__info">
              <div className="room__info__name">ORIENTAL</div>
              <div className="room__info__icon">
                {new Array(5).fill().map(() => star)}
              </div>
            </div>
          </div>

          <div className="room">
            <img src="assets/room-2.png" alt="room-2" className="room__image" />

            <div className="room__info">
              <div className="room__info__name">SUPREME</div>
              <div className="room__info__icon">
                {new Array(3).fill().map(() => star)}
              </div>
            </div>
          </div>
          <div className="room">
            <img src="assets/room-3.png" alt="room-3" className="room__image" />

            <div className="room__info">
              <div className="room__info__name">FANCY</div>
              <div className="room__info__icon">
                {new Array(5).fill().map(() => star)}
              </div>
            </div>
          </div>
          <div className="room">
            <img src="assets/room-4.png" alt="room-4" className="room__image" />

            <div className="room__info">
              <div className="room__info__name">SIERRA</div>
              <div className="room__info__icon">
                {new Array(5).fill().map(() => star)}
              </div>
            </div>
          </div>
          <div className="room">
            <img src="assets/room-5.png" alt="room-5" className="room__image" />
            <div className="room__info">
              <div className="room__info__name">IVORY</div>
              <div className="room__info__icon">
                {new Array(3).fill().map(() => star)}
              </div>
            </div>
          </div>
          <div className="room">
            <img src="assets/room-1.png" alt="room-1" className="room__image" />
            <div className="room__info">
              <div className="room__info__name">ATLANTIS</div>
              <div className="room__info__icon">
                {new Array(5).fill().map(() => star)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="title">
          Why Choose <span className="hotel__name">Bougainvillea</span>
        </div>
        <div className="benefits">
          <div className="benefit">
            <div className="benefit__icon">{wallet}</div>
            <div className="benefit__info">
              <div className="benefit__info__title">Best Price Guarantee</div>
              <div className="benefit__info__text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae. Suspendisse sollicitudin velit sed leo.
              </div>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__icon">{calender}</div>
            <div className="benefit__info">
              <div className="benefit__info__title">
                Book Now to Secure Availability
              </div>
              <div className="benefit__info__text">
                Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet,
                tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.
              </div>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__icon">{time}</div>
            <div className="benefit__info">
              <div className="benefit__info__title">
                Late Check-out on Request
              </div>
              <div className="benefit__info__text">
                Quisque diam lorem, interdum vitae,dapibus ac, scelerisque
                vitae, pede. Donec eget tellus non erat lacinia fermentum.
              </div>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__icon">{wifi}</div>
            <div className="benefit__info">
              <div className="benefit__info__title">Free Wi-Fi Available</div>
              <div className="benefit__info__text">
                Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis
                lacinia est. Proin dictum elementum velit. Fusce euismod
                consequat ante.
              </div>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__icon">{check}</div>
            <div className="benefit__info">
              <div className="benefit__info__title">
                Meetings & Special Events
              </div>
              <div className="benefit__info__text">
                Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan
                nulla vel diam. Sed in lacus ut enim adipiscing aliquet.
              </div>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__icon">{serving}</div>
            <div className="benefit__info">
              <div className="benefit__info__title">
                Free Cancellation Anytime
              </div>
              <div className="benefit__info__text">
                In pede mi, aliquet sit amet, euismod in,auctor ut, ligula.
                Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis
                quis, lobortis dignissim.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-4">
        <div className="comment">
          <div className="comment__rate">
            {new Array(5).fill().map(() => star__2)}
          </div>
          <div className="comment__text">
            <div className="comment__text__primary">‘‘</div> The hotel located
            in the city center and lots of public transport, nearby restaurants,
            bars etc. The hotel staff are nice and friendly. The room a bit
            small but the bed is really comfortable.{" "}
            <div className="comment__text__primary">’’</div>
          </div>
          <div className="comment__author">HANNAH & STEVE CHRISTIAN</div>
        </div>
      </div>

      <div className="section-5">
        <div className="title">Feel Special</div>
        <div className="cards">
          <div className="card">
            <img
              src="assets/card-image-1.png"
              alt="Special SPA Center"
              className="card__image"
            />
            <div className="card__title">Special SPA Center</div>
            <div className="card__text">
              Designed with a naturally lit, 18-meter lap pool and
              state-of-the-art technogym fitness center, square nine’s tranquil
              wellness sanctuary is equipped with sauna and steam rooms,
              japanese ofuro tub...
            </div>
            <a href="/" className="card__link">
              LEARN MORE
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="card__link__icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.70816 0.292893C6.31764 -0.0976311 5.68447 -0.0976311 5.29395 0.292893C4.90342 0.683417 4.90342 1.31658 5.29395 1.70711L8.58814 5.0013H1C0.447715 5.0013 0 5.44901 0 6.0013C0 6.55358 0.447715 7.0013 1 7.0013H8.58795L5.29395 10.2953C4.90342 10.6858 4.90342 11.319 5.29395 11.7095C5.68447 12.1 6.31764 12.1 6.70816 11.7095L11.6962 6.72147C11.885 6.53957 12.0024 6.28415 12.0024 6.0013C12.0024 5.81684 11.9525 5.64405 11.8654 5.49571C11.8444 5.45991 11.821 5.42513 11.7951 5.39162C11.7669 5.35493 11.7361 5.32026 11.7031 5.28785L6.70816 0.292893Z"
                  fill="#65CCA9"
                />
              </svg>
            </a>
          </div>
          <div className="card">
            <img
              src="assets/card-image-2.png"
              alt="Unique World Kitchen"
              className="card__image"
            />
            <div className="card__title">Unique World Kitchen</div>
            <div className="card__text">
              Intimate lobby bar, fine dining room and courtyard, or rooftop
              japanese restaurant, square nine’s elegant atmosphere,
              international wine and spirit lists, and world-class cuisine
              render it among...
            </div>
            <a href="/" className="card__link">
              LEARN MORE
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="card__link__icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.70816 0.292893C6.31764 -0.0976311 5.68447 -0.0976311 5.29395 0.292893C4.90342 0.683417 4.90342 1.31658 5.29395 1.70711L8.58814 5.0013H1C0.447715 5.0013 0 5.44901 0 6.0013C0 6.55358 0.447715 7.0013 1 7.0013H8.58795L5.29395 10.2953C4.90342 10.6858 4.90342 11.319 5.29395 11.7095C5.68447 12.1 6.31764 12.1 6.70816 11.7095L11.6962 6.72147C11.885 6.53957 12.0024 6.28415 12.0024 6.0013C12.0024 5.81684 11.9525 5.64405 11.8654 5.49571C11.8444 5.45991 11.821 5.42513 11.7951 5.39162C11.7669 5.35493 11.7361 5.32026 11.7031 5.28785L6.70816 0.292893Z"
                  fill="#65CCA9"
                />
              </svg>
            </a>
          </div>
          <div className="card">
            <img
              src="assets/card-image-3.png"
              alt="Award-Winning Bar"
              className="card__image"
            />
            <div className="card__title">Award-Winning Bar</div>
            <div className="card__text">
              Square nine overlooks trendy dorcol, one of the belgrade’s oldest
              neighbourhoods. The hotel is walking distance to many popular
              sites including knez mihailova, the city’s bustling pedestrian
              boulevard...
            </div>
            <a href="/" className="card__link">
              LEARN MORE
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="card__link__icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.70816 0.292893C6.31764 -0.0976311 5.68447 -0.0976311 5.29395 0.292893C4.90342 0.683417 4.90342 1.31658 5.29395 1.70711L8.58814 5.0013H1C0.447715 5.0013 0 5.44901 0 6.0013C0 6.55358 0.447715 7.0013 1 7.0013H8.58795L5.29395 10.2953C4.90342 10.6858 4.90342 11.319 5.29395 11.7095C5.68447 12.1 6.31764 12.1 6.70816 11.7095L11.6962 6.72147C11.885 6.53957 12.0024 6.28415 12.0024 6.0013C12.0024 5.81684 11.9525 5.64405 11.8654 5.49571C11.8444 5.45991 11.821 5.42513 11.7951 5.39162C11.7669 5.35493 11.7361 5.32026 11.7031 5.28785L6.70816 0.292893Z"
                  fill="#65CCA9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Container;
