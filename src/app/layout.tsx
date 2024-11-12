import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shahriar Abir | Software Engineer & Data Scientist",
  description:
    "Portfolio of Shahriar Abir, a software engineer and data science expert specializing in machine learning, deep learning, and modern web development.",
  icons: { icon: "./navic.png" },
  keywords: [
    "Shahriar Abir",
    "software engineer",
    "data science",
    "machine learning",
    "CUET",
    "java",
    "spring boot",
    "spring security",
    "shahriar abir",
    "software developer",
    "react",
    "next",
    "deep learning",
    "gis",
  ],
  authors: {
    name: "Shahriar Abir",
    url: "https://www.linkedin.com/in/shahriar-abir-995a791b7/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
