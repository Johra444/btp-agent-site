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
  name: "RepairFlow",
  description: "L'agent IA qui génère vos devis réparation informatique en 30 secondes via WhatsApp.",
  cta: "Essayer Gratuitement",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Devis réparation informatique",
    "Facture réparateur PC",
    "Agent IA réparation",
    "Devis WhatsApp informatique",
    "Gestion réparateur à domicile",
  ],
  links: {
    email: "contact@repairflow.fr",
    twitter: "https://twitter.com/repairflow",
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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    badge: "Nouveau — Devis par WhatsApp en 30 secondes",
    title: "Votre agent IA pour devis et factures réparation info",
    description:
      "Votre client vous envoie un message : \"PC qui démarre plus, écran cassé\". Vous répondez, RepairFlow génère le devis professionnel. Envoi auto, relances incluses.",
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
      { id: 1, name: "Microchoix", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">MICROCHOIX</span> },
      { id: 2, name: "LDLC", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">LDLC</span> },
      { id: 3, name: "Materiel.net", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">MATÉRIEL.NET</span> },
      { id: 4, name: "CDiscount", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">CDISCOUNT</span> },
      { id: 5, name: "FNAC", logo: <span className="text-xl font-bold tracking-tight dark:text-white text-black">FNAC</span> },
    ],
  },
  featureSection: {
    title: "Simple. Rapide. Professionnel.",
    description:
      "Découvrez comment RepairFlow transforme un message WhatsApp en devis de réparation conforme en 4 étapes.",
    items: [
      {
        id: 1,
        title: "Le client décrit la panne",
        content:
          "\"Bonjour, mon PC Lenovo ne démarre plus depuis hier, écran bleu\". Votre client vous envoie un WhatsApp, SMS ou email. Pas besoin de formulaire, pas besoin d'application.",
        image:
          "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "L'IA génère le devis",
        content:
          "RepairFlow identifie la panne (écran, carte mère, SSD, virus...), applique vos tarifs et génère un devis PDF professionnel avec diagnostic, pièces et main d'œuvre détaillés.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        title: "Envoi et relances automatiques",
        content:
          "Le devis part en PDF par WhatsApp ou email. Si le client ne répond pas sous 48h, une relance polie : \"Souhaitez-vous que je procède à la réparation ?\" Vous ne perdez plus de clients.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 4,
        title: "Réparation faite → Facture auto",
        content:
          "Dès que vous marquez l'intervention terminée, la facture est générée avec les détails (pièces remplacées, main d'œuvre, garantie). Export comptable inclus.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      },
    ],
  },
  bentoSection: {
    title: "Votre assistant réparation intelligent",
    description:
      "Demandez à votre agent IA de gérer vos devis, factures et relances pendant que vous réparez.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Devis instantané par message",
        description:
          "Le client écrit \"écran iPhone 13 cassé\". L'IA comprend le modèle, applique le prix de la pièce + main d'œuvre et génère le devis. Pas de saisie manuelle.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Intégration WhatsApp & SMS",
        description:
          "Vos clients vous contactent déjà par WhatsApp. Pas besoin de les faire changer. RepairFlow s'intègre directement dans votre conversation.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[10, 22, 38, 55, 70, 82, 94]}
            toolTipValues={[2, 6, 12, 20, 31, 45, 62]}
          />
        ),
        title: "Tableau de bord réparations",
        description:
          "Suivez vos devis envoyés, acceptés, en cours et terminés. Visualisez votre CA du mois, vos pannes les plus fréquentes et votre taux de conversion.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Relances automatiques",
        description:
          "48h sans réponse ? RepairFlow relance poliment. 7 jours ? Nouvelle relance. Vous récupérez des réparations que vous auriez perdues par oubli.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Gagnez 5h par semaine sur vos devis et factures.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Ne perdez plus jamais un client par oubli de relance.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Envoyez des devis pro qui rassurent vos clients.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Suivez toutes vos réparations depuis votre téléphone.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Conçu pour les réparateurs info",
    description:
      "RepairFlow connaît les pannes courantes, les prix des pièces et les spécificités de la réparation à domicile. Pas un outil générique — un agent IA spécialisé réparation.",
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
        title: "Base de prix pièces intégrée",
        description:
          "Écrans, SSD, RAM, cartes mères, batteries — RepairFlow connaît les prix des pièces les plus courantes par marque et modèle. Vous personnalisez vos propres tarifs.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),
        title: "Multi-appareils",
        description:
          "PC, Mac, iPhone, Samsung, tablette, console, imprimante — RepairFlow gère tous les types d'appareils et adapte le devis en fonction.",
      },
    ],
  },
  quoteSection: {
    quote:
      "Avant RepairFlow, je perdais 2-3 clients par semaine parce que j'oubliais de relancer. Maintenant j'envoie un vocal sur WhatsApp entre deux réparations et le devis part tout seul. J'ai récupéré 400€ de réparations la première semaine juste avec les relances auto.",
    author: {
      name: "Mickaël Fernandez",
      role: "Réparateur informatique indépendant — Nantes",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  },
  pricing: {
    title: "Des tarifs pensés pour les réparateurs",
    description:
      "Commencez gratuitement. Aucune carte bancaire requise. Résiliez quand vous voulez.",
    pricingItems: [
      {
        name: "Débutant",
        href: "#",
        price: "0€",
        period: "mois",
        yearlyPrice: "0€",
        features: [
          "5 devis par mois",
          "Modèles PDF de base",
          "Envoi par email",
          "Support par chat",
        ],
        description: "Pour tester RepairFlow sur vos premières réparations",
        buttonText: "Commencer Gratuitement",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Pro",
        href: "#",
        price: "19€",
        period: "mois",
        yearlyPrice: "190€",
        features: [
          "Devis et factures illimités",
          "Envoi WhatsApp + Email + SMS",
          "Relances automatiques (48h, 7j, 14j)",
          "Base de prix pièces intégrée",
          "Tableau de bord complet",
          "Export comptable (Sage, EBP, Tiime)",
          "Support prioritaire",
        ],
        description: "Pour les réparateurs indépendants qui veulent gagner du temps",
        buttonText: "Essayer 14 jours gratuits",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Atelier",
        href: "#",
        price: "49€",
        period: "mois",
        yearlyPrice: "490€",
        features: [
          "Tout le plan Pro",
          "Jusqu'à 5 utilisateurs",
          "Multi-points de retrait",
          "Suivi stock pièces",
          "Rapports de rentabilité par type de panne",
        ],
        description: "Pour les ateliers avec plusieurs techniciens",
        buttonText: "Contacter l'équipe",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Mickaël Fernandez",
      role: "Réparateur info indépendant — Nantes",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      description: (
        <p>
          Avant, je perdais 2-3 clients/semaine par oubli de relance.
          <Highlight>La première semaine, j'ai récupéré 400€ de réparations grâce aux relances auto.</Highlight>{" "}
          Le jeu en vaut la chandelle.
        </p>
      ),
    },
    {
      id: "2",
      name: "Sarah Bouchard",
      role: "Réparatrice smartphone — Lyon",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
      description: (
        <p>
          Mes clients m'envoient des photos d'écrans cassés sur WhatsApp.
          <Highlight>Je réponds, RepairFlow génère le devis. 30 secondes chrono.</Highlight>{" "}
          Avant c'était 15 min sur Word.
        </p>
      ),
    },
    {
      id: "3",
      name: "David Nguyen",
      role: "Atelier info — Paris 13e",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      description: (
        <p>
          J'ai 3 techniciens. Chacun envoie ses devis depuis son téléphone.
          <Highlight>On est passés de 20 à 45 devis par semaine sans embaucher.</Highlight>{" "}
          Le tableau de bord me donne le CA en temps réel.
        </p>
      ),
    },
    {
      id: "4",
      name: "Fatima Benali",
      role: "Réparatrice PC à domicile — Toulouse",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      description: (
        <p>
          Je me déplace chez le client. Pas le temps de faire des devis sur place.
          <Highlight>Je décris la panne en vocal, RepairFlow fait le devis pendant que je conduis.</Highlight>{" "}
          Le client a son devis avant même que je rentre.
        </p>
      ),
    },
    {
      id: "5",
      name: "Julien Roche",
      role: "Réparateur console gaming — Bordeaux",
      img: "https://randomuser.me/api/portraits/men/29.jpg",
      description: (
        <p>
          Les gamers sont pressés, ils veulent un devis tout de suite.
          <Highlight>Depuis RepairFlow, mon taux de conversion a augmenté de 40%.</Highlight>{" "}
          Le devis pro rassure le client.
        </p>
      ),
    },
    {
      id: "6",
      name: "Nadia Khelifi",
      role: "Tech support PME — Lille",
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      description: (
        <p>
          Je gère la maintenance de 15 petites entreprises.
          <Highlight>Les devis récurrents se génèrent automatiquement chaque mois.</Highlight>{" "}
          Plus besoin de relancer chaque client manuellement.
        </p>
      ),
    },
    {
      id: "7",
      name: "Christophe Morel",
      role: "Réparateur Apple indépendant — Nice",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
      description: (
        <p>
          La base de prix pièces est un game changer.
          <Highlight>Je tape \"iPhone 14 écran\" et le prix de la pièce + main d'œuvre est déjà calculé.</Highlight>{" "}
          J'ajuste et c'est parti.
        </p>
      ),
    },
    {
      id: "8",
      name: "Amandine Petit",
      role: "Réparatrice à domicile — Rennes",
      img: "https://randomuser.me/api/portraits/women/61.jpg",
      description: (
        <p>
          Le plan gratuit m'a permis de tester sans risque.
          <Highlight>Après 2 semaines j'étais convaincue, je suis passée au Pro.</Highlight>{" "}
          19€/mois pour gagner 5h/semaine, c'est donné.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Questions Fréquentes",
    description:
      "Tout ce que vous devez savoir sur RepairFlow. Une question ? Contactez-nous.",
    faQitems: [
      {
        id: 1,
        question: "Comment fonctionne RepairFlow ?",
        answer:
          "Votre client vous envoie un message WhatsApp décrivant la panne. Vous répondez, et RepairFlow analyse la demande, identifie le type de réparation (écran, SSD, virus...), applique vos tarifs et génère un devis PDF professionnel que vous envoyez au client en un clic.",
      },
      {
        id: 2,
        question: "RepairFlow connaît-il les prix des pièces ?",
        answer:
          "Oui ! RepairFlow intègre une base de données des pièces les plus courantes (écrans, SSD, RAM, batteries) par marque et modèle. Vous pouvez aussi personnaliser vos propres prix et marges pour coller à votre activité.",
      },
      {
        id: 3,
        question: "Ça marche comment sur le terrain ?",
        answer:
          "RepairFlow fonctionne via WhatsApp, donc depuis votre téléphone. Vous êtes chez un client, vous envoyez un vocal décrivant la panne, et le devis se génère. Pas besoin d'installer une application, pas besoin de connexion internet permanente (le devis se génère dès que vous avez du réseau).",
      },
      {
        id: 4,
        question: "Et si le client veut négocier le prix ?",
        answer:
          "Pas de problème. Répondez au message WhatsApp en décrivant la modification (\"Finalement juste le changement d'écran, pas la batterie\") et RepairFlow régénère le devis modifié instantanément. Le client reçoit la nouvelle version.",
      },
      {
        id: 5,
        question: "Les devis sont-ils conformes ?",
        answer:
          "Oui. Chaque devis inclut : description de la panne, diagnostic, pièces détaillées, main d'œuvre, TVA (si applicable), conditions de garantie, et vos coordonnées professionnelles. Un devis qui rassure le client et vous protège.",
      },
      {
        id: 6,
        question: "Combien de temps ça me fait gagner ?",
        answer:
          "En moyenne, nos utilisateurs gagnent 5 à 8 heures par semaine. Un devis qui prenait 10-15 minutes est généré en 30 secondes. Les relances automatiques vous font récupérer 2 à 4 réparations par semaine que vous auriez perdues par oubli.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Arrêtez de perdre des réparations",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Essayer Gratuitement — Aucune CB requise",
      href: "#",
    },
    subtext: "5 devis gratuits offerts • Configuration en 2 minutes • Résiliez quand vous voulez",
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
        { id: 5, title: "Blog réparation", url: "#" },
        { id: 6, title: "Guide du devis info", url: "#" },
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
