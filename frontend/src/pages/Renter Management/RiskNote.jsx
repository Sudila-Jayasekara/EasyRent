import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation, useNavigate } from "react-router-dom";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const RiskNote = () => {

  const [photos, setPhotos] = useState([]);
  const handleUploadPhotos=(e)=>{
    const newPhotos=e.target.files;
    setPhotos((prevPhotos)=>[...prevPhotos,...newPhotos]);
  }
  const handleDragPhotos=(result)=>{
    if(!result.destination) return;
    const items=Array.from(photos);
    const [reorderedItem]=items.splice(result.source.index,1);
    items.splice(result.destination.index,0,reorderedItem);
    setPhotos(items);
  }

  const handleRemovePhoto=(indexToRemove)=>{
    setPhotos((prevPhotos)=>prevPhotos.filter((_,index)=>index!==indexToRemove));
  }
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
    accidentPhotos: [],
    injuries: "",
    legalAndInsuranceInfo: "",
    vehiclenumber: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "accidentPhotos") {
      // If the input field is for file upload
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Update the state with the file
      }));
    } else {
      // For other input fields
      setFormData((prevState) => ({
        ...prevState,
        [name]: value, // Update the state with the value of the input field
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5556/api/risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Risk added successfully");
        navigate("/viewrenter");
      } else {
        // Handle error response from server
        const errorData = await res.json();
        // Display error message or handle appropriately
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
                      
                      
                      <h1 className="mb-5">Accident Photos</h1>  
                     
                     <DragDropContext onDragEnd={handleDragPhotos}>
                       <Droppable droppableId="photos" direction="horizontal">
                         {(provided) => (
                           <div className="photos" {...provided.droppableProps} ref={provided.innerRef}>
                             {/* Remove the condition to always display file input */}
                             <input id="image" type="file" style={{ display: "none" }} accept="image/*" onChange={handleUploadPhotos} multiple />
                             <label htmlFor="image" className="border-0 px-3 py-3 m-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 cursor-pointer mt-2">Upload Photos</label>
                             
                             {/* Render uploaded photos */}
                             {photos.map((photo, index) => (
                               <Draggable key={index} draggableId={index.toString()} index={index}>
                                 {(provided) => (
                                   <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                     {/* Apply fixed size to images */}
                                     <img src={URL.createObjectURL(photo)} alt="accident Photos" style={{ width: "200px", height: "150px", objectFit: "cover" }} />
                                     <button onClick={() => handleRemovePhoto(index)}>Remove</button>
                                   </div>
                                 )}
                               </Draggable>
                             ))}
                             
                             {provided.placeholder}
                           </div>
                         )}
                       </Droppable>
                     </DragDropContext>
                     
                     

                      <label
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
                      />
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
