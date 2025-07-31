import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Project", href: "/project" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#fcfcfc] shadow-md w-full justify-center">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl italic font-semibold text-black font-poppins">
          Dedeh Rodiah
        </div>

        <nav className="hidden md:flex space-x-8 text-md font-poppins text-black">
          {navItems.map((item, index) => (
            <Link
              key={index}
              className="px-3 py-1 rounded-md hover:bg-rose-500 hover:text-white transition"
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="w-8 h-[3px] bg-gray-800 rounded"></span>
          <span className="w-8 h-[3px] bg-gray-700 rounded"></span>
          <span className="w-8 h-[3px] bg-gray-600 rounded"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#fcfcfc] px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 py-2 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col text-center space-y-1 text-md font-poppins text-black">
          {navItems.map((item, index) => (
            <Link
              key={index}
              className="px-3 py-1 rounded-md hover:bg-rose-400 transition"
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
