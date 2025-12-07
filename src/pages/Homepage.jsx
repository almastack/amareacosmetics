import React, { useState } from "react";
import { Star, Sparkles, Leaf, Heart } from "lucide-react";

export default function Homepage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Grazie per il tuo interesse!");
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-secondary py-32 md:py-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #D7C6E6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #E8DFF5 0%, transparent 50%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl w-full my-12">
          <div className="mb-8">
            <Sparkles className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 text-neutral-800 leading-tight">
            Bellezza
            <br />
            <span>Naturale</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-12 font-sans max-w-2xl mx-auto leading-relaxed px-4">
            Cosmetici di lusso formulati con ingredienti naturali per esaltare
            la tua bellezza autentica
          </p>
          <button className="px-8 sm:px-10 py-3 sm:py-4 text-white text-sm tracking-widest hover:opacity-90 transition rounded-full bg-primary">
            SCOPRI LA COLLEZIONE
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                98%
              </div>
              <p className="text-xs md:text-sm text-neutral-600 font-sans tracking-wide">
                INGREDIENTI NATURALI
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                15K+
              </div>
              <p className="text-xs md:text-sm text-neutral-600 font-sans tracking-wide">
                CLIENTI FELICI
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                100%
              </div>
              <p className="text-xs md:text-sm text-neutral-600 font-sans tracking-wide">
                CRUELTY FREE
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2 text-primary">
                5★
              </div>
              <p className="text-xs md:text-sm text-neutral-600 font-sans tracking-wide">
                RECENSIONI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs md:text-sm tracking-widest mb-4 text-primary">
              PERCHÉ SCEGLIERCI
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 px-4">
              La nostra filosofia di bellezza
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center px-4">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <Leaf className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                100% Naturale
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Utilizziamo solo ingredienti naturali e biologici, selezionati
                con cura per la loro purezza ed efficacia.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <Heart className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                Cruelty Free
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Tutti i nostri prodotti sono certificati cruelty-free e vegani.
                Bellezza senza compromessi etici.
              </p>
            </div>

            <div className="text-center px-4 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <Star className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                Qualità Premium
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Formulazioni innovative sviluppate da esperti dermatologi per
                risultati visibili e duraturi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="prodotti" className="py-16 md:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs md:text-sm tracking-widest mb-4 text-primary">
              I NOSTRI BESTSELLER
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 px-4">
              Prodotti che amerai
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Siero Viso Illuminante",
                desc: "Siero concentrato con vitamina C",
              },
              {
                name: "Crema Idratante Luxury",
                desc: "Formula ricca con acido ialuronico",
              },
              {
                name: "Maschera Purificante",
                desc: "Argilla rosa e oli essenziali",
              },
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 rounded-lg overflow-hidden relative">
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(215, 198, 230, 0.9)" }}
                  >
                    <span className="text-white text-sm tracking-wide">
                      PROSSIMAMENTE
                    </span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl mb-2 text-neutral-800">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500 font-sans">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <button className="px-8 sm:px-10 py-3 sm:py-4 text-white text-sm tracking-widest hover:opacity-90 transition rounded-full bg-primary">
              SCOPRI DI PIÙ
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg order-2 md:order-1"></div>

            <div className="order-1 md:order-2">
              <p className="text-xs md:text-sm tracking-widest mb-4 text-primary">
                CHI SIAMO
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-neutral-800">
                La nostra storia
              </h2>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed mb-6">
                Nata dalla passione per la bellezza naturale e sostenibile, la
                nostra startup unisce tradizione e innovazione. Ogni prodotto è
                il risultato di anni di ricerca e dell'impegno a creare
                cosmetici che rispettino la pelle e l'ambiente.
              </p>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed mb-8">
                Crediamo che la vera bellezza nasca dalla cura di sé con
                prodotti puri, efficaci e rispettosi. La nostra missione è
                rendere accessibile a tutti una cosmesi di lusso, etica e
                sostenibile.
              </p>
              <button className="px-8 py-3 border-2 text-primary text-sm tracking-widest hover:text-white hover:bg-primary transition border-primary rounded-full">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 md:w-6 md:h-6 fill-current text-primary"
              />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-800 mb-8 leading-relaxed px-4">
            "Questi prodotti hanno trasformato la mia routine di bellezza. La
            mia pelle non è mai stata così luminosa e sana. Adoro sapere che sto
            usando cosmetici naturali e sostenibili."
          </blockquote>
          <p className="text-xs md:text-sm tracking-widest text-primary">
            — SOFIA M.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-secondary text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 px-4">
            Unisciti alla nostra community
          </h2>
          <p className="text-base md:text-lg font-sans mb-8 px-4">
            Ricevi consigli di bellezza, offerte esclusive e novità in anteprima
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="flex-1 px-6 py-4 rounded-full text-neutral-800 font-sans focus:outline-none ring-2 ring-white focus:ring-black"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-sm tracking-widest rounded-full hover:bg-primary hover:text-white transition whitespace-nowrap"
            >
              ISCRIVITI
            </button>
          </form>
          <p className="text-sm text-neutral-700 font-sans mt-4 px-4">
            Iscrivendoti accetti la nostra{" "}
            <a href="/privacy-policy" className="underline hover:text-primary transition">
              Privacy Policy
            </a>
          </p>
        </div>
      </section>
    </>
  );
}