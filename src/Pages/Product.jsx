import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBok from '../Components/DescriptionBox/DescriptionBok';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()

  const product = all_product.find((e) => e.id === Number(productId))


  if (!product) {
    return <div>Product not found</div>
  }

  console.log(product)

  return (
    <div className='product'>

      <Breadcrum product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBok/>
       <RelatedProducts/>
    </div>

  )
}

export default Product

