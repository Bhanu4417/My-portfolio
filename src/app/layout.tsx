import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Inter, Noto_Serif, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Bhanu | %s",
    default: "Bhanu | Home",
  },
  description: "Bhanu's Portfolio",
  icons: {
    icon: "/Mr.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${inter.variable} ${notoSerif.variable} ${hankenGrotesk.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#FAFAFA] dark:bg-[#100F0F] text-zinc-900 dark:text-zinc-300 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col items-center min-h-screen w-full">
            <Navbar />
            {children}
            <div className="w-full">
              <Footer />
            </div>
          </div>
          {/* Bottom blurry glassy overlay */}
          <div 
            className="fixed bottom-0 left-0 w-full h-8 sm:h-10 pointer-events-none z-50 transition-colors duration-300"
            style={{
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              background: 'linear-gradient(to top, var(--glass-bg, rgba(16, 15, 15, 0.8)), transparent)'
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
