import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ScrollTop from "@/components/ScrollTop";
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
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
        {/* Scroll top */}
        <ScrollTop />
      </body>
    </html>
  );
}
