import React, { useState } from "react";
import {
  Star,
  FlaskConical,
  Sparkles,
  Leaf,
  PawPrint,
  Recycle,
  GraduationCap,
} from "lucide-react";
import heroBg from "../assets/images/pexels-yaroslav-shuraev-8514588.jpg";
import beach from "../assets/images/spiaggia-portonovo.jpg";
import faceCream from "../assets/images/face-cream.png";
import chapStick from "../assets/images/chapstick.jpg";
import creamJar from "../assets/images/cream-jar.jpg";
import Carousel from "../components/Carousel";

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
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-32 md:py-20 text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 text-amber-600"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Ispirati dalla natura
            <br />
            Arricchiti dalla scienza
          </h1>
          {/* <button className="px-8 sm:px-10 py-3 sm:py-4 text-white text-sm tracking-widest hover:opacity-90 transition rounded-full bg-primary">
            SCOPRI LA COLLEZIONE
          </button> */}
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

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center px-4 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <FlaskConical className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                Scienza
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Formulazioni naturali e innovative, frutto di ricerca
                scientifica, per risultati visibili e rispettosi della pelle.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <Recycle className="w-7 h-7 md:w-8 md:h-8 text-white" />
                {/* <img src={upCycle} className="w-7 h-7 md:w-8 md:h-8 text-white" alt="" /> */}
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                Upcycling
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Trasformiamo i materiali di scarto in nuove risorse.
                Sostenibilità senza sprechi.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <Leaf className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                Ingredienti Botanici
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Utilizziamo solo ingredienti naturali e biologici, selezionati
                con cura per la loro purezza ed efficacia.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary">
                <PawPrint className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl mb-4 text-neutral-800">
                Cruelty Free
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
                Tutti i nostri prodotti sono certificati cruelty-free. Bellezza
                senza compromessi etici.
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
                name: "Sibilla",
                desc: "La nostra crema antiage che aiuta a contrastare i segni del tempo",
                img: faceCream,
              },
              {
                name: "Riviera",
                desc: "Un burro di cacao nutriente che idrata e protegge le labbra",
                img: chapStick,
              },
              {
                name: "Catria",
                desc: "Una crema idratante che nutre e mantiene la pelle morbida",
                img: creamJar,
              },
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div
                  className="aspect-square bg-center bg-cover from-neutral-100 to-neutral-200 mb-4 rounded-lg overflow-hidden relative"
                  style={{ backgroundImage: `url(${product.img})` }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundImage: "rgba(215, 198, 230, 0.9)" }}
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

          {/* <div className="text-center mt-10 md:mt-12">
            <button className="px-8 sm:px-10 py-3 sm:py-4 text-white text-sm tracking-widest hover:opacity-90 transition rounded-full bg-primary">
              SCOPRI DI PIÙ
            </button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div
              className="aspect-square from-neutral-200 to-neutral-300 rounded-lg order-2 md:order-1 bg-center bg-cover"
              style={{ backgroundImage: `url(${beach})` }}
            ></div>

            <div className="order-1 md:order-2">
              <p className="text-xs md:text-sm tracking-widest mb-4 text-primary">
                CHI SIAMO
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-neutral-800">
                La nostra storia
              </h2>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed mb-6">
                Nata per trasformare la ricerca scientifica in bellezza
                sostenibile, AMAREA Cosmetics crea cosmetici naturali formulati
                con ingredienti vegetali e attivi ottenuti tramite upcycling da
                bioresidui agroalimentari. Grazie alla collaborazione con
                l’Università Politecnica delle Marche, selezioniamo e validiamo
                ogni ingrediente per garantire prodotti efficaci, sicuri e
                rispettosi della pelle e dell’ambiente.
              </p>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed mb-8">
                Crediamo in una cosmesi etica, innovativa e accessibile, dove
                natura e scienza lavorano insieme per un benessere autentico.
              </p>
              {/* <button className="px-8 py-3 border-2 text-primary text-sm tracking-widest hover:text-white hover:bg-primary transition border-primary rounded-full">
                SCOPRI DI PIÙ
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs md:text-sm tracking-widest mb-4 text-primary">
              IL NOSTRO TEAM
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 px-4">
              Esperti al servizio dell'innovazione
            </h2>
            <p className="text-base md:text-lg text-neutral-600 font-sans mt-6 max-w-3xl mx-auto px-4">
              Un team di ricercatori altamente qualificati impegnati nello
              sviluppo di formulazioni cosmetiche naturali ed ecosostenibili
            </p>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 md:py-24 bg-secondary text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <GraduationCap className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 px-4">
            Collabora con noi
          </h2>
          <p className="text-base md:text-lg font-sans mb-4 px-4 leading-relaxed">
            Sei un ricercatore, un'università o un'azienda interessata a
            progetti di ricerca nel campo della cosmesi naturale e sostenibile?
          </p>
          <p className="text-base md:text-lg font-sans mb-10 px-4 leading-relaxed">
            Il team di <strong>AMAREA Cosmetics</strong> è sempre aperto a nuove
            collaborazioni scientifiche per sviluppare formulazioni innovative
            basate su ingredienti naturali e processi di upcycling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a
              href="mailto:info@amareacosmetics.it?subject=Richiesta%20Collaborazione%20Scientifica"
              className="px-10 py-4 border-2 border-primary text-primary text-sm tracking-widest rounded-full hover:bg-primary hover:text-white transition"
            >
              CONTATTACI
            </a>
          </div>
          <p className="text-sm text-neutral-700 font-sans mt-8 px-4">
            Email:{" "}
            <a
              href="mailto:amareacosmetics@gmail.com"
              className="text-primary hover:underline transition"
            >
              info@amareacosmetics.it
            </a>
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 md:py-24 bg-secondary text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 px-4">
            Unisciti alla nostra community
          </h2>
          <p className="text-base md:text-lg font-sans mb-8 px-4">
            Ricevi consigli di bellezza, offerte esclusive e novità in anteprima
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4"
          >
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
            <a
              href="/privacy-policy"
              className="underline hover:text-primary transition"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </section> */}
    </>
  );
}
