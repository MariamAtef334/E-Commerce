import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import all_product from '../Components/Assets/all_product';

export const ShopCategory = (props) => {
  const ShopCategory = useContext(ShopContext);

  // Filter items that match the category condition
  const filteredItems = all_product.filter(item => props.category === item.category);

  return (
    <div className='shopcategory'>
      <img  className='shopcategory-banner' src={props.banner} alt="img" />
      <div className="shopcategory-indexsort">
        <p>
          s<span>Showing 1-12</span> out of {filteredItems.length} products
        </p>

        {/* <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div> */}
      </div>
      <div className="shopcategory-products">
        {filteredItems.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>

    </div>
  );
}

export default ShopCategory;
