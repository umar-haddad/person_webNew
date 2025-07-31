import React from "react";

function footer() {
  return (
    <>
      <footer className="bg-pink-400 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dedeh Rodiah. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default footer;
