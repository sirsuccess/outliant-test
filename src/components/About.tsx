import React from "react";
import Sphere from "../assets/images/about-sphere.webp";
import Innovation from "../assets/images/about-innovation.webp";
const About = () => {
  return (
    <section className="about-container">
      <div className="about-row">
        <div className="square" data-aos="zoom-in" data-aos-duration="2000"/>
        <div className="empty-divs"></div>
        <div className="arrow" data-aos="fade-down" data-aos-duration="2000"></div>
        <div className="empty-divs span"></div>
        <div className="diamond" />
      </div>
      <div className="about">
        <div className="about-left">
          <h1 className="title" data-aos="zoom-in" data-aos-duration="2000">
            Our mission is to bring the entire web to XR
          </h1>
          <p className="left-details">
            We're looking for the best designers, engineers, and free-thinkers
            to help define the future of The Internet and help bring our vision
            of XR to reality. If this is you, please consider joining our
            movement.
          </p>
          <div className="left-bottom">
            <div className="about-button">
              <button data-aos="fade-up" data-aos-duration="2000">JOIN OUR MOVEMENT</button>
            </div>
            <div className="empty-div"></div>
          </div>
        </div>
        <div className="about-right">
          <img src={Sphere} alt=" a sphere shape" className="image" data-aos="zoom-in" data-aos-duration="2000" />
          <p className="right-details"data-aos="fade-up" data-aos-duration="2000" >
            We're looking for the best designers, engineers, and free-thinkers
            to help define the future of The Internet and help bring our vision
            of XR to reality. If this is you, please consider joining our
            movement.
          </p>
        </div>
      </div>

      <img
        src={Innovation}
        alt="a lady wearing a vr"
        className="innovation-image"
      />
    </section>
  );
};

export default About;
