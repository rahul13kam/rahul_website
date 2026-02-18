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
  metadataBase: new URL('https://rahulkamble.online'),
  title: 'Rahul Kamble - Software Engineer & Salesforce Developer',
  description: 'Rahul Kamble — Software Engineer & Salesforce Developer with 4+ years of experience in Angular, React, Spring Boot, Apex, and LWC. Based in Hyderabad, India.',
  keywords: ['Rahul Kamble', 'Salesforce Developer', 'Software Engineer', 'Full Stack Developer', 'Angular', 'React', 'Spring Boot', 'Apex', 'LWC', 'Hyderabad'],
  authors: [{ name: 'Rahul Kamble' }],
  creator: 'Rahul Kamble',
  publisher: 'Rahul Kamble',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rahul Kamble - Software Engineer & Salesforce Developer',
    description: 'Rahul Kamble — Software Engineer & Salesforce Developer with 4+ years of experience in Angular, React, Spring Boot, Apex, and LWC. Based in Hyderabad, India.',
    url: 'https://rahulkamble.online',
    siteName: 'Rahul Kamble Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rahul Kamble - Software Engineer & Salesforce Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Kamble - Software Engineer & Salesforce Developer',
    description: 'Rahul Kamble — Software Engineer & Salesforce Developer with 4+ years of experience in Angular, React, Spring Boot, Apex, and LWC. Based in Hyderabad, India.',
    images: ['/og-image.jpg'],
    creator: '@RahulKamble', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rahul Kamble',
  jobTitle: 'Software Engineer & Salesforce Developer',
  url: 'https://rahulkamble.online',
  image: 'https://rahulkamble.online/profile.png',
  sameAs: [
    'https://www.linkedin.com/in/rahul-kamble-327782221',
    'https://trailblazer.me/id/m6rywkp9t3p3a1q7yi',
    // Add other social links if available
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'India'
  },
  description: 'Aspiring Salesforce Developer with knowledge of Apex, Lightning Web Components (LWC), SOQL, and Salesforce Administration. Bringing 4+ years of experience in building scalable web applications.'
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
