import React from "react";

const PageHelmet = (props) => {
  document.title = "Rent Car Service - " + props.title;
  return <div className="w-100">{props.children}</div>; 
};

export default PageHelmet;