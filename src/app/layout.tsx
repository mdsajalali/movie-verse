import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/pages/Footer";
const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Verse",
  description: "Movie Verse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
