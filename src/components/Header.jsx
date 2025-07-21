import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="flex justify-center space-x-5">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
