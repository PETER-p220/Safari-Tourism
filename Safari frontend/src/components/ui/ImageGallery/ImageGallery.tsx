import React, { useState } from 'react';
import { ImageGalleryProps } from '../../../types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  alt 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="aspect-[16/9] overflow-hidden rounded-lg mb-2">
        <img 
          src={images[activeIndex]} 
          alt={`${alt} ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all
                ${activeIndex === index 
                  ? 'ring-2 ring-primary' 
                  : 'opacity-70 hover:opacity-100'}
              `}
            >
              <img 
                src={image} 
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;