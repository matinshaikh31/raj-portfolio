// components/Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-start text-sm text-[#A1A1A1]">
      <div className="flex gap-2 items-center font-semibold">
        <span>By Raj</span>
        <sup className="text-xs align-top">©</sup>
      </div>
      <span>(Product & Visual Designer)</span>
      <div className="hidden sm:flex gap-4">
        <a href="#" className="hover:text-white transition">
          Services
        </a>
        <a href="#" className="hover:text-white transition">
          Works
        </a>
        <a href="#" className="hover:text-white transition">
          About
        </a>
        <a href="#" className="hover:text-white transition">
          Testimonials
        </a>
        <a href="#" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
