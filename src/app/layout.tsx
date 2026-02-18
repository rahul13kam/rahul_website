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
  title: 'Rahul Kamble - Software Engineer & Salesforce Developer',
  description: 'Portfolio of Rahul Kamble, Software Engineer and Salesforce Developer based in Hyderabad, India',
  openGraph: {
    title: 'Rahul Kamble - Software Engineer & Salesforce Developer',
    description: 'Portfolio of Rahul Kamble, Software Engineer and Salesforce Developer',
    url: 'https://rahulkamble.online',
    siteName: 'Rahul Kamble Portfolio',
    images: [
      {
        url: 'https://rahulkamble.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rahul Kamble',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Kamble - Software Engineer & Salesforce Developer',
    description: 'Portfolio of Rahul Kamble, Software Engineer and Salesforce Developer',
    images: ['https://rahulkamble.online/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
