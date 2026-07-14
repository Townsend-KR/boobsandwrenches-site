import type { Metadata } from "next";
import Link from "next/link";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boobs & Wrenches",
  description: "Art. Tools. Woodworking. 3D Printing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050607] text-[#E5E7EB]">
        <header className="sticky top-0 z-50 border-b border-[#2A2F35] bg-[#050607]/95 px-5 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
            <Link
              href="/"
              className="font-[family-name:var(--font-cinzel)] text-xl font-bold tracking-wide text-[#C9A24A]"
            >
              Boobs & Wrenches
            </Link>

            <nav
              aria-label="Main navigation"
              className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
            >
              <Link
                href="/"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                Home
              </Link>

              <Link
                href="/woodworking"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                Woodworking
              </Link>

              <Link
                href="/3d-printing"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                3D Printing
              </Link>

              <Link
                href="/design"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                Design
              </Link>

              <Link
                href="/writing"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                Writing
              </Link>

              <Link
                href="/tools-for-sale"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                Tools
              </Link>

              <Link
                href="/the-bench"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                The Bench
              </Link>

              <Link
                href="/#contact"
                className="text-[#A1A1AA] transition hover:text-[#E0C26B]"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}