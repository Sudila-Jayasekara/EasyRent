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
    photos: '',
    transmission:'',
    price:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData };

    console.log('Form data submitted:', updatedFormData);

    try {
      const res = await fetch('api/vehicle/vehicleadd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
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

 
};

export default VehicleAdd;
