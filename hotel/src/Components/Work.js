import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      "image": "PickMeals",
      "title": "Pick Meals",
      "text": "Choose from a variety of delicious and nutritious meals tailored to your preferences. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci arcu, sagittis et sagittis nec, elementum vel nisi. Fusce interdum facilisis bibendum."
    },
    {
      "image": "ChooseMeals",
      "title": "Choose How Often",
      "text": "Decide how frequently you want your meals delivered. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci arcu, sagittis et sagittis nec."
    },
    {
      "image": "DeliveryMeals",
      "title": "Fast Deliveries",
      "text": "Enjoy fast and reliable deliveries right to your doorstep. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci arcu, sagittis et lorem ipsum."
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Those who think they have no time for healthy eating will sooner or later have to find time for illness
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
