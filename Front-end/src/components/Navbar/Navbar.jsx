import React from "react";

const Navbar = () => {
  return (
    <div className="text-white josefin-sans-500 flex justify-between items-center pt-4">
      <h1 className="cursor-pointer">
        M<span className="text-green-500">E</span>RN
      </h1>
      <ul className="flex gap-12">
        <li className="cursor-pointer hover:text-[#00df9a]">HOME</li>
        <li className="cursor-pointer hover:text-[#00df9a]">TEST</li>
        <li className="cursor-pointer hover:text-[#00df9a]">CONTACT</li>
        <li className="cursor-pointer hover:text-[#00df9a]">ABOUT</li>
      </ul>
    </div>
  );
};

export default Navbar;
