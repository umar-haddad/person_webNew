import React from "react";

function Footer({ isDark }) {
  const bgColor = isDark ? "bg-gray-900" : "bg-gray-300";
  const textColor = isDark ? "text-white" : "text-black";
  const shadow = isDark
    ? "shadow-[0_-4px_12px_rgba(255,255,255,0.1)]"
    : "shadow-[0_-4px_12px_rgba(0,0,0,0.1)]";

  return (
    <footer
      className={`py-4 ${bgColor} ${shadow} ${textColor} w-full transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sayyid Umar Haddad. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
