import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/components/providers/ThemeProviders";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Taha — Frontend Developer",
  description:
    "Portfolio of Mohamed Taha, a frontend developer specializing in React.js, Three.js, GSAP, Tailwind CSS and Framer Motion. Building immersive, high-performance web experiences.",
  keywords: [
    "Mohamed Taha",
    "Frontend Developer",
    "React.js",
    "Three.js",
    "GSAP",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Mohamed Taha", url: "https://github.com/mohamedtaha152" }],
  openGraph: {
    title: "Mohamed Taha — Frontend Developer",
    description:
      "Frontend developer specializing in React.js, Three.js, GSAP, Tailwind CSS and Framer Motion.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProviders>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}