import { ThemeProvider } from "@/lib/dark-mode-theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.disi.au"),
  title: {
    default: "disi digital | Northern Beaches Digital Agency",
    template: "%s | disi digital",
  },
  description:
    "Northern Beaches Digital Agency specializing in web development, SaaS platforms, and full-stack solutions. Expert Next.js, React, and TypeScript development.",
  keywords: [
    "digital agency",
    "Northern Beaches",
    "web development",
    "SaaS",
    "Next.js",
    "React",
    "TypeScript",
    "full-stack development",
    "web design",
    "Sydney",
  ],
  authors: [{ name: "disi digital" }],
  creator: "disi digital",
  publisher: "disi digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.disi.au",
    siteName: "disi digital",
    title: "disi digital | Northern Beaches Digital Agency",
    description:
      "Northern Beaches Digital Agency specializing in web development, SaaS platforms, and full-stack solutions.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "disi digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "disi digital | Northern Beaches Digital Agency",
    description:
      "Northern Beaches Digital Agency specializing in web development, SaaS platforms, and full-stack solutions.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wHzbznVp7ENtipM7R-kCtTCeNeo-KpXdWdv7RScSnVg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.disi.au" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <body>{children}</body>
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </html>
  );
}
