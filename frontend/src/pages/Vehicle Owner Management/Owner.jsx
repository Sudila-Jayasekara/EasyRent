import React from'react'
import {Link} from 'react-router-dom'
import Carpng from '../../assets/car.png'

const Owner = () =>{
    return (
        <div className="Owner-container">
          <img className='w-full h-full' src={Carpng} alt="car photo" />
          
        </div>
    )
}
export default Owner