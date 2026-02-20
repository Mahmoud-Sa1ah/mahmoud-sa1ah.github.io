import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import GoBackButton from "@/components/common/GoBackButton";
import { siteConfig } from "@/config/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.professionalName} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.professionalName}`,
  },
  description: siteConfig.headline,
  keywords: ["Cybersecurity", "Penetration Tester", "Red Teaming", "Infosec", "Security Engineer"],
  authors: [{ name: siteConfig.professionalName }],
  creator: siteConfig.professionalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.links.github, // Adjust if a custom domain is available
    title: `${siteConfig.professionalName} | ${siteConfig.role}`,
    description: siteConfig.headline,
    siteName: siteConfig.professionalName,
    images: [
      {
        url: "/p.jpeg", // Replace with an actual OpenGraph image if different
        width: 1200,
        height: 630,
        alt: siteConfig.professionalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.professionalName} | ${siteConfig.role}`,
    description: siteConfig.headline,
    images: ["/p.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.alias,
    jobTitle: siteConfig.role,
    url: siteConfig.links.github, // Adjust to base url when domain is available
    image: "/p.jpeg",
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.medium,
    ],
    alumniOf: "ITI",
    worksFor: {
      "@type": "Organization",
      name: "Cybersecurity Sector",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Security CSP meta tag for static export (basic example) */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:;" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AnimatedBackground />
          <Navbar />
          <GoBackButton />
          <ScrollToTopButton />
          <main className="flex-1 w-full pt-28 pb-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

