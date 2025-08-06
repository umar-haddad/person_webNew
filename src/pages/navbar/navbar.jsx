import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Project", href: "/project" },
    { label: "Certificate", href: "/certificate" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  const bgColor = isDark ? "bg-gray-900" : "bg-[#fcfcfc]";
  const textColor = isDark ? "text-white" : "text-black";
  const hoverBg = isDark ? "hover:bg-gray-700" : "hover:bg-rose-500";
  const hoverText = isDark ? "hover:text-white" : "hover:text-white";
  const hamburgerColor = isDark ? "bg-white" : "bg-gray-800";

  return (
    <header
      className={`${bgColor} ${
        isDark
          ? "shadow-[10px_10px_30px_rgba(255,255,255,0.1)]"
          : "shadow-[10px_10px_30px_rgba(0,0,0,0.1)]"
      } w-full max-w-[1000px] rounded-4xl mx-auto transition-colors duration-500`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div
          className={`text-2xl italic font-semibold font-poppins ${textColor}`}
        >
          Sayyid Umar
        </div>

        <nav
          className={`hidden md:flex space-x-8 text-md font-poppins ${textColor}`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              className={`px-3 py-1 rounded-md transition ${hoverBg} ${hoverText}`}
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
          <span className={`w-8 h-[3px] ${hamburgerColor} rounded`}></span>
          <span className={`w-8 h-[3px] ${hamburgerColor} rounded`}></span>
          <span className={`w-8 h-[3px] ${hamburgerColor} rounded`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${bgColor} px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 py-2 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`flex flex-col text-center space-y-1 text-md font-poppins ${textColor}`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              className={`px-3 py-1 rounded-md transition ${hoverBg} ${hoverText}`}
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
