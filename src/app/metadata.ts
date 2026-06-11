import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Devis réparation informatique",
    "Facture réparateur PC",
    "Agent IA réparation",
    "Devis WhatsApp informatique",
    "Réparateur à domicile",
    "Relance automatique réparation",
  ],
  authors: [
    {
      name: "RepairFlow",
      url: "https://repairflow.vercel.app",
    },
  ],
  creator: "repairflow",
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
    creator: "@repairflow",
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
