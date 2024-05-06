import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VehicleAdd = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    modelYear: '',
    engineCapacity: '',
    mileage: '',
    totalSeats: '',
    transmission: '',
    price: '',
    vehicleNumber:'',
    startDate:''
  });
  const user = JSON.parse(localStorage.getItem('user'));
  

  const [formErrors, setFormErrors] = useState({
    brand: '',
    model: '',
    modelYear: '',
    engineCapacity: '',
    mileage: '',
    totalSeats: '',
    transmission: '',
    price: '',
    vehicleNumber:'',
    startDate:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation rules
    if (name === "brand" && !/^[A-Za-z ]+$/.test(value)) {
      errorMessage = value.trim() === '' ? 'Brand is required' : '';
      return;
    }
    if (name === "model" && !/^[A-Za-z ]+$/.test(value)) {
      return;
    }

    switch (name) {
   
      case 'modelYear':
        errorMessage = isNaN(value) || value < 1900 || value > new Date().getFullYear() ? 'Invalid model year' : '';
        break;
      case 'engineCapacity':
        errorMessage = isNaN(value) ? 'Engine capacity must be a number' : '';
        break;
      case 'mileage':
        errorMessage = isNaN(value) ? 'Mileage must be a number' : '';
        break;
      case 'totalSeats':
        errorMessage = isNaN(value) || value < 1 ? 'Total seats must be a positive number' : '';
        break;
      case 'transmission':
        errorMessage = value.trim() === '' ? 'Transmission is required' : '';
        break;
        case 'vehicleNumber':
         
    
            if (name === "vehicleNumber") {
              if (!/^(\d{0,7}|[A-Za-z]+\d*)$/.test(value)) {
                return;
              }
              if (!/^\d{0,7}[A-Za-z]{0,3}\d{0,4}$/.test(value)) {
                return;
              }
              if (!/^\d{0,7}[A-Za-z]{0,3}\d{0,4}$/.test(value)) {
                return;
              } if (!/^([A-Za-z]\d*|[A-Za-z]{2,}\d*)$/.test(value)) {
                return;
              }
               
            }
        
        break;
      case 'price':
        errorMessage = isNaN(value) || value <= 0 ? 'Price must be a positive number' : '';
        break;
      default:
        break;
        case 'startDate':
          errorMessage = value.trim() === '' ? 'Date is required' : '';
          break;
    }

    // Update state with new form data and error message
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors((prevState) => ({
      ...prevState,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any errors
    const hasErrors = Object.values(formErrors).some((error) => error !== '');

    if (hasErrors) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }

    // Include owner email address in form data
    const formDataWithOwner = {
      ...formData,
      ownerEmail: user.email // Assuming user object has email property
    };

    // Proceed with form submission
    try {
      const res = await fetch('api/vehicle/vehicleadd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithOwner), // Pass formDataWithOwner instead of formData
      });

      const data = await res.json();
      console.log(data);
      if (data.status) {
        alert('Details submitted');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };
  

  return (
    <div className="py-6 bg-amber-300">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp4848993.jpg')" }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-black text-center">EasyRent</h2>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-red-600 font-bold uppercase mt-4 mb-5">
              Welcome
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit}>

  <div className="mt-4">
  
 
    <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
    <input
      value={formData.brand}
      onChange={handleChange}
      name="brand"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.brand && <p className="text-red-500 text-xs mt-1">{formErrors.brand}</p>}
  </div>
  <div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Model</label>
    <input
      value={formData.model}
      onChange={handleChange}
      name="model"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.model && <p className="text-red-500 text-xs mt-1">{formErrors.model}</p>}
  </div>
 

  <div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Number</label>
    <input
      value={formData.vehicleNumber}
      onChange={handleChange}
      name="vehicleNumber"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"            
    />
    {formErrors.vehicleNumber&& <p className="text-red-500 text-xs mt-1">{formErrors.vehicleNumber}</p>}
  </div>

  

  <div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Model Year</label>
    <input
      value={formData.modelYear}
      onChange={handleChange}
      name="modelYear"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.modelYear && <p className="text-red-500 text-xs mt-1">{formErrors.modelYear}</p>}
  </div>
  <div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Engine Capacity (cc)</label>
    <input
      value={formData.engineCapacity}
      onChange={handleChange}
      name="engineCapacity"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.engineCapacity && <p className="text-red-500 text-xs mt-1">{formErrors.engineCapacity}</p>}
  </div>
  <div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Mileage (km)</label>
    <input
      value={formData.mileage}
      onChange={handleChange}
      name="mileage"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.mileage && <p className="text-red-500 text-xs mt-1">{formErrors.mileage}</p>}
  </div>
  <div className="mt-4">
    <div className="flex justify-between">
      <label className="block text-gray-700 text-sm font-bold mb-2">Total seats</label>
    </div>
    <input
      value={formData.totalSeats}
      onChange={handleChange}
      name="totalSeats"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="Number"
    />
    {formErrors.totalSeats && <p className="text-red-500 text-xs mt-1">{formErrors.totalSeats}</p>}
  </div>
  <div className="mt-4">
    <div className="flex justify-between">
      <label className="block text-gray-700 text-sm font-bold mb-2">Transmission</label>
    </div>
    <input
      value={formData.transmission}
      onChange={handleChange}
      name="transmission"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.transmission && <p className="text-red-500 text-xs mt-1">{formErrors.transmission}</p>}
  </div>
  <div className="mt-4">
    <div className="flex justify-between">
      <label className="block text-gray-700 text-sm font-bold mb-2 ">Price (Rs)</label>
    </div>
    <input
      value={formData.price}
      onChange={handleChange}
      name="price"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="text"
    />
    {formErrors.price && <p className="text-red-500 text-xs mt-1">{formErrors.price}</p>}
  </div>
  <div className="mt-4">
    <div className="flex justify-between">
      <label className="block text-gray-700 text-sm font-bold mb-2">Posted On</label>
    </div>
    <input
      value={formData.startDate}
      onChange={handleChange}
      name="startDate"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      type="date"
      required
    />
    {formErrors.startDate && <p className="text-red-500 text-xs mt-1">{formErrors.startDate}</p>}
  </div>

  {/* Add Image Input field and button */}
  
  <div className="mt-8">
    <button
      type="submit"
      className="bg-black text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
    >
      Submit
    </button>
  </div>
  <div className="mt-4 flex items-center justify-between">
    <span className="border-b w-1/5 md:w-1/4"></span>
    <Link to="/owner">
      <a href="#" className="text-xs text-black uppercase">
        Back
      </a>
    </Link>
    <span className="border-b w-1/5 md:w-1/4"></span>
  </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default VehicleAdd;
