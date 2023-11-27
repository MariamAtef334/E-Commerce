import React from 'react';
import './NewsLetter.css';
import { Link } from 'react-router-dom';

export const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <input type='email' placeholder='type your email id'></input>
             <div>
              
                <button type='submit'>Subscribe</button>
             </div>
        </div>
    )
}
export default NewsLetter;
