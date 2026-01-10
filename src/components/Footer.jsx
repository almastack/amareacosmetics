import { Linkedin, Instagram } from 'lucide-react';
import { Link } from "react-router";
import logo from "../assets/images/AMAREA_LOGO_bianco.png";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img src={logo} alt="AMAREA COSMETICS" className="h-8 mb-4" />
            <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-4">
              Cosmetici naturali di lusso per la tua bellezza autentica.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/amarea-cosmetics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/amareacosmetics?igsh=M3d2cnY5NnpqZDZ3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm tracking-widest mb-4">SUPPORTO</h4>
            <ul className="space-y-2 font-sans text-sm text-neutral-400">
              <li>
                <Link to="/docs" className="hover:text-white transition">
                  Documentazione
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center font-sans text-sm text-neutral-500">
          <div className="flex justify-center gap-6 mb-4">
            <Link to="privacy-policy">Privacy Policy</Link>
            <Link to="terms-conditions">Termini e Condizioni D'uso</Link>
          </div>
          <p className="flex flex-col justify-center gap-4">
            <span>© 2026 AMAREA COSMETICS S.r.l. Tutti i diritti riservati. </span>
            <span>
              Made with ❤️ by <a className="text-primary hover:underline" href="https://almastack.it" target="_blank">Almastack</a> - <a className="text-primary hover:underline" href="https://almastack.it" target="_blank">almastack.it</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
