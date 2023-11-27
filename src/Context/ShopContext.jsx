import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';
import { all } from 'axios';
import Product from '../Pages/Product';
export const ShopContext = createContext(null);

const GetDefualtCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(GetDefualtCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    console.log(cartItems)
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const GetTotalCartAmount = () => {
        let totalAount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAount;
    }
    const GetTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
               
                totalItem +=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {GetTotalCartItem,GetTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;