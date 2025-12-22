import React from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/images/logo-amarea.jpg";

function Navbar() {
  const location = useLocation();
  const isDocumentazione = location.pathname === "/docs";

  return (
    <nav className="fixed top-0 w-full bg-bg backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* LEFT: Logo + brand */}
        <div className="flex items-center gap-2 w-1/3 relative">
          <div className="w-16 absolute right-full top-1/2 -translate-y-1/2">
            <img src={logo} alt="logo amarea cosmetics" />
          </div>

          <Link
            to="/"
            className="text-xl flex font-light tracking-wider text-primary"
          >
            AMAREA COSMETICS
          </Link>
        </div>

        {/* CENTER: Menu */}
        {!isDocumentazione && (
          <div className="hidden md:flex justify-center gap-8 w-1/3 text-neutral-600 text-md">
            <a href="#home" className="hover:text-neutral-900 transition">
              HOME
            </a>
            <a href="#prodotti" className="hover:text-neutral-900 transition">
              PRODOTTI
            </a>
            <a href="#about" className="hover:text-neutral-900 transition">
              CHI SIAMO
            </a>
          </div>
        )}

        {/* RIGHT: spacer (per centrare meglio il menu) */}
        <div className="w-1/3"></div>

        {/* <div className="text-right"> <button className="px-6 py-2 text-sm tracking-wide text-white transition hover:opacity-90 bg-primary rounded-full"> CONTATTACI </button> </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
