import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Matan Amar - Software Engineer & RPA Specialist",
  description: "Portfolio of Matan Amar - Software Engineer specializing in RPA, Unity development, and full-stack applications.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Matan Amar",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Matan Amar Portfolio",
    title: "Matan Amar - Software Engineer & RPA Specialist",
    description: "Portfolio of Matan Amar - Software Engineer specializing in RPA, Unity development, and full-stack applications.",
  },
  icons: {
    icon: '/icon.jpg',
    apple: '/apple-icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
