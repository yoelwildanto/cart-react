import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { PRODUCTS } from "../products2";
import { ShopContext } from "../context/shop-context";
import { NavCart } from "./navbarCart";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems, updateCartItemCount, getTotalCartAmount} = useContext(ShopContext)
  const total =Object.values(cartItems)
  const sum=total.reduce((sum, item) => sum + item,0)
  const totalAmount = getTotalCartAmount();

  // console.log(updateCartItemCount)

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact" className="contact"> Contact </Link>
        <div to="/cart" className="total-items">
          <ShoppingCart size={32} />
          {sum}
          <div className="dropdown-content"> 
          <div className="cartdrop">
          {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <NavCart data={product} />;
          }
           })} 
           <h3 className="total"> Total: ${totalAmount}</h3>
           <Link to={"/cart"} className="submit">
           <div className="bayar">        
           Bayar
           </div> 
           </Link>
        </div>
        </div>
        </div>
        {/* <div className="total-items">{sum}</div> */}
      </div>
    </div>
  );
};
