import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "DevisFlow",
  description: "L'agent IA qui génère vos devis et factures BTP en 30 secondes.",
  cta: "Essayer Gratuitement",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Devis BTP",
    "Facture Artisan",
    "Agent IA BTP",
    "Automatisation Devis",
    "Gestion Chantier",
  ],
  links: {
    email: "contact@devisflow.fr",
    twitter: "https://twitter.com/devisflow",
    github: "https://github.com/Johra444",
  },
  nav: {
    links: [
      { id: 1, name: "Accueil", href: "#hero" },
      { id: 2, name: "Comment ça marche", href: "#bento" },
      { id: 3, name: "Fonctionnalités", href: "#features" },
      { id: 4, name: "Tarifs", href: "#pricing" },
    ],
  },
  hero: {
    badgeIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:fill-white fill-[#364153]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    badge: "Nouveau — Générez vos devis par WhatsApp",
    title: "Votre agent IA pour devis et factures BTP",
    description:
      "Envoyez un message vocal ou texte, recevez un devis PDF professionnel en 30 secondes. Conçu pour les artisans et PME du bâtiment.",
    cta: {
      primary: {
        text: "Essayer Gratuitement",
        href: "#pricing",
      },
      secondary: {
        text: "Voir la démo",
        href: "#features",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      { id: 1, name: "Bouygues Construction", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">BOUYGUES</span> },
      { id: 2, name: "Vinci", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">VINCI</span> },
      { id: 3, name: "Eiffage", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">EIFFAGE</span> },
      { id: 4, name: "SCA", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">SCA</span> },
      { id: 5, name: "FFB", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">FFB</span> },
    ],
  },
  featureSection: {
    title: "Simple. Rapide. Conforme.",
    description:
      "Découvrez comment DevisFlow transforme votre description en devis professionnel en 4 étapes simples.",
    items: [
      {
        id: 1,
        title: "Décrivez le chantier",
        content:
          "Envoyez un message vocal ou texte via WhatsApp : \"Devis pour Mme Dupont, 30m² carrelage salle de bain, matériaux fournis\". C'est tout.",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "L'IA génère le devis",
        content:
          "DevisFlow analyse votre demande, calcule les quantités, applique les prix DTU et génère un devis PDF conforme avec toutes les mentions légales.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        title: "Envoi et relances automatiques",
        content:
          "Le devis est envoyé au client par email ou SMS. Si pas de réponse sous 7 jours, une relance polie part automatiquement. Vous ne perdez plus jamais un chantier.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 4,
        title: "Devis accepté → Facture auto",
        content:
          "Dès que le client valide, une facture d'acompte est générée. Les factures de situation et le solde suivent automatiquement à chaque étape du chantier.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  bentoSection: {
    title: "Votre assistant BTP intelligent",
    description:
      "Demandez à votre agent IA de gérer vos devis, factures et relances pendant que vous construisez.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Génération de devis instantanée",
        description:
          "Parlez ou écrivez naturellement. L'IA comprend les termes BTP, applique les bons prix unitaires et génère un devis PDF professionnel en 30 secondes.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Intégration WhatsApp & Email",
        description:
          "Envoyez vos demandes directement par WhatsApp, SMS ou email. Aucune application à installer, aucun mot de passe à retenir.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[15, 28, 42, 58, 72, 85, 95]}
            toolTipValues={[3, 8, 15, 25, 38, 52, 68]}
          />
        ),
        title: "Tableau de bord en temps réel",
        description:
          "Suivez vos devis envoyés, acceptés, relancés et facturés. Visualisez votre chiffre d'affaires prévisionnel et votre taux de conversion.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Relances automatiques",
        description:
          "Configurez vos relances (7j, 14j, 30j) et laissez DevisFlow relancer vos clients. Vous récupérez des chantiers que vous auriez perdus.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Gagnez 5 à 10h par semaine sur vos devis.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Ne perdez plus jamais un client par oubli de relance.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Envoyez des devis professionnels conformes à chaque fois.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Suivez votre activité en un coup d'œil depuis votre téléphone.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Conçu pour les artisans du BTP",
    description:
      "DevisFlow connaît les prix DTU, les mentions obligatoires et les spécificités du bâtiment. Pas un outil générique — un agent IA spécialisé BTP.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2 size-full z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="227" height="244" viewBox="0 0 227 244" fill="none" className="size-[90%] md:size-[85%] object-contain fill-background">
                <path fillRule="evenodd" clipRule="evenodd" d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z" />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-full z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="245" height="282" viewBox="0 0 245 282" className="size-full object-contain fill-accent">
                <g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z" />
                </g>
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="size-full"
            >
              <FlickeringGrid className="size-full" gridGap={4} squareSize={2} maxOpacity={0.5} />
            </motion.div>
          </div>
        ),
        title: "Conformité légale garantie",
        description:
          "TVA, retenue de garantie, mentions obligatoires, conditions de paiement — chaque devis est conforme à la réglementation BTP française.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),
        title: "Pour tous les corps de métier",
        description:
          "Maçon, plombier, électricien, carreleur, peintre, couvreur, menuisier — DevisFlow connaît les spécificités de chaque métier et les prix associés.",
      },
    ],
  },
  quoteSection: {
    quote:
      "DevisFlow a transformé mon activité. Avant, je passais mes soirées à faire mes devis sur Word. Maintenant j'envoie un message vocal sur le chantier et le devis part dans la minute. J'ai récupéré 3 chantiers grâce aux relances automatiques.",
    author: {
      name: "Thomas Martin",
      role: "Carreleur, Artisan BTP — Toulouse",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  pricing: {
    title: "Des tarifs pensés pour les artisans",
    description:
      "Commencez gratuitement. Aucune carte bancaire requise. Résiliez quand vous voulez.",
    pricingItems: [
      {
        name: "Artisan",
        href: "#",
        price: "0€",
        period: "mois",
        yearlyPrice: "0€",
        features: [
          "3 devis par mois",
          "Modèles PDF de base",
          "Envoi par email",
          "Support par chat",
        ],
        description: "Pour tester DevisFlow sur vos premiers chantiers",
        buttonText: "Commencer Gratuitement",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Pro",
        href: "#",
        price: "29€",
        period: "mois",
        yearlyPrice: "290€",
        features: [
          "Devis et factures illimités",
          "Envoi WhatsApp + Email + SMS",
          "Relances automatiques (7j, 14j, 30j)",
          "Tableau de bord complet",
          "Base de prix BTP intégrée",
          "Export comptable (Sage, EBP)",
          "Support prioritaire",
        ],
        description: "Pour les artisans et TPE qui veulent gagner du temps",
        buttonText: "Essayer 14 jours gratuits",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "PME",
        href: "#",
        price: "79€",
        period: "mois",
        yearlyPrice: "790€",
        features: [
          "Tout le plan Pro",
          "Jusqu'à 10 utilisateurs",
          "Multi-chantiers",
          "Rapports de rentabilité",
        ],
        description: "Pour les PME BTP avec plusieurs collaborateurs",
        buttonText: "Contacter l'équipe",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Thomas Martin",
      role: "Carreleur — Toulouse",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      description: (
        <p>
          Avant DevisFlow, je passais mes soirées sur Word. Maintenant
          <Highlight>j'envoie un vocal sur le chantier et le devis part dans la minute.</Highlight>{" "}
          J'ai récupéré 3 chantiers grâce aux relances auto.
        </p>
      ),
    },
    {
      id: "2",
      name: "Sophie Leroy",
      role: "Plombière — Lyon",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      description: (
        <p>
          En tant que femme dans le BTP, je voulais un outil pro pour mes devis.
          <Highlight>DevisFlow m'a fait gagner 8h par semaine.</Highlight>{" "}
          Mes clients prennent mes devis plus au sérieux maintenant.
        </p>
      ),
    },
    {
      id: "3",
      name: "Karim Benziane",
      role: "Maçon — Marseille",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      description: (
        <p>
          Je suis nul en informatique mais DevisFlow c'est comme envoyer un SMS.
          <Highlight>Mon fils m'a montré une fois, c'est tout.</Highlight>{" "}
          29€/mois pour gagner 10h, c'est rentable dès le premier devis.
        </p>
      ),
    },
    {
      id: "4",
      name: "Marie-Claire Dubois",
      role: "Peintre — Nantes",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      description: (
        <p>
          Les relances automatiques c'est le game changer.
          <Highlight>J'ai récupéré 4 500€ de chantiers oubliés</Highlight>{" "}
          le premier mois. Avant j'osais pas relancer, maintenant c'est fait tout seul.
        </p>
      ),
    },
    {
      id: "5",
      name: "Pierre-Yves Gaudin",
      role: "Électricien — Bordeaux",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      description: (
        <p>
          J'utilise DevisFlow depuis 3 mois.
          <Highlight>Mon taux de conversion devis a augmenté de 35%.</Highlight>{" "}
          Les devis sont plus pro, mieux formatés, et les clients répondent plus vite.
        </p>
      ),
    },
    {
      id: "6",
      name: "Fatima Zahra",
      role: "Couvreuse — Lille",
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      description: (
        <p>
          Le fait que DevisFlow connaisse les prix du DTU c'est incroyable.
          <Highlight>Plus besoin de chercher les prix unitaires dans des tableaux Excel.</Highlight>{" "}
          Je décris le chantier et c'est fait.
        </p>
      ),
    },
    {
      id: "7",
      name: "Julien Moreau",
      role: "Menuisier — Strasbourg",
      img: "https://randomuser.me/api/portraits/men/63.jpg",
      description: (
        <p>
          Le passage au forfait annuel m'a fait économiser 2 mois.
          <Highlight>290€/an pour un outil qui me fait gagner 40h/mois,</Highlight>{" "}
          c'est le meilleur investissement de mon activité.
        </p>
      ),
    },
    {
      id: "8",
      name: "Nathalie Petit",
      role: "Architecte d'intérieur — Paris",
      img: "https://randomuser.me/api/portraits/women/17.jpg",
      description: (
        <p>
          J'utilise DevisFlow pour mes prestations de rénovation.
          <Highlight>Le lien WhatsApp simplifie tout l'échange avec le client.</Highlight>{" "}
          Il valide le devis direct sur son téléphone.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Questions Fréquentes",
    description:
      "Tout ce que vous devez savoir sur DevisFlow. Une question ? Contactez-nous.",
    faQitems: [
      {
        id: 1,
        question: "Comment fonctionne DevisFlow ?",
        answer:
          "Vous envoyez un message (texte ou vocal) via WhatsApp, SMS ou email décrivant le chantier. L'IA analyse votre demande, identifie les postes de travaux, applique les prix DTU et génère un devis PDF professionnel conforme. Le devis est envoyé au client et les relances se font automatiquement.",
      },
      {
        id: 2,
        question: "DevisFlow connaît-il les prix du BTP ?",
        answer:
          "Oui ! DevisFlow intègre une base de données de prix BTP basée sur les référentiels DTU et les prix moyens du marché français. Vous pouvez aussi personnaliser vos propres prix unitaires pour coller à votre activité.",
      },
      {
        id: 3,
        question: "Les devis sont-ils conformes à la loi ?",
        answer:
          "Oui. Chaque devis généré inclut toutes les mentions obligatoires : TVA, retenue de garantie, conditions de paiement, pénalités de retard, numéro de SIRET, assurance décennale, et toutes les mentions légales requises pour les travaux BTP.",
      },
      {
        id: 4,
        question: "Puis-je utiliser DevisFlow sur chantier ?",
        answer:
          "Absolument ! DevisFlow fonctionne via WhatsApp, donc depuis votre téléphone. Pas besoin d'installer une application. Vous pouvez envoyer un devis depuis n'importe où, même sans connexion internet (il sera traité dès que vous aurez du réseau).",
      },
      {
        id: 5,
        question: "Et si je veux modifier un devis ?",
        answer:
          "Pas de problème. Répondez au message WhatsApp en décrivant la modification souhaitée (\"Ajoute 10m² de faïence\" ou \"Retire la fourniture de peinture\") et DevisFlow régénère le devis modifié instantanément.",
      },
      {
        id: 6,
        question: "Combien de temps ça me fait gagner ?",
        answer:
          "En moyenne, nos utilisateurs gagnent 5 à 10 heures par semaine sur la gestion de leurs devis. Un devis qui prenait 30 à 60 minutes est généré en 30 secondes. Les relances automatiques vous font récupérer des chantiers que vous auriez perdus par oubli.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Arrêtez de perdre du temps sur vos devis",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Essayer Gratuitement — Aucune CB requise",
      href: "#",
    },
    subtext: "3 devis gratuits offerts • Configuration en 2 minutes • Résiliez quand vous voulez",
  },
  footerLinks: [
    {
      title: "Produit",
      links: [
        { id: 1, title: "Fonctionnalités", url: "#features" },
        { id: 2, title: "Tarifs", url: "#pricing" },
        { id: 3, title: "Démo", url: "#" },
        { id: 4, title: "Nouveautés", url: "#" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { id: 5, title: "Blog BTP", url: "#" },
        { id: 6, title: "Guide du devis BTP", url: "#" },
        { id: 7, title: "FAQ", url: "#" },
        { id: 8, title: "Support", url: "#" },
      ],
    },
    {
      title: "Légal",
      links: [
        { id: 9, title: "CGU", url: "#" },
        { id: 10, title: "Confidentialité", url: "#" },
        { id: 11, title: "Mentions légales", url: "#" },
        { id: 12, title: "Contact", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
