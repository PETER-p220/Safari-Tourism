import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/layout';
import { Button } from '../components/ui';
import { SafariList } from '../components/features/SafariList';
import { MapPin, Calendar, Users, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg"
            alt="Safari hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="w-full animate-fade-in">
            <h1 className="text-5xl font-display font-bold leading-tight mb-4 max-w-2xl">
              Experience the Wild Beauty of Tanzania
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Unforgettable safari adventures with expert guides, luxury accommodations, and breathtaking wildlife encounters.
            </p>
            
            {/* Search Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <label className="block text-sm font-medium mb-2">Search:</label>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Your Date:</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">No. of person:</label>
                  <select
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div className="flex items-end mt-">
                  
                  <button
                    className="w-full px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Featured Safaris Section */}
       <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
              Featured Safari Experiences
            </h2>
            <Button 
              variant="outline" 
              onClick={() => navigate('/packages')}
            >
              View All Safaris
            </Button>
          </div>
          
          <SafariList />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine luxury with adventure to create safari experiences that exceed your expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Prime Locations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access to the best wildlife viewing areas and exclusive reserves
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose your preferred dates and customize your safari experience
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Knowledgeable local guides with years of experience
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Safety First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive safety measures and protocols on all safaris
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-16 bg-primary/5 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              What Our Adventurers Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from travelers who've experienced the magic of our safaris
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                    alt="Testimonial avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Michael Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">New York, USA</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The Serengeti Migration Safari exceeded all our expectations. Our guide was incredibly knowledgeable and we saw all of the Big Five! The accommodations were luxurious even in the middle of the wilderness."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Testimonial avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Sarah Miller</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">London, UK</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "This was our third safari with still waters and each one has been perfect. The attention to detail, the wonderful guides, and the amazing wildlife encounters make these trips truly special."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    alt="Testimonial avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">David Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sydney, Australia</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "From booking to the farewell dinner, everything was flawless. We felt safe, pampered, and exhilarated throughout our tanzania Wildlife Explorer safari. Truly the trip of a lifetime!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready for Your Safari Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your dream safari today and create memories that will last a lifetime
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/20"
            onClick={() => navigate('/packages')}
          >
            Explore Our Packages
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Home;