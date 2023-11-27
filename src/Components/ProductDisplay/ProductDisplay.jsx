import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>

            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="productdisplay-img">
                    <img className='main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="old-price">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>
                <div className="description">material made usually by weaving, felting, or knitting natural or synthetic fibers and filaments</div>
                <div className="size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>

                </div>
                <button  onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                <p className='category'><span>Category: </span>Women_Teshirt, Crop_Top</p>
                <p className='category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}
export default ProductDisplay;
