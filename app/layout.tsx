import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takumi — Headless WordPress Portfolio",
  description: "A portfolio site built with Next.js and WordPress as a headless CMS via WPGraphQL.",
  openGraph: {
    title: "Takumi — Headless WordPress Portfolio",
    description: "Next.js frontend powered by WordPress + WPGraphQL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-10">{children}</main>
        <footer className="border-t border-gray-100 mt-20">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
            Built with Next.js + WordPress (Headless) · Deployed on Vercel
          </div>
        </footer>
      </body>
    </html>
  );
}
