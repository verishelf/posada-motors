import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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
  title: "Posada Motors | Built for the long way",
  description:
    "Posada Motors crafts V8 hybrid machines for the long way home — quiet when you need it, alive whenever the road opens up.",
  keywords: [
    "Posada Motors",
    "V8 hybrid",
    "luxury performance vehicle",
    "all-terrain performance",
    "hybrid grand touring",
  ],
  openGraph: {
    title: "Posada Motors — Built for the long way",
    description: "Go further. Stay with the feeling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
