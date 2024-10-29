import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="text-white josefin-sans-500 flex justify-between items-center pt-4 pl-6 pr-6">
      <h1 className="cursor-pointer">
        M<span className="text-green-500">E</span>RN L
        <span className="text-green-500">E</span>ARN
      </h1>
      <ul className="flex gap-12">
        <li className="cursor-pointer hover:text-[#00df9a]">
          <Link to="/">HOME</Link>
        </li>
        <li className="cursor-pointer hover:text-[#00df9a]">
          <Link to="/test">TEST</Link>
        </li>
        <li className="cursor-pointer hover:text-[#00df9a]">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="cursor-pointer hover:text-[#00df9a]">
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
