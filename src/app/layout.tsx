import TopBar from "@/components/TopBar/TopBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Luis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-auto overflow-hidden min-h-screen bg-gradient-to-r from-slate-500 to-yellow-100 -z-10">
          <TopBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
