import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h1>NEW ARRIVALS ONLY</h1>
                <div>
                    <div className="hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="hand_icon" />
                    </div>
                    <p>collections</p>
                    <p>for every one</p>
                </div>
                <Link to='/new' className='link'> <div className="hero-latest-btn">
                  <div>latest collection</div>
                    <img src={arrow} alt="arrow" />
                </div>
                </Link> 
            </div>
            <div className="hero-right">

                <img src={hero_image} alt="hero_image" />
            </div>
        </div>
    )
}
export default Hero;