import React from 'react';
import { NextSeo } from 'next-seo';
import QuoteForm from '@/components/ui/QuoteForm';
import FeatureCard from '@/components/ui/FeatureCard';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { FaCheck, FaShieldAlt, FaTools } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NextSeo
        title="The Gurney Guys - Professional Cleaning Services Sydney"
        description="Sydney's trusted exterior cleaning professionals. Pressure washing, house washing, and roof treatments. Fully insured, satisfaction guaranteed!"
        canonical="https://gurneyguys.com.au/"
        openGraph={{
          url: 'https://gurneyguys.com.au/',
          title: 'The Gurney Guys - Professional Cleaning Services Sydney',
          description: 'Sydney\'s trusted exterior cleaning professionals. Pressure washing, house washing, and roof treatments. Fully insured, satisfaction guaranteed!',
          images: [
            {
              url: 'https://gurneyguys.com.au/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'The Gurney Guys - Professional Cleaning Services',
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sydney's Trusted Exterior Cleaning Professionals
              </h1>
              <p className="text-xl mb-6">
                Revitalise your property with our expert pressure washing, house washing, and roof treatments. Fully insured, satisfaction guaranteed!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/#quote-form" className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center transition-colors">
                  Get Free Quote
                </Link>
                <Link href="/services" className="bg-transparent hover:bg-emerald-600 border-2 border-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-64 md:h-80">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Quote</h2>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose The Gurney Guys?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaCheck className="text-emerald-500" size={36} />}
              title="Satisfaction Guaranteed"
              description="We stand by our work. If you're not completely satisfied, we'll make it right."
            />
            <FeatureCard 
              icon={<FaShieldAlt className="text-emerald-500" size={36} />}
              title="Fully Insured ($10M)"
              description="We carry comprehensive $10 million public liability insurance for your peace of mind."
            />
            <FeatureCard 
              icon={<FaTools className="text-emerald-500" size={36} />}
              title="Experienced & Professional"
              description="Our trained team uses the latest equipment and techniques for superior results."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Pressure Cleaning"
              description="Restore surfaces & boost curb appeal. Ideal for driveways, patios, paths."
              link="/services#pressure-cleaning"
              icon="/images/services/pressure-cleaning-driveway-icon.png"
            />
            <ServiceCard 
              title="House Washing / Soft Washing"
              description="Safely remove dirt, grime & mould from siding, roofs & delicate areas."
              link="/services#house-washing"
              icon="/images/services/house-washing-icon.png"
            />
            <ServiceCard 
              title="External Window Cleaning"
              description="Enjoy sparkling, streak-free windows for a brighter home."
              link="/services#window-cleaning"
              icon="/images/services/external-windows-icon.png"
            />
            <ServiceCard 
              title="Biocidal Roof Treatment"
              description="Protect your roof by eliminating moss, algae & lichen growth."
              link="/services#roof-treatment"
              icon="/images/services/biocidal-roof-treatment-icon-revised.png"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Our Results</h2>
          <p className="text-center text-lg mb-8">
            View the difference we make! Check out our before & after gallery.
          </p>
          <div className="max-w-4xl mx-auto mb-8">
            <BeforeAfterSlider 
              beforeImage="/images/before-after/example-comparison.png"
              afterImage="/images/before-after/example-comparison.png"
              beforeAlt="Before cleaning"
              afterAlt="After cleaning"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Drag the slider handle left and right to compare the before and after images.
            </p>
          </div>
          <div className="text-center mt-12">
            <Link href="/results" className="btn-primary">
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-lg mb-12">
            ★★★★★ 4.9 Stars - Based on 33+ Google Reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="My son recommended Nick as he was impressed with his work and I must say I too was pleased with the clean of our back patio area including the glass fencing around the pool. Nick was very professional and explained the process clearly. Would highly recommend The Gurney Guys."
              author="Mary.Ann Penellum"
              rating={5}
            />
            <TestimonialCard 
              quote="I got a call from Nick right after I put an enquiry in. He went over and explained all the details to me, with patience and respect for my lack of knowledge. He turned up on time and did a fantastic job. Highly recommend Nick and his team."
              author="Christian Cignarella"
              rating={5}
            />
            <TestimonialCard 
              quote="Nick has done a fantastic job! 100% impressed with how fresh the house looks afterwards and his effort to make sure everything has been done properly. Highly recommend!"
              author="Michael Penellum"
              rating={5}
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-primary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <Link href="/service-areas/city-east" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              City & East
            </Link>
            <Link href="/service-areas/inner-west" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              Inner West
            </Link>
            <Link href="/service-areas/north-shore-beaches" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              North Shore & Beaches
            </Link>
            <Link href="/service-areas/northern-districts" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              Northern Districts
            </Link>
            <Link href="/service-areas/hills-greater-west" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              Hills & Greater West
            </Link>
            <Link href="/service-areas/south-west" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              South West Sydney
            </Link>
            <Link href="/service-areas/penrith-blue-mtns" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              Penrith/Blue Mtns
            </Link>
            <Link href="/service-areas/hawkesbury" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              Hawkesbury
            </Link>
            <Link href="/service-areas/southern-sydney" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              Southern Sydney
            </Link>
            <Link href="/service-areas/shire" className="bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
              The Shire
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revitalise Your Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact The Gurney Guys today for a free, no-obligation quote. We service all areas of Sydney with professional, reliable cleaning services.
          </p>
          <Link href="/#quote-form" className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-xl transition-colors inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
