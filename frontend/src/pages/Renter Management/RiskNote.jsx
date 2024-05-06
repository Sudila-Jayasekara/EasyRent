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
    // If the same vehicle is clicked again, deselect it
    if (selectedVehicle && selectedVehicle._id === vehicle._id) {
      setSelectedVehicle(null);
      setSearchValue(""); // Clear the search value
      setFormData((prevState) => ({ ...prevState, vehiclenumber: "" })); // Clear the vehicle number in formData
    } else {
      setSelectedVehicle(vehicle);
      setSearchValue(vehicle.vehicleNumber); // Update searchValue with the selected vehicle's number
      setFormData((prevState) => ({
        ...prevState,
        vehiclenumber: vehicle.vehicleNumber,
      })); // Update formData with the selected vehicle's number
    }
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
    } else if (name === "search") {
      setSearchValue(value.toUpperCase()); // Convert the entered value to uppercase
      setSelectedVehicle(null); // Clear selected vehicle when typing in the search bar
      setFormData((prevState) => ({ ...prevState, vehiclenumber: "" })); // Clear vehicle number in formData when typing in the search bar
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const filteredVehicles = vehicles?.filter((vehicle) =>
    vehicle.vehicleNumber && vehicle.vehicleNumber.includes(searchValue)
  ) ?? [];
  
  
  

  const handleRemovePhoto = (indexToRemove) => {
    // Create a new array without the photo to be removed
    const updatedPhotos = photos.filter((_, index) => index !== indexToRemove);
    // Update the state with the new array of photos
    setPhotos(updatedPhotos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim()) {
      alert("Please enter a name.");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (!formData.nic.trim()) {
      alert("Please enter a NIC.");
      return;
    }

    // Validation for Customer Address Section
    if (!formData.address.trim()) {
      alert("Please enter an address.");
      return;
    }

    // Validation for Accident Details Section
    if (!searchValue.trim()) {
      alert("Please search and select a vehicle number.");
      return;
    }
    if (!formData.vehiclenumber.trim()) {
      alert("Please enter a vehicle number.");
      return;
    }
    if (!formData.accidentAddress.trim()) {
      alert("Please enter an accident address.");
      return;
    }
    if (!formData.accidentDate) {
      alert("Please select an accident date.");
      return;
    }
    if (!formData.accidentTime) {
      alert("Please select an accident time.");
      return;
    }
    if (!formData.accidentDescription.trim()) {
      alert("Please enter an accident description.");
      return;
    }
    if (photos.length === 0) {
      alert("Please upload at least one accident photo.");
      return;
    }

    // Validation for About Accident Section
    if (!formData.injuries.trim()) {
      alert("Please enter details about injuries.");
      return;
    }
    if (!formData.legalAndInsuranceInfo.trim()) {
      alert("Please enter legal and insurance information.");
      return;
    }
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Trigger search functionality here
      // For example, you can filter vehicles based on the search value
      const filteredVehicles = vehicles.filter((vehicle) =>
        vehicle.vehicleNumber.includes(searchValue)
      );
      // Optionally, you can perform further actions such as selecting the first item from the filtered list
      if (filteredVehicles.length > 0) {
        handleSelectVehicle(filteredVehicles[0]);
      }
    }
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold text-center">
                  Accident Details
                </h6>
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
                          disabled
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
                          disabled
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
                          disabled
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
                          disabled
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
                          disabled
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
                            value={searchValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown} // Call handleKeyDown function when a key is pressed
                            name="search"
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
                          type="date"
                          value={formData.accidentDate}
                          onChange={handleChange}
                          name="accidentDate"
                          max={new Date().toISOString().split("T")[0]}
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
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Submit
                </button>
              </div>
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
