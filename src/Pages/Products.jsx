import React, { useContext } from 'react'
import './Css/Products.css'
import Item from '../Components/Item/Item'
import { ShopContext } from '../Context/ShopContext'

export const Products = () => {
  const { all_product } = useContext(ShopContext)
  return (
<>
    <div className='products'>
      <h1>ALL PRODUCTS</h1>
      <hr />
      <div className="collections">
        {all_product.map((item, i) => { return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> })}
      </div>
    </div>
    </>
  )
}
export default Products;