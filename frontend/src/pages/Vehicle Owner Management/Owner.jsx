import React from'react'
import {Link} from 'react-router-dom'
import Carpng from '../../assets/car.png'

const Owner = () =>{
    return (
        <div className="Owner-container">
          <img src={Carpng} alt="car photo" width={1500} height={300}/>
          
        </div>
    )
}
export default Owner