import { SafariPackage, BookingFormData } from '../types';

// Mock data for safari packages
export const safariPackages: SafariPackage[] = [
  {
    id: '1',
    title: 'Serengeti Migration Safari',
    description: 'Experience the breathtaking wildebeest migration across the vast plains of the Serengeti. This safari offers an unparalleled wildlife viewing opportunity as millions of animals make their annual journey in search of fresh grazing.',
    price: 2499,
    duration: '7 days',
    images: ['https://images.pexels.com/photos/15373902/pexels-photo-15373902/free-photo-of-antelopes-herd-on-savannah.jpeg?auto=compress&cs=tinysrgb&w=600'
      
    ],
    highlights: [//images.pexels.com/photos/1
      'Witness the Great Migration across the Mara River',
      'Game drives in custom 4x4 safari vehicles',
      'Luxury tented camps near wildlife hotspots',
      'Professional guides with extensive knowledge',
      'Sunrise hot air balloon safari option'
    ],
    location: 'Tanzania',
  
    groupSize: {
      min: 2,
      max: 12
    },
    included: [
      'All accommodation',
      'Professional safari guide',
      'Park entrance fees',
      'All meals and drinks',
      'Airport transfers'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities'
    ]
  },
  {
    
      id: '2',
      title: 'Lake Manyara National Park Safari',
      description: 'Experience the diverse wildlife and stunning scenery of Lake Manyara National Park on this 2-day safari. See tree-climbing lions, flamingos, hippos, and a rich variety of birds in a beautiful Rift Valley setting.',
      price: 520,
      duration: '2 days',
      images: [
        'https://images.pexels.com/photos/1260803/pexels-photo-1260803.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      highlights: [
        'Tree-climbing lions and large elephant herds',
        'Spectacular flamingo flocks along the lake shore',
        'Varied birdlife with over 400 species',
        'Scenic game drives through woodland and groundwater forest',
        'Picnic lunch inside the park'
      ],
      location: 'Tanzania',
    
      groupSize: {
        min: 2,
        max: 12
      },
      included: [
        '4x4 safari vehicle with professional guide',
        'Park entrance and conservation fees',
        'Accommodation and meals',
        'Drinking water during game drives'
      ],
      notIncluded: [
        'International flights',
        'Travel insurance and visa fees',
        'Tips (recommended $10 pp/day)',
        'Personal expenses and souvenirs'
      ]
    },
    
  
  {
    
      id: '3',
      title: '3 Days Ruaha National Park Safari',
      description: 'Discover the untamed wilderness of Ruaha National Park on a 3-day safari filled with stunning landscapes, rare wildlife sightings, and an authentic remote safari experience.',
      price: 980,
      duration: '3 days',
      images: [
       'https://images.pexels.com/photos/30705906/pexels-photo-30705906/free-photo-of-silvery-cheeked-hornbill-in-kenyan-wildlife.jpeg?auto=compress&cs=tinysrgb&w=600', 
        'https://images.pexels.com/photos/12209471/pexels-photo-12209471.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      highlights: [
        'Scenic game drives along the Great Ruaha River',
        'High chances of seeing lions, leopards, and African wild dogs',
        'Large herds of elephants and rare antelope species',
        'Baobab-dotted landscapes and remote wilderness',
        'Over 500 bird species for birdwatching enthusiasts'
      ],
      location: 'Tanzania',
      
      groupSize: {
        min: 2,
        max: 10
      },
      included: [
        'Domestic flight or transportation to/from Ruaha',
        '4x4 safari vehicle with experienced guide',
        'Park entrance and conservation fees',
        'All meals and drinking water',
        'Accommodation for 2 nights'
      ],
      notIncluded: [
        'International flights',
        'Travel insurance and visa fees',
        'Tips (recommended $10 pp/day)',
        'Personal expenses and souvenirs'
      ]
    },
    
  

  {
    id: '4',
    title: '10 Days Mt. Kilimanjaro Hiking and Safari',
    description: 'Embark on an unforgettable adventure that combines the exhilarating summit of Mount Kilimanjaro with a rich wildlife safari in the Ngorongoro Crater. This 10-day journey offers dramatic landscapes, cultural encounters, and the ultimate African experience.',
    price: 6705,
    duration: '10 days',
    images: [
      'https://images.pexels.com/photos/15994023/pexels-photo-15994023/free-photo-of-people-in-a-travel-on-the-mount-kilimanjaro.jpeg?auto=compress&cs=tinysrgb&w=600',
      
      'https://images.pexels.com/phothttps://images.pexels.com/photos/31107597/pexels-photo-31107597/free-photo-of-mount-kilimanjaro-summit-under-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600os/5147833/pexels-photo-5147833.jpeg'
    ],
    highlights: [
      'Summit of Mount Kilimanjaro (Uhuru Peak, 5,895m)',
      'Machame Route hiking through rainforest, moorland, and alpine desert',
      'Stargazing from remote mountain camps',
      'Full-day safari in Ngorongoro Crater',
      'Stay in scenic lodges and mountain camps'
    ],
    location: 'Tanzania',
    
    groupSize: {
      min: 2,
      max: 10
    },
    included: [
      'All accommodation (lodges, huts, and camping)',
      'Professional mountain and safari guides',
      'All meals and drinking water',
      'Park and conservation fees',
      'All transportation within Tanzania',
      'Ngorongoro Crater game drive'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance and visa fees',
      'Tips (recommended $10 pp/day)',
      'Personal expenses and souvenirs'
  ]
  },

  {
    id: '5',
    title: ' Tarangire National Park Safari',
    description: 'Explore the elephant-rich landscapes and majestic baobab trees of Tarangire National Park on this short but immersive 2-day safari adventure. Perfect for wildlife enthusiasts and first-time visitors to Tanzania.',
    price: 540,
    duration: '2 days',
    images: [
      
      
     'https://images.pexels.com/photos/86413/elephant-africa-okavango-delta-animal-86413.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      
    
    highlights: [
      'Game drives in elephant-rich Tarangire National Park',
      'Views of giant baobab trees and acacia woodlands',
      'Scenic drive through Maasai villages',
      'Birdwatching with over 500 recorded species',
      'Sunset at the lodge or camp overlooking the park'
    ],
    location: 'Tanzania',
  
    groupSize: {
      min: 2,
      max: 12
    },
    included: [
      'Accommodation in lodge or campsite',
      'All park entrance and conservation fees',
      'All meals and bottled drinking water',
      'Professional English-speaking safari guide',
      'Transport in 4x4 safari vehicle with pop-up roof'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance and visa fees',
      'Tips (recommended $10 pp/day)',
      'Personal items and souvenirs'
    ]
  }
];
// Mock API functions
export const fetchSafariPackages = async (): Promise<SafariPackage[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(safariPackages);
    }, 800);
  });
};
export const fetchSafariPackageById = async (id: string): Promise<SafariPackage | undefined> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const package_ = safariPackages.find(pkg => pkg.id === id);
      resolve(package_);
    }, 500);
  });
};
export const submitBooking = async (bookingData: BookingFormData): Promise<{ success: boolean; bookingId?: string; error?: string }> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful booking 90% of the time
      if (Math.random() > 0.1) {
        resolve({
          success: true,
          bookingId: `BK-${Date.now().toString().substring(7)}`
        });
      } else {
        resolve({
          success: false,
          error: 'Unable to process booking. Please try again later.'
        });
      }
    }, 1500);
  });
};

// Currency conversion utility
export const formatCurrency = (
  amount: number, 
  currency: 'USD' | 'EUR' | 'GBP' = 'USD'
): string => {
  const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75
  };
  
  const symbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };
  
  const converted = amount * rates[currency];
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(converted);
};