import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/data/weddingData";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body" });

export const metadata: Metadata = { title: weddingData.meta.siteTitle, viewport: "width=device-width, initial-scale=1", };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${greatVibes.variable} ${playfair.variable} ${lato.variable} bg-black font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}