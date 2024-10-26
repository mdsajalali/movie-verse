import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";
import { Toaster } from "react-hot-toast";
import Provider from "@/provider/Provider";
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
        <Provider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </body>
    </html>
  );
}
