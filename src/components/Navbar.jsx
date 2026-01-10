import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/AMAREA_LOGO_nero.png";

function Navbar() {
  const location = useLocation();
  const isDocumentazione = location.pathname === "/docs";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-bg backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="AMAREA Cosmetics" className="h-6 md:h-8" />
            </Link>
          </div>

          {/* Desktop Menu - CENTER */}
          {!isDocumentazione && (
            <div className="hidden md:flex gap-8 text-neutral-600 text-md absolute left-1/2 -translate-x-1/2">
              <a href="#home" className="hover:text-neutral-900 transition">
                HOME
              </a>
              <a href="#prodotti" className="hover:text-neutral-900 transition">
                PRODOTTI
              </a>
              <a href="#about" className="hover:text-neutral-900 transition">
                CHI SIAMO
              </a>
              <a href="#team" className="hover:text-neutral-900 transition">
                TEAM
              </a>
            </div>
          )}

          {/* Hamburger Button - Mobile Only */}
          {!isDocumentazione && (
            <button
              onClick={toggleMenu}
              className="md:hidden text-neutral-800 hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Panel - Directly attached to navbar */}
        {!isDocumentazione && (
          <div
            className={`md:hidden bg-white border-t border-neutral-200 shadow-lg transform transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col p-6 space-y-4">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-lg text-neutral-700 hover:text-primary transition py-2 border-b border-neutral-100"
              >
                HOME
              </a>

              <a
                href="#prodotti"
                onClick={closeMenu}
                className="text-lg text-neutral-700 hover:text-primary transition py-2 border-b border-neutral-100"
              >
                PRODOTTI
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-lg text-neutral-700 hover:text-primary transition py-2 border-b border-neutral-100"
              >
                CHI SIAMO
              </a>
              <a
                href="#team"
                onClick={closeMenu}
                className="text-lg text-neutral-700 hover:text-primary transition py-2"
              >
                TEAM
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
