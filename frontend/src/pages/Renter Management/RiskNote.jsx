import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const RiskNote = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:5556/api/vehicle");
        if (response.ok) {
          const data = await response.json();
          setVehicles(data);
        } else {
          throw new Error("Failed to fetch vehicles");
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchVehicles();
  }, []);

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setSearchValue(vehicle.vehicleNumber);
  };

  const handleUploadPhotos = (e) => {
    const newPhotos = Array.from(e.target.files);
    setPhotos(newPhotos);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const renterdetail = location.state.renterDetail;

  const printtoPdf = useRef();

  const handlePrint = useReactToPrint({
    content: () => printtoPdf.current,
    documentTitle: "Renter Details",
    onAfterPrint: () => alert("Printed Successfully"),
  });

  const [formData, setFormData] = useState({
    username: renterdetail.username,
    email: renterdetail.email,
    nic: renterdetail.nic,
    address: renterdetail.address,
    phoneNumber: renterdetail.phoneNumber,
    accidentAddress: "",
    accidentDate: "",
    accidentTime: "",
    accidentDescription: "",
    injuries: "",
    legalAndInsuranceInfo: "",
    vehiclenumber: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "accidentPhotos") {
      setPhotos(files);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Update searchValue only if the input field is for search
      if (name === "search") {
        setSearchValue(value);
      }

      // Update formData.vehiclenumber when a vehicle is selected
      if (name === "search" && filteredVehicles.length === 1) {
        setFormData((prevState) => ({
          ...prevState,
          vehiclenumber: filteredVehicles[0].vehicleNumber,
        }));
      }
    }
  };

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.vehicleNumber.includes(searchValue)
  );
  const handleRemovePhoto = (indexToRemove) => {
    // Create a new array without the photo to be removed
    const updatedPhotos = photos.filter((_, index) => index !== indexToRemove);
    // Update the state with the new array of photos
    setPhotos(updatedPhotos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      photos.forEach((photo) => {
        formDataToSend.append("accidentPhotos", photo);
      });

      const response = await fetch("http://localhost:5556/api/risk", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Risk added successfully");
        navigate("/risk-details"); // Navigate to the new page after successful form submission
      } else {
        const errorData = await response.json();
        console.error("Error submitting risk:", errorData);
      }
    } catch (error) {
      console.error("Error submitting risk:", error);
    }
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Accident Details
                </h6>
                <button
                  onClick={handlePrint}
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Download Info
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div ref={printtoPdf}>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={renterdetail.username}
                          name="username"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={renterdetail.email}
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={renterdetail.phoneNumber}
                          name="phoneNumber"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          NIC
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={renterdetail.nic}
                          name="nic"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Customer Address
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={renterdetail.address}
                          name="address"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Where the Accident Took Place
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        {/* Search bar for vehicle number */}
                        <div className="relative w-full mb-3">
                          <input
                            type="search"
                            placeholder="Search Vehicle Number"
                            value={formData.vehiclenumber}
                            onChange={handleChange}
                            name="search" // Set the name attribute to "search"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>

                        {/* Display vehicle details as card views */}
                        <div className="flex flex-wrap">
                          {filteredVehicles.map((vehicle) => (
                            <div
                              key={vehicle._id}
                              className="w-full lg:w-6/12 px-4"
                            >
                              {/* Card view for each vehicle */}
                              <div
                                className={`relative w-full mb-3 cursor-pointer ${
                                  selectedVehicle &&
                                  selectedVehicle._id === vehicle._id
                                    ? "border border-blue-500"
                                    : ""
                                }`}
                                onClick={() => handleSelectVehicle(vehicle)}
                              >
                                <div>
                                  <h3>{vehicle.vehicleNumber}</h3>
                                  {/* Display other relevant vehicle details */}
                                  {/* Example: Brand, Model, Year, etc. */}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="vehicleNumber"
                            >
                              Vehicle Number
                            </label>
                            <input
                              type="text"
                              id="vehicleNumber"
                              name="vehiclenumber"
                              value={formData.vehiclenumber}
                              onChange={handleChange}
                              placeholder="Enter Vehicle Number"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                          </div>
                        </div>

                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={formData.accidentAddress}
                          name="accidentAddress"
                          onChange={handleChange}
                          placeholder="Enter Where the accident happened"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Date
                        </label>
                        <input
                          type="Date"
                          value={formData.accidentDate}
                          onChange={handleChange}
                          name="accidentDate"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          value={formData.accidentTime}
                          onChange={handleChange}
                          name="accidentTime"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    About Accident
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Description
                        </label>
                        <textarea
                          type="text"
                          value={formData.accidentDescription}
                          onChange={handleChange}
                          name="accidentDescription"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Short Description about the Accident"
                          rows="4"
                        ></textarea>
                      </div>
                      {/* <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      > */}

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="accidentPhotos"
                          >
                            Accident Photos
                          </label>
                          {/* Modified file input to allow multiple file selection */}
                          <input
                            type="file"
                            id="accidentPhotos"
                            name="accidentPhotos"
                            onChange={handleUploadPhotos}
                            className="hidden"
                            multiple // Allow multiple file selection
                          />
                          {/* Button to trigger file input */}
                          <label
                            htmlFor="accidentPhotos"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                          >
                            Select Photos
                          </label>
                          {/* Display selected photos preview */}
                          <div className="mt-2 grid grid-cols-3 gap-4">
                            {photos.map((photo, index) => (
                              <div key={index} className="relative">
                                <img
                                  src={URL.createObjectURL(photo)}
                                  alt={`Photo ${index + 1}`}
                                  className="w-full h-auto"
                                />
                                {/* Add remove button */}
                                <button
                                  onClick={() => handleRemovePhoto(index)}
                                  className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full"
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* <label
                        className="block uppercase text-blueGray-600 text-xs mt-2 font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        vehicleNumber
                      </label>
                      <input
                        type="text"
                        value={formData.vehiclenumber}
                        onChange={handleChange}
                        name="vehiclenumber"
                        placeholder="details About Injuries"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      /> */}
                      <label
                        className="block uppercase text-blueGray-600 text-xs mt-2 font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Injuries
                      </label>
                      <input
                        type="text"
                        value={formData.injuries}
                        onChange={handleChange}
                        name="injuries"
                        placeholder="details About Injuries"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <label
                        className="block uppercase mt-2 text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Legal and Insurance Information
                      </label>
                      <input
                        type="text"
                        value={formData.legalAndInsuranceInfo}
                        onChange={handleChange}
                        name="legalAndInsuranceInfo"
                        placeholder="details about Legal and Insuarance Information"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <footer className="relative pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default RiskNote;
