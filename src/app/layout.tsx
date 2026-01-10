import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joestechsolutions.com'),
  title: "Joe's Tech Solutions | Boutique Development Studio",
  description: "Mobile apps, web platforms, and private AI infrastructure for ambitious SMBs. From Olympic-level coaching apps to custom web solutions.",
  keywords: ["mobile app development", "web development", "AI infrastructure", "React Native", "Next.js", "consulting", "private AI", "custom software development", "boutique development studio"],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Joe's Tech Solutions | Boutique Development Studio",
    description: "Mobile apps, web platforms, and private AI infrastructure for ambitious SMBs.",
    url: 'https://joestechsolutions.com',
    siteName: "Joe's Tech Solutions",
    images: [
      {
        url: '/logo-main.png',
        width: 2400,
        height: 1200,
        alt: "Joe's Tech Solutions Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Joe's Tech Solutions | Boutique Development Studio",
    description: "Mobile apps, web platforms, and private AI infrastructure for ambitious SMBs.",
    images: ['/logo-main.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans bg-background text-foreground`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId="G-MBFJDHF0W9" />
      </body>
    </html>
  );
}
