import React from 'react';
import './globals.css';
import { Jost } from 'next/font/google';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: 'Livramento.dev',
  description: 'Matheus do Livramento - Back-end software engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <main className="min-h-screen bg-zinc-900 max-md:pb-6 pb-16 flex flex-col max-md:gap-16 gap-32">
          <Nav />
          <div className="flex flex-col gap-32 max-md:px-5 px-56">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
