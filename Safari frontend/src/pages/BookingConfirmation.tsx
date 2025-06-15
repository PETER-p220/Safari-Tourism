import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../components/layout';
import { Button } from '../components/ui';
import { CheckCircle } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';

// Helper to get query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const bookingId = query.get('bookingId');
  const { selectedPackage, bookingData, resetBooking } = useBooking();
  
  // Reset booking data when component unmounts
  useEffect(() => {
    return () => {
      resetBooking();
    };
  }, [resetBooking]);
  
  if (!bookingId || !selectedPackage || !bookingData.startDate) {
    // If accessing this page directly without booking data, redirect to home
    navigate('/');
    return null;
  }
  
  // Format date
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <Container>
      <div className="py-20">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-white p-6 text-center">
            <CheckCircle size={64} className="mx-auto mb-4" />
            <h1 className="text-3xl font-display font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-lg">Thank you for booking with still waters Safaris</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Booking Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Booking Reference</p>
                  <p className="font-medium text-gray-900 dark:text-white">{bookingId}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Safari Package</p>
                  <p className="font-medium text-gray-900 dark:text-white">{selectedPackage.title}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {formatDate(bookingData.startDate)}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-900 dark:text-white">{selectedPackage.duration}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Number of Participants</p>
                  <p className="font-medium text-gray-900 dark:text-white">{bookingData.participants}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">{selectedPackage.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                What Happens Next?
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-2 text-center">1</span>
                  <span>You'll receive a confirmation email with your booking details shortly.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-2 text-center">2</span>
                  <span>Our team will contact you within 24 hours to confirm your booking and discuss any special requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-2 text-center">3</span>
                  <span>You'll receive a detailed itinerary and pre-departure information pack.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-2 text-center">4</span>
                  <span>Get ready for an amazing safari adventure!</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                fullWidth 
                onClick={() => navigate('/')}
              >
                Return to Home
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => navigate('/contact')}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookingConfirmation;