import { PRODUCTS } from '../../products/products'
import React from 'react'
import Product from './product'
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <div className="">
        <h1> TokoToko</h1>
      </div>
      <div className="products"> {PRODUCTS.map((product) =>(
        <Product data={product}/>
      ))}

      </div>
    </div>
  )
}

export default Shop
