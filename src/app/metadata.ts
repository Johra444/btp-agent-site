import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Devis BTP",
    "Facture Artisan",
    "Agent IA BTP",
    "Automatisation Devis",
    "Gestion Chantier",
    "WhatsApp BTP",
    "Relance Client BTP",
  ],
  authors: [
    {
      name: "DevisFlow",
      url: "https://devisflow.vercel.app",
    },
  ],
  creator: "devisflow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@devisflow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
