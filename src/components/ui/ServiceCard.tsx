import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  icon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, image, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
      {icon && (
        <div className="mb-4 flex justify-center">
          <div className="relative h-24 w-24">
            <Image 
              src={icon} 
              alt={`${title} icon`} 
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      {image && (
        <div className="mb-4 relative h-48 w-full">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}
      {!image && !icon && (
        <div className="mb-4 bg-gray-200 h-48 rounded-md flex items-center justify-center">
          <p className="text-gray-500">{title} Image</p>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center">
        Learn More <FaArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
