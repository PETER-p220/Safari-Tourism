import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '../components/layout';
import { Button, Card, ImageGallery, Tabs } from '../components/ui';
import { BookingForm } from '../components/features/BookingForm';
import { Itinerary } from '../components/features/ItineraryPlanner';
import { Clock, Users, MapPin, Award, Check } from 'lucide-react';
import { fetchSafariPackageById, formatCurrency, submitBooking } from '../utils/api';
import { SafariPackage, BookingFormData } from '../types';
import { useTheme } from '../hooks/useTheme';
import { useBooking } from '../hooks/useBooking';

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { preferences } = useTheme();
  const { setSelectedPackage } = useBooking();
  
  const [safari, setSafari] = useState<SafariPackage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const loadSafariPackage = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const data = await fetchSafariPackageById(id);
        
        if (!data) {
          setError('Safari package not found');
          return;
        }
        
        setSafari(data);
        setSelectedPackage(data);
      } catch (err) {
        setError('Failed to load safari package details');
        console.error('Error fetching safari package:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSafariPackage();
  }, [id, setSelectedPackage]);
  
  const handleBookingSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitBooking(data);
      
      if (result.success) {
        // In a real app, this would navigate to a confirmation page with the booking details
        navigate(`/booking/confirmation?bookingId=${result.bookingId}`);
      } else {
        // Handle booking error
        setError(result.error || 'Failed to process booking');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Error submitting booking:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Container>
    );
  }
  
  if (error || !safari) {
    return (
      <Container>
        <div className="py-20">
          <div className="bg-error/10 text-error p-6 rounded-md max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-2">Error</h2>
            <p>{error || 'Safari package not found'}</p>
            <Button 
              variant="primary" 
              className="mt-4" 
              onClick={() => navigate('/packages')}
            >
              Browse All Safaris
            </Button>
          </div>
        </div>
      </Container>
    );
  }
  
  return (
    <Container>
      {/* Header */}
      <div className="pt-24 pb-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                {safari.title}
              </h1>
              <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-4 mb-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-primary" />
                  <span>{safari.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1 text-primary" />
                  <span>{safari.location}</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-1 text-primary" />
                  <span>{safari.groupSize.min}-{safari.groupSize.max} travelers</span>
                </div>
                <div className="flex items-center">
                  <Award size={16} className="mr-1 text-primary" />
                  <span>
                  
                  </span>
                </div>
              </div>
            </div>
            <div className="text-3xl font-bold text-primary dark:text-primary-light mt-2 md:mt-0">
              {formatCurrency(safari.price, preferences.currency)}
              <span className="text-base font-normal text-gray-600 dark:text-gray-400 ml-1">per person</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Safari Details */}
            <div className="lg:col-span-2">
              <ImageGallery images={safari.images} alt={safari.title} />
              
              <div className="mt-8">
                <Tabs
                  tabs={[
                    {
                      label: 'Overview',
                      content: (
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                          <h3 className="text-xl font-bold mb-4">About This Safari</h3>
                          <p className="mb-6">{safari.description}</p>
                          
                          <h4 className="text-lg font-semibold mb-3">Safari Highlights</h4>
                          <ul className="space-y-2 mb-6">
                            {safari.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <Check size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    },
                    {
                      label: 'Itinerary',
                      content: (
                        <Itinerary 
                          packageId={safari.id} 
                          duration={safari.duration}
                        />
                      ),
                    },
                    {
                      label: 'What\'s Included',
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          <Card className="p-5">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                              What's Included
                            </h3>
                            <ul className="space-y-2">
                              {safari.included.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <Check size={18} className="mr-2 text-success mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </Card>
                          
                          <Card className="p-5">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                              What's Not Included
                            </h3>
                            <ul className="space-y-2">
                              {safari.notIncluded.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-error mt-1 flex-shrink-0">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                  </svg>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </Card>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            
            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm 
                  safari={safari} 
                  onSubmit={handleBookingSubmit}
                  isSubmitting={isSubmitting}
                />
                
                <Card className="p-5 mt-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Our safari specialists are here to assist you with any questions about this package.
                  </p>
                  <Button 
                    variant="outline" 
                    fullWidth
                    onClick={() => navigate('/contact')}
                  >
                    Contact Us
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PackageDetail;