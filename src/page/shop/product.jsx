import React from 'react'

const Product = (props) => {
    const {id, productName, price, image} = props.data;
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="description">
      <p>
      <b>{productName}</b>
      </p>
      <p> $ {price}</p>
      </div>
      <button className="addToCartBttn"> Add To Card</button>
    </div>
  )
}

export default Product
