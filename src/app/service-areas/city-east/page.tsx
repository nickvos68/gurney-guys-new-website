import React from 'react';
import { NextSeo } from 'next-seo';
import LocalSEOTemplate from '@/components/seo/LocalSEOTemplate';

export default function CityEast() {
  const suburbs = [
    'Sydney CBD', 
    'Surry Hills', 
    'Darlinghurst', 
    'Potts Point', 
    'Elizabeth Bay', 
    'Rushcutters Bay', 
    'Paddington', 
    'Woollahra', 
    'Double Bay', 
    'Bellevue Hill', 
    'Point Piper', 
    'Vaucluse', 
    'Watsons Bay', 
    'Bondi', 
    'Bondi Junction', 
    'Bronte', 
    'Clovelly', 
    'Randwick', 
    'Coogee', 
    'Maroubra'
  ];

  return (
    <LocalSEOTemplate 
      area="City & East"
      title="Pressure Washing & House Washing Services in City & East Sydney"
      description="Professional pressure washing, house washing, and exterior cleaning services throughout Sydney's City & Eastern Suburbs. Fully insured, satisfaction guaranteed!"
      metaDescription="The Gurney Guys provide professional pressure washing, house washing and exterior cleaning services throughout Sydney's City & Eastern Suburbs. Fully insured with satisfaction guaranteed!"
      suburbs={suburbs}
    />
  );
}
