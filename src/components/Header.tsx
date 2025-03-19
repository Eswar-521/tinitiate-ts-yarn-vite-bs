import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
      {/* Left Side - Logo */}
      <div>
        <h3>MyApp</h3>
      </div>

      {/* Center - Search Bar */}
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
        />
        <button className="btn btn-light">Search</button>
      </div>

      {/* Right Side - Login & Signup */}
      <div>
        <Link to="/login" className="btn btn-outline-light me-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-warning">
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Header;
