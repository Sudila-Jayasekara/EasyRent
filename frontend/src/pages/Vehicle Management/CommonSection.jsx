import React from "react";

const CommonSection = ({ title }) => { 
  return (
    <section
      className="common__section mb-5"
      style={{
        background:
          "linear-gradient(rgb(0, 13, 107, 0.6), rgb(0, 13, 107, 0.6)), url('../assets/all-images/drive.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "80px 0px"
      }}
    >
      <div className="container text-center">
        <h1 className="text-light">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
