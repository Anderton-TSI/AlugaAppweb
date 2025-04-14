import "./globals.css";
import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import {Header} from "../components/Header";
import { Footer } from "@/components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight:['400', '700']
});

export const metadata: Metadata = {
  title: "Aluga App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
