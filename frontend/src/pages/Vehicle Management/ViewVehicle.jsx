import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewVehicle = () => {
  const { vehicleId } = useParams();

  const [vehicle, setVehicle] = useState({
    brand: "",
    model: "",
    modelYear: "",
    engineCapacity: "",
    mileage: "",
    totalSeats: "",
  });

  useEffect(() => {
    // Fetch vehicle data
    axios
      .get(`http://localhost:5556/api/vehicle/${vehicleId}`)
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicle:", error);
      });
  }, [vehicleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your update logic here
    console.log("Updating vehicle:", vehicle);
    try {
      const response = await axios.put(
        `http://localhost:5556/api/vehicle/${vehicleId}`,
        vehicle
      );
      console.log("Updated vehicle:", response.data);
      // Redirect or show a success message
    } catch (error) {
      console.error("Error updating vehicle:", error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mb-28 bg-white">
          <div className="p-2 md:p-4  justifyContent: 'center'">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="mx-auto pl-6 text-2xl font-bold text-red-700 sm:text-center ml-96">
                Vehicle Details{" "}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                <div className="mx-auto block max-w-lg rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark ml-52">
                  <form className="w-96 " onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                      <div>
                        <label
                          htmlFor="brand"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Brand{" "}
                        </label>
                        <input
                          type="text"
                          id="brand"
                          name="brand"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={vehicle.brand}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="model"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Model
                        </label>
                        <input
                          type="text"
                          id="model"
                          name="model"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={vehicle.model}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="totalSeats"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Total Seats
                        </label>
                        <input
                          type="number"
                          id="totalSeats"
                          name="totalSeats"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={vehicle.totalSeats}
                          onChange={handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="modelYear"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Model Year
                      </label>
                      <input
                        type="text"
                        id="modelYear"
                        name="modelYear"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={vehicle.modelYear}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="engineCapacity"
                        className="block mb-2 mt-4 text-sm font-medium text-gray-900"
                      >
                        Engine Capacity
                      </label>
                      <input
                        type="text"
                        id="engineCapacity"
                        name="engineCapacity"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={vehicle.engineCapacity}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="mileage"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Mileage
                      </label>
                      <input
                        type="text"
                        id="mileage"
                        name="mileage"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={vehicle.mileage}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                    >
                      Update Vehicle
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewVehicle;
