'use client';
import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const LocalSEOTemplate = ({ 
  area, 
  title, 
  description, 
  metaDescription,
  suburbs
}: {
  area: string;
  title: string;
  description: string;
  metaDescription: string;
  suburbs: string[];
}) => {
  return (
    <>
      <NextSeo
        title={`${title} | The Gurney Guys`}
        description={metaDescription}
        canonical={`https://gurneyguys.com.au/service-areas/${area.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
        openGraph={{
          url: `https://gurneyguys.com.au/service-areas/${area.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`,
          title: `${title} | The Gurney Guys`,
          description: metaDescription,
        }}
      />

      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Services in {area}</h2>
              <p className="mb-4">
                The Gurney Guys provide professional exterior cleaning services throughout {area}, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pressure cleaning for driveways, patios, and paths</li>
                <li>House washing and soft washing for all exterior surfaces</li>
                <li>External window cleaning</li>
                <li>Biocidal roof treatments</li>
                <li>Commercial property cleaning</li>
              </ul>
              <p className="mb-6">
                All our services come with our satisfaction guarantee and are fully insured with $10 million public liability coverage.
              </p>
              <Link href="/#quote-form" className="btn-primary">
                Get Your Free Quote
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Areas We Service in {area}</h2>
              <p className="mb-4">
                Our team provides expert cleaning services throughout {area}, including the following suburbs:
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {suburbs.map((suburb, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-2 rounded">
                    {suburb}
                  </div>
                ))}
              </div>
              <p>
                Don't see your suburb listed? Contact us anyway - we service the entire {area} region!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose The Gurney Guys in {area}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p>
                As a local Sydney business, we understand the specific cleaning challenges in {area}. Our team has extensive experience working in this area and knows exactly how to achieve the best results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Reliable Service</h3>
              <p>
                We pride ourselves on punctuality, professionalism, and clear communication. When you book with The Gurney Guys, you can expect exceptional service from start to finish.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p>
                Our many satisfied customers in {area} can attest to the quality of our work. We consistently deliver outstanding cleaning results that enhance the appearance and value of your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Property in {area}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact The Gurney Guys today for a free, no-obligation quote. We're ready to help you revitalize your property with our professional cleaning services.
          </p>
          <Link href="/#quote-form" className="btn-primary text-lg py-3 px-8">
            Request Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default LocalSEOTemplate;
