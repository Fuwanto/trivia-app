import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Trivia Time! - Cartoon Quiz Game",
  description:
    "A fun-filled trivia experience with cartoon-style animations and challenges",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col max-h-full bg-background text-foreground font-sans">
        <header>
          <Header />
        </header>

        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
