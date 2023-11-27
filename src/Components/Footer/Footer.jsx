import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png'
import instgram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/' className='link'><div className="footer-logo">
                <img src={footer_logo} alt='logo' />
                <p>Shopper</p>
            </div>
            </Link>
            <ul className="footer-links">
                <Link to='/products'><li>Products</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contacts'><li>Contacts</li></Link>

            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instgram_icon} alt="instgram" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="pintester" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>ALL RIGHT @2023 ARE RESERVED</p>
            </div>
        </div>
    )
}
export default Footer;