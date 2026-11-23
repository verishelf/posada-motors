import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./supplier-portal.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Posada Motors | No ordinary. Only extreme.",
  description: "Posada Motors crafts V8 hybrid supercars with the drama of a race-bred silhouette and the instant force of electric torque.",
  keywords: ["Posada Motors", "V8 hybrid supercar", "hypercar", "performance vehicle", "twin-turbo V8", "electric torque"],
  openGraph: { title: "Posada Motors — No ordinary. Only extreme.", description: "Precision. Presence. Power at full volume.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}><body className="min-h-full bg-background text-foreground">{children}</body></html>;
}
