import React, { useState } from 'react';
import { Star, Sparkles, Leaf, Heart } from 'lucide-react';

export default function Homepage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per il tuo interesse!');
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl flex-1 font-light tracking-wider" style={{ color: '#D7C6E6' }}>
            AMAREA COSMETICS
          </div>
          <div className="hidden md:flex flex-1 justify-center gap-8 text-sm tracking-wide text-neutral-600">
            <a href="#home" className="hover:text-neutral-900 transition">HOME</a>
            <a href="#prodotti" className="hover:text-neutral-900 transition">PRODOTTI</a>
            <a href="#about" className="hover:text-neutral-900 transition">CHI SIAMO</a>
            <a href="#contatti" className="hover:text-neutral-900 transition">CONTATTI</a>
          </div>
          <div className='flex-1 text-right'>
            <button className="px-6 py-2 text-sm tracking-wide text-white transition hover:opacity-90" style={{ backgroundColor: '#D7C6E6' }}>
                CONTATTACI
            </button>
          </div>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, #D7C6E6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #E8DFF5 0%, transparent 50%)',
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-6">
            <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: '#D7C6E6' }} />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 text-neutral-800 leading-tight">
            Bellezza<br />
            <span style={{ color: '#D7C6E6' }}>Naturale</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
            Cosmetici di lusso formulati con ingredienti naturali per esaltare la tua bellezza autentica
          </p>
          <button 
            className="px-10 py-4 text-white text-sm tracking-widest hover:opacity-90 transition rounded-full"
            style={{ backgroundColor: '#D7C6E6' }}
          >
            SCOPRI LA COLLEZIONE
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-light mb-2" style={{ color: '#D7C6E6' }}>98%</div>
              <p className="text-sm text-neutral-600 font-sans tracking-wide">INGREDIENTI NATURALI</p>
            </div>
            <div>
              <div className="text-5xl font-light mb-2" style={{ color: '#D7C6E6' }}>15K+</div>
              <p className="text-sm text-neutral-600 font-sans tracking-wide">CLIENTI FELICI</p>
            </div>
            <div>
              <div className="text-5xl font-light mb-2" style={{ color: '#D7C6E6' }}>100%</div>
              <p className="text-sm text-neutral-600 font-sans tracking-wide">CRUELTY FREE</p>
            </div>
            <div>
              <div className="text-5xl font-light mb-2" style={{ color: '#D7C6E6' }}>5★</div>
              <p className="text-sm text-neutral-600 font-sans tracking-wide">RECENSIONI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest mb-4" style={{ color: '#D7C6E6' }}>PERCHÉ SCEGLIERCI</p>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-800">
              La nostra filosofia di bellezza
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D7C6E6' }}>
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4 text-neutral-800">100% Naturale</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                Utilizziamo solo ingredienti naturali e biologici, selezionati con cura per la loro purezza ed efficacia.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D7C6E6' }}>
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4 text-neutral-800">Cruelty Free</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                Tutti i nostri prodotti sono certificati cruelty-free e vegani. Bellezza senza compromessi etici.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D7C6E6' }}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4 text-neutral-800">Qualità Premium</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                Formulazioni innovative sviluppate da esperti dermatologi per risultati visibili e duraturi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="prodotti" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest mb-4" style={{ color: '#D7C6E6' }}>I NOSTRI BESTSELLER</p>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-800">
              Prodotti che amerai
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Siero Viso Illuminante', desc: 'Siero concentrato con vitamina C' },
              { name: 'Crema Idratante Luxury', desc: 'Formula ricca con acido ialuronico' },
              { name: 'Maschera Purificante', desc: 'Argilla rosa e oli essenziali' }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(215, 198, 230, 0.9)' }}>
                    <span className="text-white text-sm tracking-wide">
                      PROSSIMAMENTE
                    </span>
                  </div>
                </div>
                <h3 className="text-xl mb-2 text-neutral-800">{product.name}</h3>
                <p className="text-sm text-neutral-500 font-sans">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              className="px-10 py-4 text-white text-sm tracking-widest hover:opacity-90 transition rounded-full"
              style={{ backgroundColor: '#D7C6E6' }}
            >
              SCOPRI DI PIÙ
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg"></div>
            
            <div>
              <p className="text-sm tracking-widest mb-4" style={{ color: '#D7C6E6' }}>CHI SIAMO</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-neutral-800">
                La nostra storia
              </h2>
              <p className="text-neutral-600 font-sans leading-relaxed mb-6">
                Nata dalla passione per la bellezza naturale e sostenibile, la nostra startup unisce tradizione e innovazione. Ogni prodotto è il risultato di anni di ricerca e dell'impegno a creare cosmetici che rispettino la pelle e l'ambiente.
              </p>
              <p className="text-neutral-600 font-sans leading-relaxed mb-8">
                Crediamo che la vera bellezza nasca dalla cura di sé con prodotti puri, efficaci e rispettosi. La nostra missione è rendere accessibile a tutti una cosmesi di lusso, etica e sostenibile.
              </p>
              <button 
                className="px-8 py-3 border-2 text-[#D7C6E6] text-sm tracking-widest hover:text-white hover:bg-[#D7C6E6] transition"
                style={{ borderColor: '#D7C6E6'}}
              >
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#D7C6E6' }} />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 leading-relaxed">
            "Questi prodotti hanno trasformato la mia routine di bellezza. La mia pelle non è mai stata così luminosa e sana. Adoro sapere che sto usando cosmetici naturali e sostenibili."
          </blockquote>
          <p className="text-sm tracking-widest" style={{ color: '#D7C6E6' }}>— SOFIA M.</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24" style={{ backgroundColor: '#D7C6E6' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Unisciti alla nostra community
          </h2>
          <p className="text-white/90 font-sans mb-8 text-lg">
            Ricevi consigli di bellezza, offerte esclusive e novità in anteprima
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="flex-1 px-6 py-4 rounded-full text-neutral-800 font-sans focus:outline-none ring-2 ring-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-sm tracking-widest rounded-full hover:bg-neutral-100 transition"
              style={{ color: '#D7C6E6' }}
            >
              ISCRIVITI
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#D7C6E6' }}>AMAREA COSMETICS</h3>
              <p className="text-neutral-400 font-sans text-sm leading-relaxed">
                Cosmetici naturali di lusso per la tua bellezza autentica.
              </p>
            </div>
            <div>
              <h4 className="text-sm tracking-widest mb-4">PRODOTTI</h4>
              <ul className="space-y-2 font-sans text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Viso</a></li>
                <li><a href="#" className="hover:text-white transition">Corpo</a></li>
                <li><a href="#" className="hover:text-white transition">Capelli</a></li>
                <li><a href="#" className="hover:text-white transition">Catalogo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-widest mb-4">AZIENDA</h4>
              <ul className="space-y-2 font-sans text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Chi Siamo</a></li>
                <li><a href="#" className="hover:text-white transition">Sostenibilità</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Carriere</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-widest mb-4">SUPPORTO</h4>
              <ul className="space-y-2 font-sans text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Contatti</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Richiedi Info</a></li>
                <li><a href="#" className="hover:text-white transition">Partnership</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center font-sans text-sm text-neutral-500">
            <p>© 2025 Amarea Cosmetics. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}