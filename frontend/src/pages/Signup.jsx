

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
        // Allow only numbers and optional hyphens or spaces
        newValue = value.replace(/[^0-9- ]/g, "");
        break;
      case "nic":
        // NIC validation (National Identification Card)
        // Assuming NIC should be of a specific format, like xxxxx-xxxxxxx-x
        if (!/^\d{5}-\d{7}-\d$/.test(value)) {
          newErrors[name] = "Invalid NIC format";
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
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form
          className="bg-gray-100 shadow-md rounded px-8 pt-6 mt-4 pb-8 mb-4 border border-slate-900 w-full sm:w-96"
          onSubmit={handleSubmit}
        >
           <label className="block text-gray-700 text-sm font-bold mb-2">
            Are You:
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="h-7 p-1 mt-1 block w-28 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <option value="renter">Renter</option>
              <option value="owner">Owner</option>
              <option value="driver">Driver</option>
              <option value="employee">Employee</option>
              <option value="vehiclemanager">Vehicle Manager</option>
            </select>
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="h-7 p-3 w-full block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </label>

          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </label>

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="h-7  p-3 block w-full mb-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </label>


          <label>
            NIC:
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              className="h-7 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </label>
          {formData.role === "driver" && (
            <>
            <label>
            License Photo:
            <input
              className="mb-4 mt-2"
              type="file"
              name="licensePhoto"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
          {formData.licensePhoto && (
            <img

              src={URL.createObjectURL(formData.licensePhoto)}
              alt="profile"
              className="mb-4 mt-2 rounded-full h-20 w-20"
            />
          )}

            </>
          )
          }

          {formData.role === "employee" && (

            <>
              <label>
                Additional Field 1 for Employee:
                <input
                  type="text"
                  name="additionalField1"
                  value={formData.additionalField1}
                  onChange={handleChange}
                  className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </label>
              <label>
                Additional Field 2 for Employee:
                <input
                  type="text"
                  name="additionalField2"
                  value={formData.additionalField2}
                  onChange={handleChange}
                  className="h-7  p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </label>
            </>
          )}

          <label>
            Profile picture:
            <input
              className="mb-4 mt-2"
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
          {formData.profilePicture && (
            <img

              src={URL.createObjectURL(formData.profilePicture)}
              alt="profile"
              className="mb-4 mt-2 rounded-full h-20 w-20"
            />
          )}

          <button
            className="relative h-10 mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 w-full"
            type="submit"
          >
            Register
          </button>
          <span className="text-xs text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;