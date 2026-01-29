"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "ro" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  ro: {
    // Navigation
    "nav.home": "Acasă",
    "nav.about": "Despre Noi",
    "nav.services": "Servicii",
    "nav.medical-team": "Echipa Medicală",
    "nav.stays": "Sejururi",
    "nav.patient-info": "Info Pacienți",
    "nav.medical-info": "Info Medical",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "nav.blog": "Blogul Andreei",

    // Hero Section
    "hero.title": "Stiinta Longevitatii la Malul Marii",
    "hero.subtitle":
      "Biohacking avansat și recuperare medicală într-o oază de relaxare.",

    // Common
    "common.book-now": "Rezervă Acum",
    "common.learn-more": "Află Mai Mult",
    "common.view-all-services": "Vezi Toate Serviciile",

    // Facilities
    "facilities.title": "Facilități",

    //Our Vision
    "our-vision-section.title": "Viziunea Noastra",
    "our-vision-section.subtitle":
      "Lumea noastră se transformă cu o rapiditate fără precedent. Schimbările globale – de la digitalizare și inteligență artificială, la provocările climatice și fluctuațiile socio-economice – ne solicită sănătatea la un nivel nemaiîntâlnit. Aceste timpuri provocatoare cer o noua dimensiune a medicinei: o medicină care pune omul în centrul vindecării.",

    // Featured Services
    "services.featured.title": "Servicii",
    "services.featured.subtitle":
      "Descoperă tratamentele noastre de top pentru regenerare completă.",

    "service.hbot.title": "HBOT & Lumina Rosie",
    "service.hbot.desc":
      "Oxigenare celulară intensă sub presiune combinată cu fotobiomodulare pentru regenerare accelerată.",

    "service.iv.title": "IV Drips & NAD+",
    "service.iv.desc":
      "Cocktailuri intravenoase personalizate și infuzii NAD+ pentru energie instantanee și claritate mentală.",

    "service.endo.title": "SeaMed EndoSupport",
    "service.endo.desc":
      "Abordare integrativă pentru sănătatea endocrină, susținută de elemente marine terapeutice.",

    //Galerie
    "gallery.title": "Galeria Noastra",
    "gallery.subtitle":
      "Descoperă atmosfera relaxantă și facilitățile de top de la Riviera Vraja Mării",

    //Blog
    "blog.title": "Blogul Andreei",
    "blog.subtitle":
      "Perspective despre biohacking, longevitate și wellness din expertiza Andreei.",

    //Cookies Policy
    "cookies-policy.title": "Politica de utilizare a Cookie-urilor",
    "cookies-policy.content_paragraphs": [
      "SC ASCLEPIOS SRL",
      "Nr. Inreg. Reg. Com.: J1992000693137",
      "Inregistrati la ANSPDCP cu Număr Registrul General: 948",
      "CUI: 1864633",
      "Politica de utilizare a Cookie-urilor, politica de confidentialitate a website-ului.",
      "Site-ul bythesea.complexvrajamarii.ro utilizează cookie-uri. Folosim cookie-uri pentru a personaliza conținutul și anunțurile, pentru a oferi funcții de rețele sociale și pentru a analiza traficul. De asemenea, le oferim partenerilor de rețele sociale, de publicitate și de analize informații cu privire la modul în care folosiți site-ul nostru. Aceștia le pot combina cu alte informații oferite de dvs. sau culese în urma folosirii serviciilor lor.",
      "Cookie-urile sunt mici fişiere de text ce pot fi utilizate de către site-urile web pentru a face utilizarea lor mai eficientă. Legea stipulează că putem stoca cookie-uri pe dispozitivul dvs., în cazul în care ele sunt strict necesare pentru operarea acestui site. Pentru toate celelalte tipuri de cookie-uri avem nevoie de permisiunea dvs.",
      "Acest site utilizează diferite tipuri de cookie-uri. Unele cookie-uri sunt plasate de către servicii părţi terţe care apar pe paginile noastre. Consimţământul dvs. se aplică acestui domeniu web: https://bythesea.complexvrajamarii.ro",
      "Informațiile prezentate în continuare au scopul de a aduce la cunoștința utilizatorului mai multe detalii despre plasarea, utilizarea și administrarea “cookie”-urilor utilizate de site-ul bythesea.complexvrajamarii.ro.",
      "Contact: În cazul în care aveți nevoie de mai multe informații și acestea nu se regasesc mai jos, ne puteți contacta la email office@complexvrajamarii.ro.",
      "Vă rugăm să citiți cu atenție informațiile care urmează: Acest website folosește cookie-uri proprii și de la terți pentru a furniza vizitatorilor o experiență mult mai bună de navigare și servicii adaptate nevoilor și interesului fiecăruia.",
      "În ceea ce numim “web 2.0”, cookie-urile joacă un rol important în facilitarea accesului la multiple servicii, cum ar fi personalizarea limbii, feedback valoros pentru deținătorii de site-uri, și includerea aplicațiilor multimedia de pe alte site-uri.",
      "Ce este un “cookie”? Un “Internet Cookie” este un fișier de mici dimensiuni, format din litere și numere, stocat pe computerul sau terminalul mobil. Este complet “pasiv” (nu conține software, viruși sau spyware și nu poate accesa informațiile de pe hard drive-ul utilizatorului). Un cookie este format din nume și conținut, având o durată de existență determinată.",
      "Există 2 categorii mari: Cookie-uri de sesiune (stocate temporar până la închiderea browserului) și Cookie-uri Persistente (stocate pe hard-drive pentru o durată prestabilită, inclusiv cele plasate de terți).",
      "Avantajele cookie-urilor: Acestea asigură o experiență plăcută de navigare și susțin eforturile website-urilor de a oferi servicii de calitate (preferințe de confidențialitate, coșuri de cumpărături sau publicitate relevantă).",
      "Durata de viață: Aceasta variază semnificativ. Unele sunt folosite pentru o singură sesiune, altele sunt reținute și refolosite de fiecare dată când utilizatorul revine. Totuși, pot fi șterse de utilizator în orice moment.",
      "Cookie-urile plasate de terți: Anumite secțiuni (news box, video, reclame) pot fi furnizate de terți. Acești furnizori (ex: Zontera.com, Doubleclick.com, adocean.pl, Gemius, onesignal.com, facebook.com) trebuie să respecte legislația în vigoare.",
      "Google Analytics: Site-ul folosește Google Analytics pentru a colecta informații despre utilizare și a detecta probleme. Informațiile sunt anonime și nu pot fi folosite pentru identificarea utilizatorului.",
      "Cookie-uri de performanță: Rețin preferințele utilizatorului pe acest site (ex: setările volumului, viteza de streaming).",
      "Cookie-uri de înregistrare: Atunci când vă înregistrați, generăm un cookie care ne anunță dacă sunteți autentificat, permițându-ne să asociem comentariile cu username-ul dvs.",
      "Securitate: Cookie-urile NU sunt viruși. Totuși, pot fi folosite ca o formă de Spyware. Browserele moderne au setări de confidențialitate pentru a gestiona nivelele de acceptare a cookie-urilor.",
      "Sfaturi pentru navigare sigură: Particularizați setările browserului, instalați aplicații antispyware și asigurați-vă că browserul este mereu updatat.",
      "Cum pot opri cookie-urile? Dezactivarea cookie-urilor poate face anumite site-uri nefuncționale (ex: nu veți putea lăsa comentarii). Setările se găsesc de regulă în meniul „opțiuni” sau „preferințe” al browserului.",
    ],

    //Terms and Conditions
    "terms-conditions.title":
      "Termeni si Conditii de Accesare a Serviciilor Medicale",
    "terms-conditions.content_paragraphs": [
      "ASCLEPIOS SRL, cu sediul social în strada Ion Movilă nr. 21, Eforie Sud, județul Constanța, înregistrată sub nr. J1992000693137, C.I.F. 1864633 („Operatorul” locațiilor VRAJA MĂRII by the Park, by the Lake și in City), colectează și prelucrează datele personale în conformitate cu Regulamentul European 679/2016 (GDPR).",
      "Prezentul document stabilește regulile și principiile de utilizare a serviciilor de recuperare medicală VRAJA MĂRII. Prin efectuarea unei programări sau prezentarea la oricare dintre locațiile noastre, vă exprimați acordul pentru respectarea acestor termeni. Ultima variantă aplicabilă este disponibilă pe bythesea.complexvrajamarii.ro.",
      "Serviciile medicale sunt accesibile, de regulă, de luni până sâmbătă (08:00 – 20:00) și duminică (08:00 – 16:00), pe bază de programare telefonică la 0241.747.916 sau online prin site-ul bythesea.complexvrajamarii.ro.",
      "Definiții cheie: Pacientul este persoana care accesează serviciile; Pacientul CAS este cel care beneficiază de decontare prin Casa Națională de Asigurări de Sănătate; Personalul VRAJA MĂRII include angajații, consultanții și colaboratorii care prestează servicii în numele operatorului.",
      "Pacienții CAS trebuie să dovedească calitatea de asigurat prin prezentarea cumulativă a cardului de sănătate, a biletului de trimitere și a cărții de identitate. Serviciile decontate sunt disponibile în limita fondurilor existente.",
      "Informațiile privind prețurile obținute telefonic sau online au caracter informativ. Va prevala întotdeauna contractul semnat cu pacientul sau lista de prețuri afișată în recepție. Obligația medicală este una de diligență; deși tindem spre cele mai înalte standarde, nu se poate garanta un rezultat medical specific.",
      "În conformitate cu Codul Fiscal, nu emitem facturi pe numele unor entități juridice (SRL, PFA) decât dacă există un contract de prestări servicii medicale încheiat în prealabil cu acea entitate.",
      "Accesul la servicii este condiționat de achitarea oricăror debite anterioare. În cazul în care asiguratorul (CAS sau privat) refuză plata serviciilor din orice motiv, obligația de plată revine integral pacientului.",
      "VRAJA MĂRII are toleranță zero pentru comportamente obscene, injurii, violență sau deteriorarea bunurilor. În astfel de cazuri, personalul poate solicita evacuarea imediată, intervenția echipelor de pază sau a Poliției și poate rezilia unilateral orice contract cu persoana implicată.",
      "Prezentele condiții se supun revizuirilor periodice. Vă rugăm să consultați periodic secțiunea dedicată de pe bythesea.complexvrajamarii.ro pentru actualizări. Ne puteți contacta la office@complexvrajamarii.ro sau la numărul 0241.747.916.",
    ],

    //Privacy
    "privacy.title": "Nota de Informare privind Protecția Datelor (GDPR)",
    "privacy.content_paragraphs": [
      "ASCLEPIOS SRL (incluzând locațiile Vraja Mării by the Park, in City și by the Lake), înregistrată la ANSPDCP cu nr. 948, prelucrează datele dumneavoastră personale în conformitate cu Regulamentul (UE) 2016/679 (GDPR). Protecția vieții dumneavoastră private este o misiune asumată conștient de managementul nostru.",
      "Categoriile de date prelucrate includ: date de identificare (nume, CNP, serie/număr act identitate), date de contact (telefon, e-mail, adresă), date de plată (card bancar, IBAN), detalii profesionale și, cel mai important, date medicale sensibile (simptome, diagnostic, istoric medical) necesare pentru stabilirea planului de recuperare.",
      "Monitorizarea video (CCTV) este utilizată în zonele publice (recepții, holuri, împrejurimi) pentru siguranța persoanelor și a bunurilor. Prin accesul în aceste zone marcate, vă exprimați acordul tacit pentru această supraveghere, conform dispozițiilor legale.",
      "Temeiurile juridice ale prelucrării sunt: executarea contractului de servicii medicale, îndeplinirea obligațiilor legale (raportări către CAS/Ministerul Sănătății), interesul legitim (îmbunătățirea serviciilor, securitate) și, în anumite cazuri, consimțământul dumneavoastră (pentru acțiuni de marketing sau profilare).",
      "Datele pot fi dezvăluite către parteneri contractuali (furnizori IT, contabilitate, medici colaboratori) sau autorități publice (CNAS, Poliție), doar în limitele legii și sub angajamente stricte de confidențialitate. Nu transferăm datele dumneavoastră în afara spațiului UE/SEE.",
      "Perioada de retenție a datelor respectă normele legale: 10 ani pentru documentele financiar-contabile, pe durata calității de pacient pentru informări medicale, și maximum 30 de zile pentru înregistrările video CCTV.",
      "În calitate de persoană vizată, aveți următoarele drepturi: dreptul de acces la date, rectificarea, ștergerea ('dreptul de a fi uitat'), restricționarea prelucrării, portabilitatea datelor, dreptul la opoziție și dreptul de a nu fi supus unui proces decizional automatizat.",
      "Securitatea datelor este asigurată prin măsuri tehnice precum: back-up-uri zilnice, instruirea personalului, limitarea accesului la date (nevoia de a cunoaște) și politici stricte de securitate informatică.",
      "Refuzul furnizării datelor obligatorii (nume, date medicale, ID) poate duce la imposibilitatea prestării serviciilor solicitate sau a înregistrării cazării, conform reglementărilor legale în vigoare.",
      "Pentru orice întrebări sau exercitarea drepturilor, ne puteți contacta la dpd@complexvrajamarii.ro sau office@complexvrajamarii.ro. De asemenea, aveți dreptul de a depune o plângere la ANSPDCP dacă considerați că drepturile v-au fost încălcate.",
    ],

    //Footer
    "footer.customer-rules": "Regulament Pacienți",
    "footer.terms": "Termeni și Condiții",
    "footer.privacy": "Politica de Confidențialitate",
    "footer.cookies": "Politica de Cookie-uri",
    "footer.contact": "Contact",
    "footer.copyright": "Vraja Mării by The Sea. Toate drepturile rezervate.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.medical-team": "Medical Team",
    "nav.stays": "Stays",
    "nav.patient-info": "Patient Info",
    "nav.medical-info": "Medical Info",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.blog": "Andreea's Blog",
    // Hero Section
    "hero.title": "The Science of Longevity by the Sea",
    "hero.subtitle":
      "Advanced biohacking and medical recovery in a seaside sanctuary.",

    // Common
    "common.book-now": "Book Now",
    "common.learn-more": "Learn More",
    "common.view-all-services": "View All Services",

    // Facilities
    "facilities.title": "Facilities",

    //Our Vision
    "our-vision-section.title": "Our Vision",
    "our-vision-section.subtitle":
      "Our world is transforming at an unprecedented pace. Global changes – from digitalization and artificial intelligence to climate challenges and socio-economic fluctuations – are demanding our health at a level never seen before. These challenging times call for a new dimension of medicine: a medicine that puts people at the center of healing.",

    // Featured Services
    "services.featured.title": "Services",
    "services.featured.subtitle":
      "Discover our top treatments for complete regeneration.",

    "service.hbot.title": "HBOT & Red Light",
    "service.hbot.desc":
      "Intense cellular oxygenation under pressure combined with photobiomodulation for accelerated regeneration.",

    "service.iv.title": "IV Drips & NAD+",
    "service.iv.desc":
      "Customized intravenous cocktails and NAD+ infusions for instant energy and mental clarity.",

    "service.endo.title": "SeaMed EndoSupport",
    "service.endo.desc":
      "Integrative approach to endocrine health, supported by therapeutic marine elements.",

    //Gallery
    "gallery.title": "Our Gallery",
    "gallery.subtitle":
      "Discover the relaxing atmosphere and top facilities at Riviera Vraja Mării",

    //Blog
    "blog.title": "Andreea's Blog",
    "blog.subtitle":
      "Insights on biohacking, longevity, and wellness from Andreea's expertise.",

    //Cookies Policy
    "cookies-policy.title": "Cookie Usage Policy",
    "cookies-policy.content_paragraphs": [
      "SC ASCLEPIOS SRL",
      "Trade Reg. No.: J1992000693137",
      "Registered with ANSPDCP under General Register Number: 948",
      "Tax ID: 1864633",
      "Cookie Usage Policy and Website Privacy Policy.",
      "The website bythesea.complexvrajamarii.ro uses cookies. We use cookies to personalize content and ads, to provide social media features, and to analyze traffic. We also provide our social media, advertising, and analytics partners with information regarding your use of our site. They may combine it with other information provided by you or collected from your use of their services.",
      "Cookies are small text files that can be used by websites to make their use more efficient. The law stipulates that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies, we require your permission.",
      "This site uses different types of cookies. Some cookies are placed by third-party services that appear on our pages. Your consent applies to this web domain: https://bythesea.complexvrajamarii.ro",
      "The information presented below aims to inform the user about the placement, use, and management of cookies used by the bythesea.complexvrajamarii.ro website.",
      "Contact: Should you require more information not found below, you can contact us at office@complexvrajamarii.ro.",
      "Please read the following information carefully: This website uses first-party and third-party cookies to provide visitors with a much better browsing experience and services tailored to each individual's needs and interests.",
      "In what is known as 'Web 2.0', cookies play an important role in facilitating access to multiple services, such as language settings, providing valuable feedback to site owners, and allowing multimedia applications from other sites to be embedded.",
      "What is a 'cookie'? An 'Internet Cookie' is a small file consisting of letters and numbers stored on a computer or mobile terminal. It is completely 'passive' (it does not contain software, viruses, or spyware and cannot access information on the user's hard drive). A cookie consists of a name and content, with a fixed lifespan.",
      "There are two main categories: Session Cookies (stored temporarily until the browser is closed) and Persistent Cookies (stored on the hard drive for a predetermined duration, including those placed by third parties).",
      "Advantages of cookies: They ensure a pleasant browsing experience and support the efforts of websites to provide quality services (privacy preferences, shopping carts, or relevant advertising).",
      "Lifespan of a cookie: This varies significantly depending on its purpose. Some are used for a single session, while others are retained and reused each time a user returns. However, they can be deleted by the user at any time.",
      "Third-party cookies: Certain sections (news boxes, videos, ads) may be provided by third parties. These providers (e.g., Zontera.com, Doubleclick.com, adocean.pl, Gemius, onesignal.com, facebook.com) must also comply with current laws.",
      "Google Analytics: The site uses Google Analytics to collect usage information and detect issues. The information is anonymous and cannot be used to identify the user.",
      "Performance cookies: These remember user preferences on this site (e.g., volume settings, streaming speed).",
      "Registration cookies: When you register, we generate a cookie that tells us if you are logged in, allowing us to associate comments with your username.",
      "Security: Cookies are NOT viruses. However, they can be used for negative purposes as a form of Spyware. Modern browsers include privacy settings to manage cookie acceptance levels.",
      "Tips for safe browsing: Customize your browser settings, install antispyware applications, and ensure your browser is always updated.",
      "How can I stop cookies? Disabling cookies may make certain websites non-functional (e.g., you will not be able to leave comments). Settings are usually found in the 'options' or 'preferences' menu of your browser.",
    ],

    //Terms and Conditions
    "terms-conditions.title": "Terms and Conditions for Medical Services",
    "terms-conditions.content_paragraphs": [
      "ASCLEPIOS SRL, headquartered at Ion Movilă St. no. 21, Eforie Sud, Constanța, registered under no. J1992000693137, C.I.F. 1864633 (the 'Operator' of VRAJA MĂRII by the Park, by the Lake, and in City locations), collects and processes personal data in accordance with EU Regulation 679/2016 (GDPR).",
      "This document outlines the rules and principles for accessing VRAJA MĂRII medical rehabilitation services. By making an appointment or arriving at our locations, you agree to comply with these terms. The latest version is always available at bythesea.complexvrajamarii.ro.",
      "Medical services are generally accessible Monday to Saturday (08:00 – 20:00) and Sunday (08:00 – 16:00), based on telephone appointments at 0241.747.916 or online via bythesea.complexvrajamarii.ro.",
      "Key Definitions: The Patient is the person accessing services; the NHIH (CAS) Patient is covered by the National Health Insurance House; VRAJA MĂRII Staff includes employees, consultants, and collaborators providing services on behalf of the operator.",
      "NHIH (CAS) Patients must prove insured status by providing their health insurance card, a referral letter (bilet de trimitere), and an ID card. Reimbursed services are subject to available funding.",
      "Price information obtained via phone or online is for informational purposes only. The signed contract or the price list displayed at the reception will always prevail. The medical obligation is one of diligence; while we strive for the highest standards, specific medical outcomes cannot be guaranteed.",
      "Per the Fiscal Code, we do not issue invoices to legal entities (LLCs, Sole Traders) unless a specific medical service contract has been previously signed with that entity.",
      "Access to services is conditional upon settling any outstanding debts. If the insurer (NHIH or private) refuses to cover the costs for any reason, the payment obligation remains entirely with the patient.",
      "VRAJA MĂRII has zero tolerance for obscene behavior, insults, violence, or property damage. In such cases, staff may request immediate evacuation, the intervention of security teams or the Police, and may unilaterally terminate any existing contract with the involved party.",
      "These terms are subject to periodic review. Please check the dedicated section on bythesea.complexvrajamarii.ro regularly for updates. You can contact us at office@complexvrajamarii.ro or by phone at 0241.747.916.",
    ],

    //Privacy
    "privacy.title": "Data Protection Information Notice (GDPR)",
    "privacy.content_paragraphs": [
      "ASCLEPIOS SRL (including Vraja Mării by the Park, in City, and by the Lake locations), registered with ANSPDCP under no. 948, processes your personal data in accordance with Regulation (EU) 2016/679 (GDPR). Protecting your private life is a mission consciously undertaken by our management.",
      "Categories of processed data include: identification data (name, Personal ID Number, ID series/number), contact details (phone, email, address), payment details (bank card, IBAN), professional details, and most importantly, sensitive medical data (symptoms, diagnosis, medical history) required for clinical rehabilitation plans.",
      "Video surveillance (CCTV) is used in public areas (receptions, hallways, perimeters) for the safety of individuals and assets. By entering these marked areas, you provide tacit consent for this monitoring, in accordance with legal provisions.",
      "The legal grounds for processing are: performance of the medical services contract, compliance with legal obligations (reporting to NHIH/Ministry of Health), legitimate interest (service improvement, security), and, in specific cases, your consent (for marketing or profiling).",
      "Data may be disclosed to contractual partners (IT providers, accounting, collaborating physicians) or public authorities (NHIH, Police), only within the limits of the law and under strict confidentiality agreements. We do not transfer your data outside the EU/EEA.",
      "The data retention period follows legal norms: 10 years for financial-accounting documents, for the duration of your status as a patient for medical updates, and a maximum of 30 days for CCTV video recordings.",
      "As a data subject, you have the following rights: the right of access, rectification, erasure ('the right to be forgotten'), restriction of processing, data portability, the right to object, and the right not to be subject to automated decision-making.",
      "Data security is ensured through technical measures such as: daily backups, staff training, access restriction (need-to-know basis), and strict cybersecurity policies.",
      "Refusal to provide mandatory data (name, medical data, ID) may result in the impossibility of providing the requested services or registering your accommodation, per current legal regulations.",
      "For any questions or to exercise your rights, you can contact us at dpd@complexvrajamarii.ro or office@complexvrajamarii.ro. You also have the right to lodge a complaint with the ANSPDCP if you believe your rights have been violated.",
    ],

    //Footer
    "footer.copyright": "Vraja Mării by The Sea. All rights reserved.",
    "footer.terms": "Terms and Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
    "footer.customer-rules": "Patient Rules",
    "footer.contact": "Contact",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ro");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "ro" || saved === "en") && saved !== "ro") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string | string[] => {
    return (
      (translations[language][key as keyof (typeof translations)["ro"]] as
        | string
        | string[]) || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
