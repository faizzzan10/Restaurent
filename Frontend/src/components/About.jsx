import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At [Hotel Name], we take pride in offering an extraordinary culinary 
            experience that rivals the best in the world. Our on-site restaurant features a 
            menu curated by acclaimed chefs, blending the finest local ingredients with 
            international flavors to create dishes that are as innovative as they are delicious. 
            Whether you're in the mood for a gourmet meal in an elegant setting or a casual bite by 
            the pool, our dining options cater to every palate. From breakfast to late-night dining, 
            you can indulge in exquisite cuisine that reflects the best of [local cuisine], while 
            our carefully selected wine and cocktail list complements each dish perfectly. 
            For those with special dietary needs, our chefs are more than happy to accommodate, 
            ensuring every meal is a memorable one. At [Hotel Name], dining is not just a necessity—it's an experience.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;