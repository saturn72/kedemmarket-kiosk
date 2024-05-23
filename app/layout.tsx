import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/inter';
import { CssBaseline } from '@mui/material';
import { Footer, Header } from "@/app/_components/common";
import * as React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "קדם מרקט",
  description: "קדם מרקט - ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir='rtl'>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <React.Fragment>
            <CssBaseline />
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              {children}
              <Footer />
            </main>
          </React.Fragment>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
