import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONlY ON BEST SELLERS PRODUCTS </p>
 
            </div>
            <div className="offers-right">
            <img src={exclusive_image} alt="exclusive_image"/>
            </div>
        </div>
    )
}
export default Offers;