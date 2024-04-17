import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userRole, setUserRole] = useState("renter");
  const [formData, setFormData] = useState({
    role: userRole,
    username: "",
    email: "",
    nic: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    additionalField1: "",
    additionalField2: "",
    profilePicture:"",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value,files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [name]: name  === "profilePicture" ? files[0] : value,
    }));

    let newErrors = { ...errors };

    if (name === "username" && !value.trim()) {
      newErrors.username = "Username is required";
    } else {
      delete newErrors.username;
    }

    if (name === "email" && !value.trim()) {
      newErrors.email = "Email is required";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      newErrors.email = "Email is invalid";
    } else {
      delete newErrors.email;
    }

    if (name === "password" && !value.trim()) {
      newErrors.password = "Password is required";
    } else if (name === "password" && !/^(?=.*[A-Z]).{8,}$/.test(value)) {
      newErrors.password = "Password must contain at least one uppercase letter and be at least 8 characters long";
    } else {
      delete newErrors.password;
    }

    if (name === "confirmPassword" && !value.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (name === "confirmPassword" && value !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else {
      delete newErrors.confirmPassword;
    }

    if (name === "phoneNumber" && !value.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (name === "phoneNumber" && !/^\d{10}$/.test(value)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    } else {
      delete newErrors.phoneNumber;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      return;
    }

    const updatedFormData = {
      ...formData,
      role: userRole,
    };

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
      alert("User Registered");
      navigate("/login");
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

          <label>
            Username:
            <input
              type="text"
              name="username" 
              value={formData.username}
              onChange={handleChange}
              className="h-7 p-3 w-full block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
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
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
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
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </label>

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
            <>
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
            </>
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
          {/* <label>
            Profile picture:
            <input
              className="mb-4 mt-2"
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange} // Add onChange handler
            />
          </label>
          {formData.profilePicture && (
            <img
              src={URL.createObjectURL(formData.profilePicture)}
              alt="profile"
              className="mb-4 mt-2 rounded-full h-20 w-20"
            />
          )} */}
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
