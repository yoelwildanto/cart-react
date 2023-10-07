import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { PRODUCTS } from "../products2";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems} = useContext(ShopContext)
  const total =Object.values(cartItems)
  const sum=total.reduce((sum, item) => sum + item,0)
  console.log(sum)

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <div className="total-items">{sum}</div>
      </div>
    </div>
  );
};
