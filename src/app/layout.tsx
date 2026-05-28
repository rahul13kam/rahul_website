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
  metadataBase: new URL("https://rahulkamble.online"),
  title: {
    default: "Rahul Kamble | Senior Software Engineer & Salesforce Developer",
    template: "%s | Rahul Kamble",
  },
  description: 'Rahul Kamble — Senior Software Engineer & Salesforce Developer with 4+ years of experience in Angular, React, Spring Boot, Apex, and LWC. Based in Hyderabad, India.',
  keywords: [
    'Rahul Kamble', 
    'Rahul Kamble Software Engineer', 
    'Rahul Kamble Salesforce Developer', 
    'Senior Software Engineer', 
    'Salesforce Developer', 
    'UI Developer', 
    'Frontend Developer', 
    'Full Stack Developer', 
    'Web Developer',
    'Angular Developer', 
    'React Developer', 
    'Spring Boot Developer', 
    'Salesforce Apex', 
    'LWC Developer', 
    'Hyderabad Software Engineer',
    'Salesforce Professional',
    'Javascript Developer',
    'Typescript Developer'
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  authors: [{ name: 'Rahul Kamble' }],
  creator: 'Rahul Kamble',
  publisher: 'Rahul Kamble',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rahul Kamble | Senior Software Engineer & Salesforce Developer",
    description: 'Rahul Kamble — Senior Software Engineer & Salesforce Developer with 4+ years of experience in Angular, React, Spring Boot, Apex, and LWC. Based in Hyderabad, India.',
    url: 'https://rahulkamble.online',
    siteName: 'Rahul Kamble Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 512,
        height: 512,
        alt: 'Rahul Kamble - Senior Software Engineer & Salesforce Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rahul Kamble | Senior Software Engineer & Salesforce Developer",
    description: 'Rahul Kamble — Senior Software Engineer & Salesforce Developer with 4+ years of experience in Angular, React, Spring Boot, Apex, and LWC. Based in Hyderabad, India.',
    images: ['/profile.png'],
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rahul Kamble',
  alternateName: 'Rahul Kamble Online',
  jobTitle: 'Senior Software Engineer, Salesforce Developer, UI Developer',
  url: 'https://rahulkamble.online',
  image: 'https://rahulkamble.online/profile.png',
  description: 'Senior Software Engineer and Salesforce Developer with 4+ years of experience. Expert in Angular, React, Spring Boot, and Salesforce LWC. Professional UI/UX Developer and Full Stack Engineer based in Hyderabad.',
  knowsAbout: [
    'Software Engineering',
    'Salesforce Development',
    'Web Development',
    'UI Development',
    'Frontend Development',
    'Angular',
    'React',
    'Spring Boot',
    'Salesforce Apex',
    'Lightning Web Components'
  ],
  sameAs: [
    'https://www.linkedin.com/in/rahul-kamble-327782221',
    'https://trailblazer.me/id/m6rywkp9t3p3a1q7yi',
    'https://github.com/rahul13kam'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'India'
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rahul Kamble Portfolio",
  url: "https://rahulkamble.online",
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://rahulkamble.online/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rahul Kamble",
  url: "https://rahulkamble.online",
  logo: "https://rahulkamble.online/icon.png",
  sameAs: [
    "https://www.linkedin.com/in/rahul-kamble-327782221",
    "https://github.com/rahul13kam",
    "https://trailblazer.me/id/m6rywkp9t3p3a1q7yi",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
