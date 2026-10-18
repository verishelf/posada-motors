import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Posada Motors | V8 Hybrid Supercars",
  description:
    "Posada Motors crafts V8 hybrid supercars that unite mechanical soul with electric precision. Apex, Pulse, and Horizon — precision, presence, power.",
  keywords: [
    "V8 hybrid supercars",
    "hybrid supercar",
    "Posada Motors",
    "performance hybrid",
    "twin-turbo V8",
    "luxury supercar",
  ],
  openGraph: {
    title: "Posada Motors — V8 Hybrid Supercars",
    description: "Precision. Presence. Power.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
