export interface SafariPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  images: string[];
  highlights: string[];
  location: string;
  groupSize: {
    min: number;
    max: number;
  };
  included: string[];
  notIncluded: string[];
}

export interface BookingFormData {
  packageId: string;
  startDate: Date;
  participants: number;
  specialRequirements?: string;
  contactDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  currency: 'USD' | 'EUR' | 'GBP';
}

export type ImageGalleryProps = {
  images: string[];
  alt: string;
};

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
};

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
};

export type LayoutProps = {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
};

export type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export type FormSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
};

export type IconProps = {
  size?: number;
  className?: string;
};

export type TabProps = {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export type TabsProps = {
  tabs: TabProps[];
  className?: string;
};