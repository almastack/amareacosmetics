import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-neutral-800">
            Termini e Condizioni d'Uso
          </h1>
          <p className="text-lg text-neutral-600 font-sans">
            Condizioni generali di utilizzo del sito web AMAREA Cosmetics
          </p>
          <p className="text-sm text-neutral-500 font-sans mt-4">
            Ultimo aggiornamento: Ottobre 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Introduzione */}
          <div className="mb-16">
            <p className="text-lg text-neutral-700 font-sans leading-relaxed mb-6">
              Benvenuto sul sito web di <strong>AMAREA Cosmetics S.r.l.</strong> (di seguito "AMAREA", "noi" o "nostro"). 
              L'utilizzo di questo sito è soggetto ai seguenti Termini e Condizioni d'Uso. 
              Accedendo e utilizzando questo sito, accetti integralmente le presenti condizioni.
            </p>
            <p className="text-lg text-neutral-700 font-sans leading-relaxed">
              Ti invitiamo a leggere attentamente questi termini prima di procedere con la navigazione. 
              Se non accetti questi termini, ti preghiamo di non utilizzare il sito.
            </p>
          </div>

          {/* Informazioni Societarie */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">1. Informazioni sul Titolare</h2>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg">
              <p className="text-neutral-700 font-sans leading-relaxed mb-4">
                <strong>AMAREA Cosmetics S.r.l.</strong>
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                Sede legale: Via Brecce Bianche, snc - 60131 Ancona (AN) - DiSVA
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                Email: <a href="mailto:amareacosmetics@gmail.com" className="text-primary hover:opacity-70 transition">amareacosmetics@gmail.com</a>
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed">
                Settore: Lifescience - Produzione di cosmetici ecosostenibili e naturali
              </p>
            </div>
          </div>

          {/* Oggetto */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">2. Oggetto</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              I presenti Termini e Condizioni regolano l'accesso e l'utilizzo del sito web di AMAREA Cosmetics, 
              inclusi tutti i contenuti, le informazioni e le funzionalità messi a disposizione.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Il sito ha <strong>esclusivamente finalità informativa e promozionale</strong> riguardo ai prodotti 
              cosmetici naturali ed ecosostenibili sviluppati da AMAREA Cosmetics.
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-neutral-700 font-sans leading-relaxed">
                <strong>Nota importante:</strong> Attualmente il sito non dispone di funzionalità di e-commerce. 
                Non è possibile effettuare acquisti diretti attraverso il sito. Per informazioni sui prodotti e 
                modalità di acquisto, si prega di contattarci via email.
              </p>
            </div>
          </div>

          {/* Accettazione */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">3. Accettazione dei Termini</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              L'accesso e l'utilizzo del sito implica l'accettazione incondizionata dei presenti Termini e Condizioni. 
              AMAREA si riserva il diritto di modificare in qualsiasi momento i presenti termini, pubblicando le 
              modifiche su questa pagina.
            </p>
            <div className="flex items-start gap-3 bg-neutral-50 p-6 rounded-lg border-l-4 border-primary">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
              <p className="text-neutral-700 font-sans leading-relaxed">
                L'utente è tenuto a verificare periodicamente eventuali aggiornamenti. 
                L'utilizzo continuato del sito dopo la pubblicazione delle modifiche costituisce accettazione delle stesse.
              </p>
            </div>
          </div>

          {/* Uso del Sito */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">4. Uso Consentito del Sito</h2>
            </div>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              L'utente si impegna a utilizzare il sito in modo lecito e nel rispetto delle leggi vigenti. 
              È espressamente vietato:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Utilizzare il sito per scopi illegali o non autorizzati</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Tentare di accedere ad aree riservate del sito o dei sistemi informatici</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Trasmettere virus, malware o qualsiasi codice dannoso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Raccogliere dati degli utenti senza autorizzazione</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Copiare, modificare, distribuire o riprodurre contenuti protetti da copyright senza autorizzazione</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Utilizzare il sito in modo da danneggiare, sovraccaricare o compromettere il sistema</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Violare i diritti di proprietà intellettuale di AMAREA o di terzi</span>
              </li>
            </ul>
          </div>

          {/* Proprietà Intellettuale */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">5. Proprietà Intellettuale</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Tutti i contenuti presenti sul sito, inclusi ma non limitati a testi, immagini, grafica, loghi, 
              icone, fotografie, video, software e codice, sono di proprietà esclusiva di AMAREA Cosmetics o 
              dei rispettivi proprietari e sono protetti dalle leggi italiane e internazionali sul diritto d'autore 
              e sulla proprietà intellettuale.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              È vietata la riproduzione, distribuzione, modifica o utilizzo dei contenuti del sito senza 
              l'autorizzazione scritta di AMAREA, salvo quanto espressamente consentito dalla legge.
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-700 font-sans leading-relaxed">
                <strong>Marchi registrati:</strong> Il nome "AMAREA" e il logo associato sono marchi di AMAREA Cosmetics S.r.l. 
                L'uso non autorizzato di tali marchi è severamente vietato.
              </p>
            </div>
          </div>

          {/* Contenuti Utente */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">6. Contenuti Forniti dall'Utente</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Se l'utente invia contenuti attraverso il sito (ad esempio tramite form di contatto, commenti o feedback), 
              garantisce di possedere tutti i diritti necessari su tali contenuti e concede a AMAREA una licenza 
              non esclusiva e gratuita per utilizzare, modificare e pubblicare tali contenuti.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed">
              L'utente è responsabile dei contenuti che invia e si impegna a non trasmettere materiali illegali, 
              diffamatori, offensivi o che violino i diritti di terzi.
            </p>
          </div>

          {/* Link Esterni */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">7. Link a Siti di Terze Parti</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Il sito può contenere link a siti web di terze parti. AMAREA non ha alcun controllo su tali siti 
              e non è responsabile per il loro contenuto, la loro disponibilità o le loro pratiche sulla privacy.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed">
              L'inclusione di link a siti esterni non implica alcuna approvazione o raccomandazione da parte di AMAREA. 
              L'accesso a siti di terze parti avviene a rischio dell'utente.
            </p>
          </div>

          {/* Limitazione Responsabilità */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">8. Limitazione di Responsabilità</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              AMAREA si impegna a fornire informazioni accurate e aggiornate, tuttavia non garantisce che:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans mb-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Il sito sia sempre disponibile, ininterrotto o privo di errori</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Le informazioni siano complete, accurate o aggiornate in ogni momento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Il sito sia immune da virus o altri componenti dannosi</span>
              </li>
            </ul>
            <p className="text-neutral-700 font-sans leading-relaxed">
              AMAREA non sarà responsabile per danni diretti, indiretti, incidentali o consequenziali derivanti 
              dall'uso o dall'impossibilità di utilizzare il sito, salvo quanto previsto dalla legge applicabile.
            </p>
          </div>

          {/* Disponibilità Servizio */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">9. Disponibilità del Servizio</h2>
            <p className="text-neutral-700 font-sans leading-relaxed">
              AMAREA si riserva il diritto di modificare, sospendere o interrompere, temporaneamente o permanentemente, 
              tutto o parte del sito, con o senza preavviso, per manutenzione, aggiornamenti o per qualsiasi altra ragione. 
              AMAREA non sarà responsabile nei confronti dell'utente o di terzi per eventuali modifiche, sospensioni 
              o interruzioni del servizio.
            </p>
          </div>

          {/* Informazioni Prodotti */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">10. Informazioni sui Prodotti</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Le informazioni sui prodotti cosmetici presenti sul sito hanno <strong>esclusivamente carattere informativo</strong>. 
              Il sito non offre attualmente servizi di vendita online.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              AMAREA si impegna a fornire descrizioni accurate dei propri prodotti, tuttavia le informazioni 
              potrebbero essere soggette a modifiche e aggiornamenti senza preavviso.
            </p>
            <div className="flex items-start gap-3 bg-neutral-50 p-6 rounded-lg border-l-4 border-primary">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-amber-600" />
              <p className="text-neutral-700 font-sans leading-relaxed">
                <strong>Importante:</strong> Le immagini e le descrizioni dei prodotti hanno scopo illustrativo. 
                Per informazioni dettagliate sui prodotti, modalità di acquisto e disponibilità, 
                si prega di contattare AMAREA all'indirizzo email indicato.
              </p>
            </div>
          </div>

          {/* Legge Applicabile */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">11. Legge Applicabile e Foro Competente</h2>
            </div>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              I presenti Termini e Condizioni sono regolati dalla legge italiana. 
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed">
              Per qualsiasi controversia derivante dall'interpretazione o dall'esecuzione dei presenti termini, 
              sarà competente in via esclusiva il Foro di Ancona, salvo diversa previsione inderogabile di legge.
            </p>
          </div>

          {/* Comunicazioni */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">12. Comunicazioni</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Tutte le comunicazioni relative ai presenti Termini e Condizioni devono essere inviate a:
            </p>
            <div className="bg-neutral-50 p-8 rounded-lg">
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                <strong>AMAREA Cosmetics S.r.l.</strong>
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                Via Brecce Bianche, snc - 60131 Ancona (AN) - DiSVA
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed">
                Email:{' '}
                <a href="mailto:amareacosmetics@gmail.com" className="text-primary hover:opacity-70 transition font-medium">
                  amareacosmetics@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Separabilità */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">13. Clausola di Separabilità</h2>
            <p className="text-neutral-700 font-sans leading-relaxed">
              Qualora una o più clausole dei presenti Termini e Condizioni vengano dichiarate invalide o inefficaci, 
              le restanti clausole manterranno la loro piena validità ed efficacia. 
              Le clausole invalide saranno sostituite da disposizioni valide che rispecchino quanto più possibile 
              l'intento originale delle parti.
            </p>
          </div>

          {/* Contatti */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">14. Domande e Contatti</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-6">
              Per qualsiasi domanda o chiarimento riguardo ai presenti Termini e Condizioni, 
              ti invitiamo a contattarci:
            </p>
            <div className="bg-neutral-50 p-8 rounded-lg">
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                Email:{' '}
                <a href="mailto:amareacosmetics@gmail.com" className="text-primary hover:opacity-70 transition font-medium">
                  amareacosmetics@gmail.com
                </a>
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed">
                Saremo lieti di rispondere a ogni tua richiesta nel più breve tempo possibile.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 className="text-2xl font-light mb-4 text-white">
            Hai domande sui nostri termini?
          </h3>
          <p className="text-white/90 font-sans mb-6">
            Il nostro team è a disposizione per qualsiasi chiarimento
          </p>
          <a
            href="mailto:amareacosmetics@gmail.com"
            className="inline-block px-10 py-4 bg-white text-primary text-sm tracking-widest rounded-full hover:bg-neutral-100 transition"
          >
            CONTATTACI
          </a>
        </div>
      </section>
    </div>
  );
}