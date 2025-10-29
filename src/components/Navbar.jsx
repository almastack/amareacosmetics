import React from "react";
import { Link, useLocation } from "react-router";

function Navbar() {
  const location = useLocation();
  const isDocumentazione = location.pathname === "/docs";

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl flex-1 font-light tracking-wider"
          style={{ color: "#D7C6E6" }}
        >
          AMAREA COSMETICS
        </Link>
        {!isDocumentazione && (
          <div className="hidden md:flex gap-6 text-neutral-600">
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

        <div className="flex-1 text-right">
          <button
            className="px-6 py-2 text-sm tracking-wide text-white transition hover:opacity-90"
            style={{ backgroundColor: "#D7C6E6" }}
          >
            CONTATTACI
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
