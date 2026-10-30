import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteConfig = {
  name: "Oluwafisayo Ibrahim",
  description:
  "A collection of my research, engineering projects, publications, and things I'm curious about.",
  url: "https://oluwafisayoibrahim.github.io",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  keywords: [
    "Oluwafisayo Ibrahim",
    "Software Engineer",
    "Software Engineering Research",
    "AI for Software Engineering",
    "Empirical Software Engineering",
    "Applied Machine Learning",
    "Natural Language Processing",
    "Research Portfolio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F7F4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          inter.variable,
          newsreader.variable,
          jetbrainsMono.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
