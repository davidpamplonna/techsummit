import type { Metadata } from "next";
import "./globals.css";

import { Inter, Orbitron } from "next/font/google";

 const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"]
});
 const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "700"],
 
});

export const metadata: Metadata = {
  title: "TechSummit",
  description: "TechSubmmit é um evento de tecnologia que reúne especialistas e entusiastas para compartilhar conhecimento e inovações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
