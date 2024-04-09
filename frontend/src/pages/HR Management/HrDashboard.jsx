import React from 'react'
import { Link } from 'react-router-dom' 

const HR = () => {
  return (
    <div>
        <h2>
            Hello HR!
        </h2>
      
        <button><Link to={'/log1'}>Login</Link></button>
       
    </div>
    
  );
};

export default HR;
