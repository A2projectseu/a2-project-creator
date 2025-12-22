// Language context for i18n support
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Servizi',
    'nav.itSolution': 'IT Solution',
    'nav.contact': 'Contatti',
    
    // Hero
    'hero.title': 'Siti web su misura per privati e piccole realtà in Italia',
    'hero.subtitle': 'A² Projects offre soluzioni IT personalizzate, con un focus particolare su siti web moderni, veloci e perfettamente integrati per far crescere la tua presenza digitale.',
    'hero.cta.primary': 'Richiedi una demo gratuita del tuo sito',
    'hero.cta.secondary': 'Scopri IT Solution',
    'hero.cta.note': 'Paghi solo se sei soddisfatto del risultato',
    
    // About
    'about.title': 'Chi sono',
    'about.text1': 'Sono Andrea Agostini, un professionista IT con una passione per la tecnologia che mi accompagna da sempre. Con una laurea e diverse certificazioni nel settore informatico, ho fatto della qualità e dell\'affidabilità i pilastri del mio lavoro.',
    'about.text2': 'A² Projects nasce dalla volontà di offrire soluzioni IT serie e moderne a privati e piccole imprese italiane, contribuendo a colmare il divario digitale che ancora caratterizza il nostro paese.',
    'about.linkedin': 'Connettiti su LinkedIn',
    
    // Services
    'services.title': 'Servizi',
    'services.subtitle': 'Soluzioni IT complete per privati e piccole imprese',
    'services.itSolution.title': 'IT Solution',
    'services.itSolution.desc': 'Servizio IT completo: creazione siti web personalizzati, supporto tecnico e consulenza strategica per privati e piccole realtà.',
    'services.itSolution.cta': 'Scopri di più',
    'services.youtube.title': 'A² Projects Core',
    'services.youtube.desc': 'Il mio viaggio verso la libertà finanziaria in Italia a vent\'anni. Crescita personale e strategie concrete per chi vuole costruire il proprio futuro, un passo alla volta.',
    'services.youtube.cta': 'Guarda il canale',
    'services.comingSoon': 'Altri servizi in arrivo',
    
    // Why Choose Us
    'why.title': 'Perché scegliere A² Projects',
    'why.item1.title': 'Professionalità e disponibilità',
    'why.item1.desc': 'Lavori con un professionista serio che non ti abbandona quando sorgono problemi.',
    'why.item2.title': 'Supporto continuo',
    'why.item2.desc': 'Assistenza a lungo termine e supporto continuo sono parte integrante della mia filosofia.',
    'why.item3.title': 'Soluzioni su misura',
    'why.item3.desc': 'Ogni progetto è costruito sulle tue reali esigenze, senza complessità inutili.',
    'why.item4.title': 'Missione Italia',
    'why.item4.desc': 'Ogni cliente è un passo verso il miglioramento dell\'infrastruttura IT italiana.',
    
    // Testimonials
    'testimonials.title': 'Cosa dicono i clienti',
    'testimonials.placeholder1.name': 'Marco R.',
    'testimonials.placeholder1.role': 'Titolare PMI',
    'testimonials.placeholder1.text': 'Professionalità e competenza eccezionali. Il nuovo sito ha trasformato la nostra presenza online.',
    'testimonials.placeholder2.name': 'Laura B.',
    'testimonials.placeholder2.role': 'Libera Professionista',
    'testimonials.placeholder2.text': 'Finalmente un consulente IT che parla il mio linguaggio e risolve i problemi rapidamente.',
    'testimonials.placeholder3.name': 'Giuseppe M.',
    'testimonials.placeholder3.role': 'Artigiano',
    'testimonials.placeholder3.text': 'Il supporto continuo fa davvero la differenza. Consiglio vivamente A² Projects.',
    
    // CTA Section
    'cta.title': 'Pronto a modernizzare la tua presenza digitale?',
    'cta.subtitle': 'Richiedi una demo gratuita del tuo sito web o discutiamo delle tue esigenze IT.',
    'cta.button': 'Contattami ora',
    
    // IT Solution Page
    'itSolution.hero.title': 'IT Solution',
    'itSolution.hero.subtitle': 'Un servizio IT completo per privati e piccole imprese, con focus sulla creazione di siti web moderni e personalizzati.',
    'itSolution.summary': 'IT Solution è la risposta alle tue esigenze digitali: supporto IT su misura, una presenza web moderna e una guida professionale per navigare il mondo della tecnologia.',
    
    'itSolution.websites.title': 'Creazione siti web personalizzati',
    'itSolution.websites.desc': 'Progettiamo e sviluppiamo siti web su misura per privati e piccole imprese, con tempi di consegna rapidi e attenzione ai dettagli.',
    'itSolution.websites.feature1': 'Consegna rapida e puntuale',
    'itSolution.websites.feature2': 'Design responsive per ogni dispositivo',
    'itSolution.websites.feature3': 'Integrazioni moderne: form, prenotazioni, email',
    'itSolution.websites.feature4': 'UI/UX pulita e orientata all\'utente',
    
    'itSolution.support.title': 'Supporto IT',
    'itSolution.support.desc': 'Assistenza tecnica in loco e da remoto per reti, PC, server e infrastrutture tipiche delle piccole imprese.',
    
    'itSolution.consulting.title': 'Consulenza strategica',
    'itSolution.consulting.desc': 'Ti aiuto a pianificare, ottimizzare e modernizzare la tua infrastruttura IT con un approccio strategico.',
    
    'itSolution.devices.title': 'Gestione dispositivi',
    'itSolution.devices.desc': 'Configurazione e gestione di PC, laptop, smartphone, router e altri dispositivi.',
    
    'itSolution.process.title': 'Come funziona la collaborazione',
    'itSolution.process.step1.title': 'Discovery',
    'itSolution.process.step1.desc': 'Analizziamo insieme le tue esigenze e obiettivi.',
    'itSolution.process.step2.title': 'Proposta',
    'itSolution.process.step2.desc': 'Ricevi un piano dettagliato e trasparente.',
    'itSolution.process.step3.title': 'Realizzazione',
    'itSolution.process.step3.desc': 'Sviluppo con aggiornamenti costanti.',
    'itSolution.process.step4.title': 'Supporto continuo',
    'itSolution.process.step4.desc': 'Assistenza anche dopo la consegna.',
    
    'itSolution.cta.title': 'Richiedi una demo gratuita',
    'itSolution.cta.subtitle': 'Paghi solo se sei soddisfatto del risultato. Nessun rischio, solo opportunità.',
    'itSolution.cta.button': 'Contattami',
    
    // Services Page
    'servicesPage.title': 'I nostri servizi',
    'servicesPage.subtitle': 'Soluzioni IT complete pensate per le realtà italiane',
    'servicesPage.intro': 'Il catalogo servizi è in espansione. Attualmente il servizio principale è IT Solution, un pacchetto completo per le tue esigenze digitali.',
    
    // Contact Page
    'contact.title': 'Contatti',
    'contact.subtitle': 'Richiedi una demo gratuita, informazioni su IT Solution o supporto tecnico.',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefono (opzionale)',
    'contact.form.message': 'Messaggio',
    'contact.form.submit': 'Invia messaggio',
    'contact.form.sending': 'Invio in corso...',
    'contact.form.success': 'Grazie, ti risponderò al più presto.',
    'contact.form.error': 'Si è verificato un errore. Riprova più tardi.',
    'contact.info.title': 'Informazioni di contatto',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefono',
    'contact.info.area': 'Area di servizio',
    'contact.info.areaValue': 'Lavoro da remoto – Italia',
    'contact.info.linkedin': 'LinkedIn',
    
    // Footer
    'footer.rights': '© 2025 A² Projects. Tutti i diritti riservati.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.itSolution': 'IT Solution',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Custom websites for people and small businesses in Italy',
    'hero.subtitle': 'A² Projects offers tailored IT solutions, with a strong focus on modern, fast, and fully integrated websites to grow your digital presence.',
    'hero.cta.primary': 'Request a free website demo',
    'hero.cta.secondary': 'Discover IT Solution',
    'hero.cta.note': 'Pay only if you are satisfied with the result',
    
    // About
    'about.title': 'About Me',
    'about.text1': 'I am Andrea Agostini, an IT professional with a lifelong passion for technology. With a degree and multiple certifications in the IT field, I have made quality and reliability the pillars of my work.',
    'about.text2': 'A² Projects was born from the desire to offer serious and modern IT solutions to individuals and small businesses in Italy, helping to bridge the digital gap that still characterizes our country.',
    'about.linkedin': 'Connect on LinkedIn',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Complete IT solutions for individuals and small businesses',
    'services.itSolution.title': 'IT Solution',
    'services.itSolution.desc': 'Complete IT service: custom website creation, technical support and strategic consulting for individuals and small businesses.',
    'services.itSolution.cta': 'Learn more',
    'services.youtube.title': 'A² Projects Core',
    'services.youtube.desc': 'My journey to financial freedom in Italy in my twenties. Personal growth and concrete strategies for those who want to build their future, step by step.',
    'services.youtube.cta': 'Watch the channel',
    'services.comingSoon': 'More services coming soon',
    
    // Why Choose Us
    'why.title': 'Why choose A² Projects',
    'why.item1.title': 'Professionalism and availability',
    'why.item1.desc': 'Work with a serious professional who doesn\'t abandon you when problems arise.',
    'why.item2.title': 'Continuous support',
    'why.item2.desc': 'Long-term assistance and ongoing support are integral parts of my philosophy.',
    'why.item3.title': 'Tailored solutions',
    'why.item3.desc': 'Every project is built on your real needs, without unnecessary complexity.',
    'why.item4.title': 'Mission Italy',
    'why.item4.desc': 'Every client is a step towards improving Italian IT infrastructure.',
    
    // Testimonials
    'testimonials.title': 'What clients say',
    'testimonials.placeholder1.name': 'Marco R.',
    'testimonials.placeholder1.role': 'SMB Owner',
    'testimonials.placeholder1.text': 'Exceptional professionalism and competence. The new website transformed our online presence.',
    'testimonials.placeholder2.name': 'Laura B.',
    'testimonials.placeholder2.role': 'Freelancer',
    'testimonials.placeholder2.text': 'Finally an IT consultant who speaks my language and solves problems quickly.',
    'testimonials.placeholder3.name': 'Giuseppe M.',
    'testimonials.placeholder3.role': 'Craftsman',
    'testimonials.placeholder3.text': 'Continuous support really makes a difference. I highly recommend A² Projects.',
    
    // CTA Section
    'cta.title': 'Ready to modernize your digital presence?',
    'cta.subtitle': 'Request a free demo of your website or let\'s discuss your IT needs.',
    'cta.button': 'Contact me now',
    
    // IT Solution Page
    'itSolution.hero.title': 'IT Solution',
    'itSolution.hero.subtitle': 'A complete IT service for individuals and small businesses, with a focus on creating modern, custom websites.',
    'itSolution.summary': 'IT Solution is the answer to your digital needs: tailored IT support, a modern web presence, and professional guidance to navigate the world of technology.',
    
    'itSolution.websites.title': 'Custom website creation',
    'itSolution.websites.desc': 'We design and develop custom websites for individuals and small businesses, with fast delivery times and attention to detail.',
    'itSolution.websites.feature1': 'Fast and punctual delivery',
    'itSolution.websites.feature2': 'Responsive design for every device',
    'itSolution.websites.feature3': 'Modern integrations: forms, bookings, email',
    'itSolution.websites.feature4': 'Clean, user-focused UI/UX',
    
    'itSolution.support.title': 'IT Support',
    'itSolution.support.desc': 'On-site and remote technical assistance for networks, PCs, servers and typical small business infrastructures.',
    
    'itSolution.consulting.title': 'Strategic consulting',
    'itSolution.consulting.desc': 'I help you plan, optimize and modernize your IT infrastructure with a strategic approach.',
    
    'itSolution.devices.title': 'Device management',
    'itSolution.devices.desc': 'Configuration and management of PCs, laptops, smartphones, routers and other devices.',
    
    'itSolution.process.title': 'How collaboration works',
    'itSolution.process.step1.title': 'Discovery',
    'itSolution.process.step1.desc': 'We analyze your needs and goals together.',
    'itSolution.process.step2.title': 'Proposal',
    'itSolution.process.step2.desc': 'You receive a detailed and transparent plan.',
    'itSolution.process.step3.title': 'Implementation',
    'itSolution.process.step3.desc': 'Development with constant updates.',
    'itSolution.process.step4.title': 'Ongoing support',
    'itSolution.process.step4.desc': 'Assistance even after delivery.',
    
    'itSolution.cta.title': 'Request a free demo',
    'itSolution.cta.subtitle': 'Pay only if you are satisfied with the result. No risk, only opportunity.',
    'itSolution.cta.button': 'Contact me',
    
    // Services Page
    'servicesPage.title': 'Our Services',
    'servicesPage.subtitle': 'Complete IT solutions designed for Italian businesses',
    'servicesPage.intro': 'The service catalog is expanding. Currently the main service is IT Solution, a complete package for your digital needs.',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Request a free demo, information about IT Solution, or technical support.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you, you will receive a reply soon.',
    'contact.form.error': 'An error occurred. Please try again later.',
    'contact.info.title': 'Contact information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.area': 'Service area',
    'contact.info.areaValue': 'Remote work – Italy',
    'contact.info.linkedin': 'LinkedIn',
    
    // Footer
    'footer.rights': '© 2025 A² Projects. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('it') ? 'it' : 'en';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['it']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
