import React from "react";
import { Link } from "react-router";


function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3
              className="text-2xl font-light mb-4"
              style={{ color: "#D7C6E6" }}
            >
              AMAREA COSMETICS
            </h3>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed">
              Cosmetici naturali di lusso per la tua bellezza autentica.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-widest mb-4">PRODOTTI</h4>
            <ul className="space-y-2 font-sans text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Viso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Corpo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Capelli
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Catalogo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest mb-4">AZIENDA</h4>
            <ul className="space-y-2 font-sans text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sostenibilità
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Carriere
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest mb-4">SUPPORTO</h4>
            <ul className="space-y-2 font-sans text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Richiedi Info
                </a>
              </li>
              <li>
                <Link to="/docs"  className="hover:text-white transition">
                  Documentazione
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center font-sans text-sm text-neutral-500">
          <p>© 2025 Amarea Cosmetics. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
