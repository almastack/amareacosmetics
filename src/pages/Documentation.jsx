import React from "react";
import {
  Building2,
  Leaf,
  MapPin,
  Mail,
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Scale,
} from "lucide-react";

export default function CompanyInfoContent() {
  const teamMembers = [
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
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-neutral-800">
            AMAREA Cosmetics S.r.l.
          </h1>
          <div className="w-24 h-1 mx-auto mb-8 bg-primary"></div>
          <p className="text-xl text-neutral-600 font-sans">
            Innovazione sostenibile nel settore cosmetico
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Informazioni Societarie */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light mb-4 text-neutral-800">
                  Informazioni Societarie
                </h2>
                <div className="bg-neutral-50 p-6 rounded-lg space-y-3 text-neutral-700 font-sans">
                  <p>
                    <strong>Data di costituzione:</strong> 06 ottobre 2025
                  </p>
                  <p>
                    <strong>Luogo:</strong> Civitanova Marche (MC)
                  </p>
                  <p>
                    <strong>Notaio:</strong> Dott. Piergiorgio Moscetta - Via
                    Montenero, 9 - 62012 Civitanova Marche
                  </p>
                  <p>
                    <strong>Sede principale:</strong> Contrada Brecce Bianche
                    snc, 60131 Ancona (AN) - DiSVA
                  </p>
                  <p>
                    <strong>Settore:</strong> Lifescience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Oggetto Sociale */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light mb-4 text-neutral-800">
                  Oggetto Sociale
                </h2>
                <div className="text-neutral-700 font-sans leading-relaxed">
                  <p>
                    AMAREA Cosmetics si occupa della{" "}
                    <strong>
                      ricerca, sviluppo e produzione di cosmetici naturali ed
                      ecosostenibili
                    </strong>
                    , realizzati a partire da materie prime di origine vegetale
                    e da sottoprodotti dell'industria agroalimentare attraverso
                    processi di <strong>upcycling</strong>.
                  </p>
                  <p className="mt-4">
                    Le attività di ricerca e sviluppo vengono svolte in
                    collaborazione con l'
                    <strong>Università Politecnica delle Marche</strong>, dove
                    avvengono la selezione dei principi attivi, la validazione
                    scientifica degli ingredienti e la messa a punto delle
                    formulazioni.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Attività e R&D */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light mb-4 text-neutral-800">
                  Attività di Ricerca e Sviluppo
                </h2>
                <div className="text-neutral-700 font-sans leading-relaxed space-y-4">
                  <p>
                    L'attività innovativa è focalizzata sullo{" "}
                    <strong>
                      sviluppo di formulazioni cosmetiche basate su ingredienti
                      di origine vegetale
                    </strong>
                    , con particolare attenzione al riutilizzo dei bioresidui
                    dell'industria agroalimentare marchigiana, dai quali vengono
                    estratti principi attivi ad alto valore biologico per
                    l'arricchimento delle formulazioni.
                  </p>
                  <p>
                    Le attività di ricerca comprendono la{" "}
                    <strong>
                      caratterizzazione chimico-fisica e biologica degli
                      estratti
                    </strong>{" "}
                    e la{" "}
                    <strong>
                      valutazione dell'efficacia in vitro dei prototipi
                    </strong>
                    .
                  </p>
                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary mt-4">
                    <h3 className="font-semibold mb-3 text-neutral-800">
                      Spese di Ricerca e Sviluppo
                    </h3>
                    <p>
                      Le spese di ricerca e sviluppo riguardano consulenze
                      scientifiche, materiali di laboratorio, test di efficacia
                      e sicurezza, studi analitici e attività di progettazione e
                      sviluppo di
                      <strong> packaging ecosostenibile</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-200 my-16"></div>

          {/* Il Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-light text-neutral-800">
                  Il Nostro Team
                </h2>
              </div>
              <p className="text-neutral-600 font-sans">
                Un gruppo di professionisti altamente qualificati con competenze
                complementari
              </p>
            </div>

            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-neutral-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary mb-2">{member.role}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-neutral-600 hover:text-primary transition mb-3 inline-block"
                      >
                        {member.email}
                      </a>
                      <p className="text-neutral-700 font-sans leading-relaxed text-sm">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soci Aggiuntivi */}
            <div className="mt-8 bg-neutral-50 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-neutral-700 font-sans leading-relaxed">
                <strong>Altri soci:</strong> Università Politecnica delle Marche
              </p>
              <p className="text-sm text-neutral-600 font-sans mt-2">
                Il legale rappresentante della società dichiara, ai sensi degli
                articoli 46, 47 e 76 del D.P.R. 445/2000, la veridicità
                dell'elenco soci iscritto al Registro delle Imprese e la sua
                trasparenza rispetto a fiduciarie o holding.
              </p>
            </div>
          </div>

          {/* Partnership */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-light mb-4 text-neutral-800">
                  Partnership e Collaborazioni
                </h2>
                <div className="bg-neutral-50 from-primary/10 to-primary/5 p-8 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-neutral-800">
                        Università Politecnica delle Marche
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Partner strategico per ricerca e sviluppo
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-700 font-sans leading-relaxed">
                    AMAREA Cosmetics intrattiene{" "}
                    <strong>relazioni professionali e di collaborazione</strong>{" "}
                    con l'Università Politecnica delle Marche, dove vengono
                    svolte le principali attività di ricerca e sviluppo dei
                    prodotti. Questa partnership garantisce solide basi
                    scientifiche e validazione accademica delle formulazioni
                    sviluppate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Società Partecipate */}
          <div className="mb-16">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-700 font-sans">
                <strong>Società partecipate:</strong> Nessuna società
                partecipata
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-200 my-16"></div>

          {/* Contatti Section */}
          <div>
            <h2 className="text-3xl font-light mb-12 text-neutral-800 text-center">
              I Nostri Contatti
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Indirizzo */}
              <div className="bg-neutral-50 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-neutral-800">
                    Sede Principale
                  </h3>
                </div>
                <p className="text-neutral-700 font-sans leading-relaxed">
                  Contrada Brecce Bianche, snc
                  <br />
                  60131 Ancona (AN)
                  <br />
                  DiSVA - Università Politecnica delle Marche
                </p>
              </div>

              {/* Email */}
              <div className="bg-neutral-50 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-neutral-800">Email</h3>
                </div>
                <a
                  href="mailto:amareacosmetics@gmail.com"
                  className="text-primary font-sans hover:opacity-70 transition"
                >
                  info@amareacosmetics.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
