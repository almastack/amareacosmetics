import React from 'react';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6  text-primary"/>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-neutral-800">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-600 font-sans">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679
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
              AMAREA Cosmetics S.r.l. (di seguito "AMAREA" o "la Società") rispetta la privacy degli utenti 
              e si impegna a proteggere i dati personali in conformità con il Regolamento Generale sulla 
              Protezione dei Dati (GDPR - Regolamento UE 2016/679) e la normativa italiana applicabile.
            </p>
            <p className="text-lg text-neutral-700 font-sans leading-relaxed">
              La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione dei dati 
              personali degli utenti del nostro sito web.
            </p>
          </div>

          {/* Titolare del Trattamento */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center  bg-primary">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">1. Titolare del Trattamento</h2>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg">
              <p className="text-neutral-700 font-sans leading-relaxed mb-4">
                <strong>AMAREA Cosmetics S.r.l.</strong>
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                Sede legale: Via Brecce Bianche, snc - 60131 Ancona (AN) - DiSVA
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed">
                Email: <a href="mailto:amareacosmetics@gmail.com" className="hover:opacity-70 transition text-primary">amareacosmetics@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Dati Raccolti */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary" >
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">2. Dati Personali Raccolti</h2>
            </div>
            <p className="text-neutral-700 font-sans leading-relaxed mb-6">
              I dati personali che possiamo raccogliere includono:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 pl-6 py-3 border-primary">
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Dati di contatto</h3>
                <p className="text-neutral-600 font-sans">Nome, cognome, indirizzo email, numero di telefono</p>
              </div>
              <div className="border-l-4 pl-6 py-3 border-primary">
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Dati di navigazione</h3>
                <p className="text-neutral-600 font-sans">Indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della visita</p>
              </div>
              <div className="border-l-4 pl-6 py-3 border-primary">
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Dati volontariamente forniti</h3>
                <p className="text-neutral-600 font-sans">Informazioni fornite tramite form di contatto o iscrizione alla newsletter</p>
              </div>
            </div>
          </div>

          {/* Finalità del Trattamento */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">3. Finalità del Trattamento</h2>
            </div>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              I dati personali vengono trattati per le seguenti finalità:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Rispondere a richieste di informazioni e fornire assistenza</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Invio di newsletter e comunicazioni commerciali (previo consenso)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Miglioramento dei servizi offerti e dell'esperienza utente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Adempimento di obblighi di legge, contabili e fiscali</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Analisi statistiche in forma aggregata e anonima</span>
              </li>
            </ul>
          </div>

          {/* Base Giuridica */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">4. Base Giuridica del Trattamento</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Il trattamento dei dati personali si basa su:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Consenso dell'interessato</strong> per l'invio di comunicazioni commerciali e newsletter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Esecuzione di misure precontrattuali</strong> adottate su richiesta dell'interessato</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Legittimo interesse</strong> del Titolare per attività di analisi e miglioramento dei servizi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Obblighi di legge</strong> cui è soggetto il Titolare</span>
              </li>
            </ul>
          </div>

          {/* Modalità di Trattamento */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">5. Modalità di Trattamento</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              I dati personali sono trattati con strumenti informatici e telematici, secondo principi di 
              correttezza, liceità e trasparenza. Sono adottate misure di sicurezza tecniche e organizzative 
              adeguate per proteggere i dati da accessi non autorizzati, perdita, distruzione o divulgazione.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed">
              Il trattamento può essere effettuato sia in forma automatizzata che manuale, da personale 
              specificatamente autorizzato e istruito.
            </p>
          </div>

          {/* Conservazione */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">6. Conservazione dei Dati</h2>
            <p className="text-neutral-700 font-sans leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente necessario al raggiungimento 
              delle finalità per cui sono stati raccolti. In particolare:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans mt-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Dati per finalità di marketing: fino alla revoca del consenso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Dati di contatto: per il tempo necessario a evadere la richiesta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Dati per obblighi di legge: per il periodo previsto dalla normativa vigente</span>
              </li>
            </ul>
          </div>

          {/* Comunicazione e Diffusione */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">7. Comunicazione e Diffusione dei Dati</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              I dati personali potranno essere comunicati a:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Soggetti che forniscono servizi per la gestione del sistema informatico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Consulenti e professionisti esterni (commercialisti, legali)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span>Autorità pubbliche per adempimenti di legge</span>
              </li>
            </ul>
            <p className="text-neutral-700 font-sans leading-relaxed mt-4">
              I dati non saranno oggetto di diffusione.
            </p>
          </div>

          {/* Diritti dell'Interessato */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">8. Diritti dell'Interessato</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="space-y-3 text-neutral-700 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Accedere</strong> ai tuoi dati personali</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Rettificare</strong> dati inesatti o incompleti</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Cancellare</strong> i dati (diritto all'oblio)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Limitare</strong> il trattamento dei dati</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Opporti</strong> al trattamento dei dati</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Portabilità</strong> dei dati</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Revocare</strong> il consenso in qualsiasi momento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl text-primary">•</span>
                <span><strong>Proporre reclamo</strong> all'Autorità Garante per la Protezione dei Dati Personali</span>
              </li>
            </ul>
            <div className="bg-neutral-50 p-6 rounded-lg mt-6">
              <p className="text-neutral-700 font-sans leading-relaxed">
                Per esercitare i tuoi diritti, contattaci all'indirizzo:{' '}
                <a href="mailto:amareacosmetics@gmail.com" className="hover:opacity-70 transition font-medium text-primary">
                  amareacosmetics@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Cookie */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">9. Cookie</h2>
            <p className="text-neutral-700 font-sans leading-relaxed mb-4">
              Il nostro sito web può utilizzare cookie tecnici necessari al funzionamento del sito e 
              cookie analitici per raccogliere informazioni statistiche aggregate sull'utilizzo del sito.
            </p>
            <p className="text-neutral-700 font-sans leading-relaxed">
              Puoi gestire le preferenze sui cookie attraverso le impostazioni del tuo browser. 
              Il blocco di alcuni cookie potrebbe influire sulla fruibilità di alcune funzionalità del sito.
            </p>
          </div>

          {/* Modifiche */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-neutral-800 mb-6">10. Modifiche alla Privacy Policy</h2>
            <p className="text-neutral-700 font-sans leading-relaxed">
              AMAREA si riserva il diritto di modificare o aggiornare la presente Privacy Policy. 
              Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. 
              Ti invitiamo a consultare periodicamente questa pagina per essere informato sulle eventuali modifiche.
            </p>
          </div>

          {/* Contatti */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-light text-neutral-800">11. Contatti</h2>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg">
              <p className="text-neutral-700 font-sans leading-relaxed mb-4">
                Per qualsiasi domanda o richiesta relativa alla presente Privacy Policy o al trattamento 
                dei tuoi dati personali, puoi contattarci:
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                <strong>AMAREA Cosmetics S.r.l.</strong>
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed mb-2">
                Via Brecce Bianche, snc - 60131 Ancona (AN) - DiSVA
              </p>
              <p className="text-neutral-700 font-sans leading-relaxed">
                Email:{' '}
                <a href="mailto:amareacosmetics@gmail.com" className="hover:opacity-70 transition font-medium text-primary">
                  amareacosmetics@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 className="text-2xl font-light mb-4 text-white">
            La tua privacy è importante per noi
          </h3>
          <p className="text-white/90 font-sans">
            Ci impegniamo a proteggere i tuoi dati personali con la massima cura e trasparenza
          </p>
        </div>
      </section>
    </div>
  );
}