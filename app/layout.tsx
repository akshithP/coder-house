import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/NavBar";
import "./globals.css";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coder House",
  description: "All in one platform for coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito_sans.className}`}>
      <body>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
