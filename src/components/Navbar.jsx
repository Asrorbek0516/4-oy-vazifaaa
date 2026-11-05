import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Bag.</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="buy-btn">Buy Now</button>
    </nav>
  );
}

export default Navbar;