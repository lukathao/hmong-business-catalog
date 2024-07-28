import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hmong business catalog",
  description: "Hmong businesses listings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">Home</Link>
        </div>
      </div>
        {children}
      </body>
      <footer className="footer text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/aboutus" className="link link-hover">About us</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
        </nav>

      </footer>
    </html>
  );
}
