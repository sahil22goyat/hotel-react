import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-top">
        <p className="testimonial-subheading">Client Testimonial</p>
        <h1 className="testimonial-heading">What Our Clients Say</h1>
        <p className="testimonial-text">
          "I've been consistently impressed with the quality and variety of meals offered by PickMeals. Every dish is a delightful balance of flavor and nutrition, making healthy eating enjoyable and convenient."
        </p>
      </div>
      <div className="testimonial-bottom">
        <img src={ProfilePic} alt="John Doe" className="testimonial-avatar" />
        <p className="testimonial-content">
          "The service provided by PickMeals is exceptional. From quick deliveries to personalized meal choices, they've exceeded my expectations. It's a relief knowing I can rely on them for my dietary needs."
        </p>
        <div className="testimonial-stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 className="testimonial-name">John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
