import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userRole, setUserRole] = useState("renter");
  const [formData, setFormData] = useState({
    role: userRole,
    username: "",
    email: "",
    nic: "",
    password: "",
    address: "",
    phoneNumber: "",
    additionalField1: "",
    additionalField2: "",
    profilePicture: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let inputValue = value;

    // Apply specific validation rules
    if (type === "tel") {
      inputValue = value.replace(/\D/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    setErrors(newErrors);

    // If there are errors, prevent form submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const updatedFormData = {
      ...formData,
      role: userRole,
    };

    // Perform form submission
    console.log("Form data submitted:", updatedFormData);

    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await res.json();
      console.log(data);
      if (data.status) {
        alert(`${userRole} Registered Successfully`);
        navigate("/login");
      } else {
        // Handle error responses
        console.error("Registration failed:", data.error);
        if (data.error && data.error.includes("duplicate key")) {
          // Handle duplicate key error
          setErrors({ message: data.message });
        }
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form
          className="bg-gray-100 shadow-md rounded px-8 pt-6 mt-4 pb-8 mb-4 border border-slate-900 w-full sm:w-96"
          onSubmit={handleSubmit}
        >
          {/* Error message */}
          {errors.message && (
            <div className="text-red-500 mb-4">{errors.message}</div>
          )}

          {/* Role selection */}
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Are You:
            <select
              name="role"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="h-7 p-1 mt-1 block w-28 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <option value="renter">Renter</option>
              <option value="owner">Owner</option>
              <option value="driver">Driver</option>
              <option value="employee">Employee</option>
            </select>
          </label>

          {/* Username */}
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
              <div className="text-red-500">{errors.username}</div>
            )}
          </label>

          {/* Email */}
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
              <div className="text-red-500">{errors.email}</div>
            )}
          </label>

          {/* Password */}
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
              <div className="text-red-500">{errors.password}</div>
            )}
          </label>

          {/* Address */}
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.address && (
              <div className="text-red-500">{errors.address}</div>
            )}
          </label>

          {/* Phone Number */}
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="h-7  p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 "
            />
            {errors.phoneNumber && (
              <div className="text-red-500">{errors.phoneNumber}</div>
            )}
          </label>

          {/* Additional fields based on role */}
          {userRole === "owner" && (
            <label>
              Owner NIC:
              <input
                type="text"
                name="nic"
                value={formData.nic}
                onChange={handleChange}
                className="h-7 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </label>
          )}

          {userRole === "driver" && (
            <label>
              NIC:
              <input
                type="text"
                name="nic"
                value={formData.nic}
                onChange={handleChange}
                className="h-7 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </label>
          )}

          {userRole === "employee" && (
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

          {/* Profile Picture Input */}
          <label>
            Profile Picture:
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              className="h-7 pb-10 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </label>

          {/* Submit button */}
          <button
            className="relative h-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 w-full"
            type="submit"
          >
            Register
          </button>

          {/* Already have an account link */}
          <span className="text-xs text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
