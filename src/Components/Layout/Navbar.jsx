import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setCartToggle, cart }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="navbar">
      {/* Left side links */}
      <div className="nav-left">
        <span className="logo">Shopi</span>
        <div className="nav-links">
          <Link to="/">All</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/furniture">Furnitures</Link>
          <Link to="/toys">Toys</Link>
        </div>
      </div>

      {/* Right side */}
      <div className="nav-right">
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Links shown only when menuOpen is true (for mobile) */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/myOrders" onClick={() => setMenuOpen(false)}>My Orders</Link>
          <Link to="/account" onClick={() => setMenuOpen(false)}>My Account</Link>
          <Link onClick={() => { setCartToggle((prev) => !prev); setMenuOpen(false); }}>
            🛒({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
