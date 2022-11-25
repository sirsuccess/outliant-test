import React from "react";
import Ring from "../assets/images/service-ring.webp";
import Ball from "../assets/images/service-ball.webp";
const Service = () => {
  return (
    <section className="service_container">
      <div className="service-row">
        <div className="diamond" />
        <div className="empty-divs" ></div>
        <div className="empty-divs"></div>
        <div className="empty-divs"></div>
        <div className="v" />
        <div className="empty-divs"></div>
      </div>
      <div className="service">
        <div className="service-left" >
          <img src={Ring} alt=" a ring" className="image" data-aos="flip-left" data-aos-duration="2000" />
        </div>
        <div className="service-right">
          <h1 className="title" data-aos="zoom-in" data-aos-duration="2000">
            Design and build the future of the internet.
          </h1>
          <p className="description" data-aos="fade-up" data-aos-duration="2000">
            We believe that in the near future every website will have an AR/VR
            experience (Responsive XR; Responsive Reality) — a near identical
            adoption we saw with smartphones and responsive web. We’re here to
            accelerate this adoption by making building websites in XR
            intuitive, easy, and fun.
          </p>
          <button className="join-button" data-aos="fade-up" data-aos-duration="2000">JOIN OUR MOVEMENT</button>
        </div>
      </div>
      <div className="ball-container">
        <img src={Ball} alt="a ball" className="ball" />
      </div>{" "}
    </section>
  );
};

export default Service;
