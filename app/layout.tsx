import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Merriweather } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/lib/language-context";
import type { Viewport } from "next";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Merriweather({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const walkway = localFont({
  src: [
    {
      path: "../public/fonts/walkway/Walkway SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/walkway/Walkway Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/walkway/Walkway UltraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/walkway/Walkway Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-walkway",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f5f1eb",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Riviera Vraja Mării",
  description: "Recuperare și Relaxare la Malul Mării",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Riviera Vraja Mării",
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
        className={`${geistSans.variable} ${geistMono.variable} ${walkway.variable} ${serif.variable} ${sans.variable} antialiased m-0 p-0 bg-background`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <FooterSection />
        </LanguageProvider>
      </body>
    </html>
  );
}
