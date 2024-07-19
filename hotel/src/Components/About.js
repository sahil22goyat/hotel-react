import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Take care of your body. It's the only place you have to live
        </p>
        <p className="primary-text">
        Let food be thy medicine, and medicine be thy food
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">contact for More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch time
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
