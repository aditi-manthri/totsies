import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Totsies',
  description: 'How many licks does it take to get to the center of a Tootsie Pop?',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍭</text></svg>"></link>
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
