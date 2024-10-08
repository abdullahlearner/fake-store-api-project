import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
function Nav() {
  const {cart } = useCart();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/"> Home </Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/about"> About </Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/contact"> Contact </Link>
    </li>

    <li className="nav-item active">
      <Link className="nav-link" to="/product"> Product </Link>
    </li>
    <li>
      <Link className="nav-link bg-primary text-light" to="/cart">Cart ({cart.length})</Link>
    </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Nav;
