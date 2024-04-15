import React from "react";
import { Link } from "react-router-dom";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
      <div className="car__item" style={{ border: "1px solid #7c8a9736", padding: "20px", borderRadius: "5px" }}>
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center" style={{ fontSize: "1.8rem" }}>{carName}</h4>
          <h6 className="rent__price text-center mt-" style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1" style={{ color: "#f9a826", fontSize: "1.1rem" }}>
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1" style={{ color: "#f9a826", fontSize: "1.1rem" }}>
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1" style={{ color: "#f9a826", fontSize: "1.1rem" }}>
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className="w-50 car__item-btn car__btn-rent" style={{ borderRadius: "4px 0px 0px 4px", border: "none", outline: "none", background: "#000d6b", padding: "8px 0px", fontSize: "0.9rem" }}>
            <Link to={`/cars/${carName}`} style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}>Rent</Link>
          </button>

          <button className="w-50 car__item-btn car__btn-details" style={{ borderRadius: "0px 4px 4px 0px", border: "none", outline: "none", background: "#f9a826", padding: "8px 0px", fontSize: "0.9rem" }}>
            <Link to={`/cars/${carName}`} style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
