'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DefaultSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Gurney Guys - Professional Cleaning Services Sydney",
  description: "Sydney's trusted exterior cleaning professionals. Pressure washing, house washing, and roof treatments. Fully insured, satisfaction guaranteed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultSeo
          titleTemplate="%s | The Gurney Guys"
          defaultTitle="The Gurney Guys - Professional Cleaning Services Sydney"
          description="Sydney's trusted exterior cleaning professionals. Pressure washing, house washing, and roof treatments. Fully insured, satisfaction guaranteed!"
          canonical="https://gurneyguys.com.au/"
          openGraph={{
            type: 'website',
            locale: 'en_AU',
            url: 'https://gurneyguys.com.au/',
            siteName: 'The Gurney Guys',
            images: [
              {
                url: 'https://gurneyguys.com.au/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'The Gurney Guys - Professional Cleaning Services',
              },
            ],
          }}
          twitter={{
            handle: '@gurneyguys',
            site: '@gurneyguys',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              name: 'theme-color',
              content: '#10b981',
            },
          ]}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
