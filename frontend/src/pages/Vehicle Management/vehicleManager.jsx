import React from 'react';
import carwall from '../Vehicle Management/carwall.jpeg';

const VehicleManager = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={carwall} alt="Car Wall" className="max-h-full max-w-full" />
    </div>
  );
};

export default VehicleManager;

