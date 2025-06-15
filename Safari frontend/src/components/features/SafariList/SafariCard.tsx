import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Map, Award } from 'lucide-react';
import { Card } from '../../ui';
import { SafariPackage } from '../../../types';
import { useTheme } from '../../../hooks/useTheme';
import { formatCurrency } from '../../../utils/api';

type SafariCardProps = {
  safari: SafariPackage;
};

const SafariCard: React.FC<SafariCardProps> = ({ safari }) => {
  const navigate = useNavigate();
  const { preferences } = useTheme();
  
  const handleClick = () => {
    navigate(`/packages/${safari.id}`);
  };

  return (
    <Card 
      hoverable 
      onClick={handleClick}
      className="h-full flex flex-col"
    >
      {/* Safari Image */}
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={safari.images[0]} 
            alt={safari.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-primary text-white px-3 py-1 font-medium">
          {formatCurrency(safari.price, preferences.currency)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {safari.title}
        </h3>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{safari.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Map size={16} className="mr-2 text-primary" />
            <span>{safari.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Award size={16} className="mr-2 text-primary" />
            <span>
          
            </span>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {safari.description}
        </p>
        
        <div className="mt-auto pt-2 text-primary dark:text-primary-light font-medium text-sm">
          View Details →
        </div>
      </div>
    </Card>
  );
};

export default SafariCard;