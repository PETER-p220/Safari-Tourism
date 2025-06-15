import React, { useState } from 'react';
import { Container } from '../components/layout';
import { SafariList } from '../components/features/SafariList';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Packages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Filtering logic would be implemented in a real app
  return (
    <Container>
      {/* Header */}
      <div className="relative pt-20 pb-32 bg-primary text-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center pt-12">
            <h1 className="text-4xl font-display font-bold mb-4">
              Discover Our Safari Packages
            </h1>
            <p className="text-lg mb-8">
              Find the perfect safari experience tailored to your adventure style, from wildlife
              exploration to luxury retreats in Africa's most breathtaking landscapes
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border-0 rounded-md text-gray-900 focus:ring-2 focus:ring-primary"
                placeholder="Search for destinations, animals, or experiences..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters Section */}
      <div className="bg-white dark:bg-gray-800 shadow-md py-4 -mt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md py-2 pl-10 pr-10 cursor-pointer">
                <option>All Destinations</option>
                <option>Arusha</option>
                <option>Kilimanjaro</option>
                <option>Manyara</option>
                <option>Mara</option>
              </select>
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md py-2 pl-10 pr-10 cursor-pointer">
                <option>Duration</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>8+ Days</option>
              </select>
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md py-2 pl-10 pr-10 cursor-pointer">
                <option>Group Size</option>
                <option>Solo Traveler</option>
                <option>Couple</option>
                <option>Small Group (3-6)</option>
                <option>Large Group (7+)</option>
              </select>
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md py-2 pl-10 pr-10 cursor-pointer">
                <option>Sort By</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Shortest First</option>
                <option>Duration: Longest First</option>
                <option>Popularity</option>
              </select>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Safari Packages Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">
            Available Safari Packages
          </h2>
          
          <SafariList />
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Choose the Perfect Safari for You
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With decades of experience arranging safaris in Africa, we understand that every traveler is unique. Whether you're seeking an action-packed adventure tracking predators, a leisurely journey through breathtaking landscapes, or a luxurious retreat with gourmet dining under the stars, we have the perfect safari for you.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our packages can be customized to suit your preferences, timeframe, and budget. Can't find exactly what you're looking for? Contact our safari specialists who can craft a bespoke itinerary tailored precisely to your desires.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              All our safaris include professional guides, comfortable accommodations, and carefully planned itineraries to maximize your wildlife viewing opportunities while ensuring your comfort and safety throughout your journey.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Packages;