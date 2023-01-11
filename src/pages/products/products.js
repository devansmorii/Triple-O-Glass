import React from 'react'
import aluminumImage from '../../images/Aluminum_Glass_Images/Aluminum_image.jpg'
import glassImage from '../../images/Aluminum_Glass_Images/Glass_Image.jpg'
import './styles/products.css'
import { NavLink } from 'react-router-dom';


function products() {
  return (
    <div className='container' style={{height: "75vh"}}>
      <h2 className='products-h2'>Products</h2>
      <div className='product-left-image'>
        <div className='bg-left-image'>
          <NavLink to="/aluminum">
            <img src={aluminumImage} alt="Aluminum" className="alum"/>
            <h2 className='h1-alum'>Aluminum</h2>
          </NavLink>
        </div>
      </div>
      <div className='product-right-image'>
        <div className='bg-right-image'>
          <NavLink to="/glass">
            <img src={glassImage} alt="Glass" className="glass"/>
            <h2 className='h1-alum'>Glass</h2>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default products
