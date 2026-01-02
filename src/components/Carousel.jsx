import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import "./Carousel.css";

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const data = [
    {
      name: "Dott.ssa Anna Manzella",
      email: "anna.manzella@amareacosmetics.it",
      role: "Dottoranda in Scienze Biomolecolari",
      description:
        "Laureata in Biologia Molecolare e Applicata, attualmente dottoranda presso il Dipartimento di Scienze della Vita e dell'Ambiente. Ha svolto attività di ricerca presso i laboratori Beiersdorf di Amburgo e la Tokyo University of Technology, approfondendo i meccanismi di rigenerazione tissutale. Possiede consolidate competenze in colture cellulari e tecniche analitiche avanzate.",
      shortDescription:
        "Specializzata in biologia della pelle e rigenerazione tissutale. Esperienza di ricerca internazionale presso laboratori Beiersdorf (Germania) e Tokyo University of Technology (Giappone).",
    },
    {
      name: "Dott.ssa Alessia Luccarini",
      email: "alessia.luccarini@amareacosmetics.it",
      role: "Dottoranda in Scienze Biomolecolari",
      description:
        "Dottoranda presso l'Università Politecnica delle Marche, impegnata nello studio di nuovi agenti fotoprotettivi naturali derivati da piante e organismi marini. Laureata magistrale in Biologia Molecolare e Applicata con lode. Collabora a progetti di ricerca internazionali e possiede competenze in colture cellulari, analisi molecolari e microscopia.",
      shortDescription:
        "Impegnata nello studio di agenti fotoprotettivi naturali derivati da piante e organismi marini. Laureata magistrale con lode. Competenze in colture cellulari, analisi molecolari e microscopia.",
    },
    {
      name: "Dott. Francesco Mengarelli",
      email: "francesco.mengarelli@amareacosmetics.it",
      role: "Dottorando in Scienze Biomolecolari",
      description:
        "Biologo molecolare con laurea magistrale con lode, attualmente dottorando in Scienze della Vita e dell'Ambiente. Esperto nell'utilizzo di tecniche analitiche avanzate (HPLC, citofluorimetria, spettrofotometria, Western blot, PCR). Ha partecipato a progetti di ricerca su stress ossidativo e disfunzioni mitocondriali, contribuendo a pubblicazioni scientifiche internazionali.",
      shortDescription:
        "Biologo molecolare con laurea magistrale con lode. Esperto in tecniche analitiche avanzate (HPLC, citofluorimetria, spettrofotometria, Western blot, PCR). Contributo a pubblicazioni scientifiche internazionali.",
    },
    {
      name: "Dott.ssa Loredana Rao",
      email: "loredana.rao@amareacosmetics.it",
      role: "PhD",
      description:
        "Post-doc presso il Dipartimento di Scienze Cliniche e Molecolari, specializzata in analisi di dinamica, funzionalità e metabolismo mitocondriale su modelli cellulari tumorali. Ha acquisito esperienza in analisi istologiche, microscopia confocale e studi biochimici su modelli di tessuto adiposo e muscolare. Ha contribuito a pubblicazioni scientifiche e presentato lavori a congressi internazionali.",
      shortDescription:
        "Specializzata in analisi di dinamica, funzionalità e metabolismo mitocondriale su modelli cellulari tumorali. Esperienza in analisi istologiche, microscopia confocale e studi biochimici.",
    },
    {
      name: "Dott.ssa Alida Likey",
      email: "alida.likey@amareacosmetics.it",
      role: "Dottoranda in Biomedical Sciences",
      description:
        "Laureata magistrale in Biologia Molecolare e Applicata, ha completato il corso di perfezionamento in Research and Innovation in Skin Biology and Anti-Aging Cosmetology. Ha effettuato ricerca presso la Tokyo University of Technology occupandosi di RNA interference e stress ossidativo. Attualmente dottoranda presso il laboratorio di Tossicologia dell'UNIVPM.",
      shortDescription:
        "Specializzata in skin biology e anti-aging cosmetology. Esperienza di ricerca presso la Tokyo University of Technology su RNA interference e stress ossidativo.",
    },
    {
      name: "Dott.ssa Camilla Morresi",
      email: "c.morresi@staff.univpm.it",
      role: "Post-doc e Docente",
      description:
        "Post-doc e docente con comprovata esperienza pluriennale nel campo della Biochimica, con focus sulla biochimica della nutrizione, stress ossidativo e malattie dismetaboliche. Titolare di plurimi assegni di ricerca, ha sviluppato significative competenze nella gestione di progetti di ricerca. L'attività di ricerca si è concretizzata in 23 pubblicazioni su riviste internazionali ad alto impatto.",
      shortDescription:
        "Esperienza pluriennale in biochimica della nutrizione e stress ossidativo. Competenze nella gestione di progetti di ricerca. 23 pubblicazioni su riviste internazionali ad alto impatto.",
    },
    {
      name: "Prof.ssa Elisabetta Damiani",
      email: "e.damiani@univpm.it",
      role: "Professoressa Associata di Biochimica",
      description:
        "Professoressa Associata di Biochimica presso l'Università Politecnica delle Marche, con oltre trent'anni di esperienza nella ricerca su radicali liberi, antiossidanti, fotobiologia e filtri solari. Autrice di oltre 110 pubblicazioni scientifiche e 4 brevetti. La sua ricerca attuale si focalizza sui meccanismi di fotoprotezione e sullo sviluppo di molecole naturali e sintetiche ad applicazione cosmetica e biomedica.",
      shortDescription:
        "Oltre trent'anni di esperienza nella ricerca su radicali liberi, antiossidanti e fotobiologia. Autrice di oltre 110 pubblicazioni scientifiche e 4 brevetti.",
    },
    {
      name: "Prof.ssa Tiziana Bacchetti",
      email: "t.bacchetti@univpm.it",
      role: "Professoressa Associata di Biochimica",
      description:
        "Professoressa Associata di Biochimica presso il DiSVA dell'Università Politecnica delle Marche e Presidente del Corso di Laurea Magistrale in Scienze dell'Alimentazione e Nutrizione. La sua attività di ricerca è incentrata sullo studio della relazione tra alimentazione e salute, con particolare attenzione ai meccanismi biochimici dello stress ossidativo. Autrice di oltre 115 articoli su riviste scientifiche internazionali peer-reviewed.",
      shortDescription:
        "Presidente del Corso di Laurea Magistrale in Scienze dell'Alimentazione. Esperta in stress ossidativo e basi molecolari dell'invecchiamento. Oltre 115 pubblicazioni scientifiche.",
    },
    {
      name: "Avv. Alessandra Marmorè",
      email: "alessandramarmore@outlook.it",
      role: "Avvocato",
      description:
        "Avvocato specializzato in diritto societario, contrattualistica, compliance e privacy. Laureata magistrale in Giurisprudenza presso l'Università degli Studi di Macerata, ha ottenuto l'abilitazione all'esercizio della professione forense presso la Corte d'Appello di Ancona nel 2024. Possiede ottime capacità di comunicazione, lavoro in team e pensiero critico.",
      shortDescription:
        "Specializzata in diritto societario, contrattualistica, compliance e privacy. Abilitazione all'esercizio della professione forense presso la Corte d'Appello di Ancona nel 2024.",
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data.map((member, idx) => (
          <div
            key={idx}
            className="embla__slide bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              {/* Photo container */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 overflow-hidden bg-neutral-200 border-4 border-primary/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-primary flex items-center justify-center">
                            <svg class="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        `;
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-neutral-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed mb-4">
              {member.shortDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
