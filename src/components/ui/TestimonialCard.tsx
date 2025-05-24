'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
            size={20} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <p className="font-bold">- {author}</p>
    </div>
  );
};

export default TestimonialCard;
