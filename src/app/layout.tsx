import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider as CustomThemeProvider } from "../context/ThemeContext";
import ThemeRegistry from "../components/ThemeRegistry";
import DecorativeBackground from "../components/DecorativeBackground";

export const metadata: Metadata = {
  title: "inspirelearning AI",
  description: "Personalized education that adapts to every learner's pace, style, and goals. AI tutoring without the price tag.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  primary: '#F43F5E',
                  secondary: '#FB7185',
                }
              }
            }
          }
        `}}></script>
      </head>
      <body className="flex flex-col min-h-screen font-sans transition-colors duration-300" style={{ backgroundColor: '#fff5f5', color: '#1a0505' }}>
        <ThemeRegistry>
          <LanguageProvider>
            <CustomThemeProvider>
              <DecorativeBackground />
              <Header />
              <main className="flex-1 relative z-10">{children}</main>
              <Footer />
              <CookieBanner />
            </CustomThemeProvider>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
