import React from "react";
import CommonSection from "../Vehicle Management/CommonSection";
import CarItem from "../Vehicle Management/CarItem";
import Data from "../Vehicle Management/Data";

const VehicleDashboard = () => {
  // Define your Data array here
  const Data = [
    { id: 1, /* other properties */ },
    { id: 2, /* other properties */ },
    // Add more objects as needed
  ];

  return (
    <div>
      {/* Use { } for JSX comments */}
      {/* <PageHelmet title="Cars"> */}
      <CommonSection title="Vehicle Dashboard" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </div>

            {/* Map over Data array */}
            {Data.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      {/* </PageHelmet> */}
    </div>
  );
};

export default VehicleDashboard;
