import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FormatRupiah } from "@arismun/format-rupiah";

export const Product = (props) => {
  const { id, productName, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b className="name">{productName}</b>
        </p>
        <p className="harga"> <FormatRupiah value={price}/>
</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
