import React from 'react';
import ItineraryDay from './ItineraryDay';

// Sample itinerary data - in a real app this would come from an API
const serengeti7DayItinerary = [
  {
    day: 1,
    activities: [
      {
        time: '07:00',
        title: 'Arrival & Welcome',
        description: 'Meet your guide at Kilimanjaro International Airport. Transfer to your lodge.',
        icon: 'sunrise',
      },
      {
        time: '12:30',
        title: 'Lunch & Orientation',
        description: 'Enjoy lunch while your guide briefs you on your upcoming safari adventure.',
        icon: 'lunch',
      },
      {
        time: '16:00',
        title: 'Short Nature Walk',
        description: 'Take a guided nature walk around the lodge grounds to spot local birds and wildlife.',
        icon: 'afternoon',
      },
      {
        time: '19:00',
        title: 'Welcome Dinner',
        description: 'Traditional Tanzanian dinner and cultural performance at the lodge.',
        icon: 'dinner',
      },
    ],
  },
  {
    day: 2,
    activities: [
      {
        time: '05:30',
        title: 'Early Morning Game Drive',
        description: 'Depart for an early morning game drive to catch predators in action.',
        icon: 'sunrise',
      },
      {
        time: '09:00',
        title: 'Bush Breakfast',
        description: 'Enjoy breakfast in the wilderness with amazing views of the savanna.',
        icon: 'breakfast',
      },
      {
        time: '11:00',
        title: 'Continue Game Drive',
        description: 'Search for lions, elephants, giraffes, and more in their natural habitat.',
        icon: 'morning',
      },
      {
        time: '16:00',
        title: 'Sundowner Experience',
        description: 'Watch the sunset over the Serengeti plains with refreshments.',
        icon: 'sunset',
      },
    ],
  },
  {
    day: 3,
    activities: [
      {
        time: '06:00',
        title: 'Migration Viewing',
        description: 'Full day excursion to witness the wildebeest migration (seasonal).',
        icon: 'sunrise',
      },
      {
        time: '12:00',
        title: 'Picnic Lunch',
        description: 'Picnic lunch near a hippo pool to observe these massive animals in their habitat.',
        icon: 'lunch',
      },
      {
        time: '15:00',
        title: 'Visit to Research Center',
        description: 'Learn about conservation efforts and wildlife research in the Serengeti.',
        icon: 'afternoon',
      },
    ],
  },
];

type ItineraryProps = {
  packageId: string;
  duration: string;
};

const Itinerary: React.FC<ItineraryProps> = ({ packageId, duration }) => {
  // In a real app, this would fetch the itinerary based on the package ID
  // For this demo, we'll use the sample data
  
  // Extract number of days from duration string
  const days = parseInt(duration.split(' ')[0], 10);
  
  // For demo purposes, we'll show just 3 days and note if there are more
  const visibleDays = Math.min(days, 3);
  const hasMoreDays = days > 3;
  
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Your Day-by-Day Itinerary
      </h2>
      
      {serengeti7DayItinerary.slice(0, visibleDays).map((day) => (
        <ItineraryDay key={day.day} day={day.day} activities={day.activities} />
      ))}
      
      {hasMoreDays && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            This is a preview of your {duration} itinerary. After booking, you'll receive the full detailed itinerary for all {days} days.
          </p>
          <button className="mt-2 text-primary dark:text-primary-light font-medium hover:underline">
            Request Full Itinerary
          </button>
        </div>
      )}
    </div>
  );
};

export default Itinerary;