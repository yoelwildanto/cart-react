import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import {BsTrash} from "react-icons/bs"
// import {Link} from "react-router-dom"

export const NavCart = (props) =>{
    const { id, productName, price, image } = props.data;
    const { cartItems, removeFromCart, } =
      useContext(ShopContext);

      const cartItemCount = cartItems[id];


    return (
        <div className="cartItem-drop">
        <img src={image} />
        <div className="description-drop">
            <div className="cartItem-name">
          <p>
            <b>{productName}</b>
          </p>
          </div>
          <div className="cartItem-harga">
          <p> Price: ${price}</p>
          <p>Qty: {cartItemCount}</p>
          </div>
          {/* <Link to={"/cart"} className="submit"> Bayar </Link> */}
          </div>
          <button className="trash" onClick={() => removeFromCart(id)}><BsTrash/></button>
        </div>
    )
}