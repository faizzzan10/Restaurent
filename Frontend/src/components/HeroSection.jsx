import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
       <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Premium</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./premium.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Hotel</h1>
                <h1 className="title dishes_title">Reservation</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="dish.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;