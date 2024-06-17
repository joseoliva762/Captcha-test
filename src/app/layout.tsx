import type {Metadata} from "next";

import Link from "next/link";

import CaptchaProvider from "@/contexts/captcha/provider";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Captcha",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="m-auto flex min-h-screen w-full flex-col bg-background font-sans antialiased"
      >
        <header className="px-4 text-xl font-bold leading-[4rem]">
          <Link href="/">Captcha</Link>
        </header>
        <CaptchaProvider>
          <main className="flex w-full flex-col items-center justify-start py-4">{children}</main>
          <Toaster />
        </CaptchaProvider>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Captcha
        </footer>
      </body>
    </html>
  );
}
