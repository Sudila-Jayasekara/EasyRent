

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    role: "renter",
    username: "",
    email: "",
    nic: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    profilePicture: null,
    licensePhoto: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue = value;
    let newErrors = { ...errors }; // Copy current errors
    
    // Basic validation based on input field name
    switch (name) {
      case "username":
        // Allow only letters, no numbers or symbols
        newValue = value.replace(/[^a-zA-Z]/g, "");
        break;
      case "email":
        // Simple email format validation
        if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors[name] = "Invalid email address";
        } else {
          delete newErrors[name]; // Clear error if valid
        }
        break;
      case "password":
        // Password strength validation
        if (value.length < 8) {
          newErrors[name] = "Password should be at least 8 characters long";
        } else if (!/[A-Z]/.test(value)) {
          newErrors[name] = "Password should contain at least one uppercase letter";
        } else {
          delete newErrors[name]; // Clear error if valid
        }
        break;
      case "confirmPassword":
        // Check if confirmPassword matches password
        if (value !== formData.password) {
          newErrors[name] = "Passwords do not match";
        } else {
          delete newErrors[name]; // Clear error if valid
        }
        break;
        case "phoneNumber":
          // Allow only numbers
          newValue = value.replace(/\D/g, "");
          if (newValue.length !== 10 || newValue.charAt(0) !== "0") {
            newErrors[name] = "Phone number must start with 0 and contain exactly 10 digits";
          } else {
            delete newErrors[name]; // Clear error if valid
          }
          break;
        
        case "nic":
          if (!/^\d{12}$/.test(value)) {
            newErrors[name] = "NIC must contain exactly 12 numbers";
          } else {
            delete newErrors[name]; // Clear error if valid
          }
          break;
        
      default:
        // For other fields, no specific validation
        break;
    }
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : newValue,
    }));
    
    setErrors(newErrors); // Update errors
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
  
    // Check for errors in the form data
    let formErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      switch (key) {
        case "username":
        case "email":
        case "password":
        case "confirmPassword":
        case "phoneNumber":
        case "nic":
        case "address":
          if (!value.trim()) {
            formErrors[key] = "This field is required";
          }
          break;
     
      }
    });
  
    // Set errors state with the formErrors
    setErrors(formErrors);
  
    // If there are no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          body: formDataToSend,
        });
  
        const data = await res.json();
  
        if (data.status) {
          alert("User Registered");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-2/3 p-6 sm:p-12">
          <div>
            <h1 className="text-3xl font-extrabold text-center mb-8">
              Easy Rent
            </h1>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <form
              className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-slate-900 w-full sm:w-96"
              onSubmit={handleSubmit}
            >
              {/* Dropdown Menu for Role */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Are You:
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="renter">Renter</option>
                  <option value="owner">Owner</option>
                  <option value="driver">Driver</option>
                  <option value="employee">Employee</option>
                  <option value="vehiclemanager">Vehicle Manager</option>
                </select>
              </label>

              {/* Input fields */}

              {/* Username */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.username ? "border-red-500" : ""
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.username}
                  </p>
                )}
              </label>

              {/* Email */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </label>

              {/* Password */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </label>

              {/* Confirm Password */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </label>

              {/* Address */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </label>

              {/* Phone Number */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </label>

              {/* NIC */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                NIC:
                <input
                  type="text"
                  name="nic"
                  value={formData.nic}
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.nic ? "border-red-500" : ""
                  }`}
                />
                {errors.nic && (
                  <p className="text-red-500 text-xs mt-1">{errors.nic}</p>
                )}
              </label>

              {/* License Photo or Additional Field 1 for Employee
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {formData.role === "driver"
                  ? "License Photo:"
                  : "Additional Field 1 for Employee:"}
                <input
                  type={formData.role === "driver" ? "file" : "text"}
                  name={
                    formData.role === "driver"
                      ? "licensePhoto"
                      : "additionalField1"
                  }
                  value={
                    formData.role === "driver"
                      ? formData.licensePhoto
                      : formData.additionalField1
                  }
                  onChange={handleChange}
                  className={`h-8 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                    errors.licensePhoto || errors.additionalField1
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {(errors.licensePhoto || errors.additionalField1) && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.licensePhoto || errors.additionalField1}
                  </p>
                )}
              </label> */}

          

              {/* Profile Picture */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profile Picture:
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  id="profilePictureInput"
                />
                <label
                  htmlFor="profilePictureInput"
                  className="cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-32 h-32 overflow-hidden bg-gray-200 rounded-full">
                      {formData.profilePicture ? (
                        <img
                          src={URL.createObjectURL(formData.profilePicture)}
                          alt="Profile"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <svg
                          className="w-full h-full text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="ml-2">Choose a picture</span>
                  </div>
                </label>
                {errors.profilePicture && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.profilePicture}
                  </p>
                )}
              </label>

              {/* Submit Button */}
              <button
                className="relative h-10 mt-4 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 w-full"
                type="submit"
              >
                Register
              </button>

              {/* Sign In Link */}
              <span className="text-xs text-gray-500">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500">
                  Sign In
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
