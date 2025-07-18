import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag_Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden  text-white relative bg-[#0a0a0b]  overflow-y-auto scrollbar-hidden`}>
        <div className="absolute inset-0 z-[-3] bg-gradient-to-br from-[#0b0b0c] via-[#111112] to-[#0a0a0b]" />

        <div className="pointer-events-none absolute inset-0 z-[-2] opacity-30">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[500px] w-[600px] bg-[#3b82f6] rounded-full blur-[160px] opacity-40" />
          <div className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] bg-[#ff1a1a] rounded-full blur-[140px] opacity-25" />
          <div className="absolute top-0  h-[300px] w-[300px] bg-[#ff6600] rounded-full blur-[100px] opacity-20" />
        </div>

        {children}
      </body>
    </html>
  );
}
