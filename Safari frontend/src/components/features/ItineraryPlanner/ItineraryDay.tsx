import React from 'react';
import { Sunrise, Coffee, Sun, Utensils, Camera, Sunset, Moon } from 'lucide-react';

type ItineraryDayProps = {
  day: number;
  activities: {
    time: string;
    title: string;
    description: string;
    icon: 'sunrise' | 'breakfast' | 'morning' | 'lunch' | 'afternoon' | 'sunset' | 'dinner';
  }[];
};

const ItineraryDay: React.FC<ItineraryDayProps> = ({ day, activities }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sunrise':
        return <Sunrise className="text-primary" />;
      case 'breakfast':
        return <Coffee className="text-primary" />;
      case 'morning':
        return <Sun className="text-primary" />;
      case 'lunch':
        return <Utensils className="text-primary" />;
      case 'afternoon':
        return <Camera className="text-primary" />;
      case 'sunset':
        return <Sunset className="text-primary" />;
      case 'dinner':
        return <Moon className="text-primary" />;
      default:
        return <Sun className="text-primary" />;
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 bg-primary/10 py-2 px-4 rounded-md inline-block">
        Day {day}
      </h3>
      
      <div className="border-l-2 border-primary ml-3 pl-8 space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-10 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center">
              {getIcon(activity.icon)}
            </div>
            
            <div className="mb-1 flex items-baseline">
              <span className="text-sm font-semibold text-primary dark:text-primary-light mr-2">
                {activity.time}
              </span>
              <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {activity.title}
              </h4>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryDay;