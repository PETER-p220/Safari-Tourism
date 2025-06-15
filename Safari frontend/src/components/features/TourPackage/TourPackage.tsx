import React from 'react';

interface TourPackageProps {
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  company : string;
  highlights: string[];
}

const TourPackage: React.FC<TourPackageProps> = ({
  title,
  description,
  duration,
  price,
  image,
  highlights
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 dark:text-gray-400">{duration}</span>
          <span className="text-primary font-semibold">{price}</span>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-white">Highlights:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourPackage;