import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { GetTotalCartItem } = useContext(ShopContext);
    return (
        <div className='navbar'>
            <Link to='/'  className='link'>
            <div className="nav-logo">
                <img src={logo} alt='logo' />
                <p>Shopper</p>
            </div>
            </Link>
            <ul className="nav-menue">
                <li onClick={() => { setMenu("shop") }}><Link to='/' className='link'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}> <Link to='/men' className='link'>Men</Link> {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link to='/women' className='link'>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to='/kids' className='link'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button><Link to="signup" className='link'>Signup</Link></button>
                <Link to="/cart"><img src={cart_icon} alt='cart'></img></Link>
                <div className="nav-cart-count">{GetTotalCartItem()}</div>

            </div>

        </div>


    )
}
export default Navbar;