import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { Button, Card, FormInput, FormSelect } from '../../ui';
import { SafariPackage, BookingFormData } from '../../../types';
import { bookingFormSchema } from '../../../utils/validation';
import { useBooking } from '../../../hooks/useBooking';
import DatePicker from './DatePicker';

type BookingFormProps = {
  safari: SafariPackage;
  onSubmit: (data: BookingFormData) => void;
  isSubmitting?: boolean;
};

const BookingForm: React.FC<BookingFormProps> = ({
  safari,
  onSubmit,
  isSubmitting = false,
}) => {
  const { bookingData, updateBookingData } = useBooking();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      packageId: safari.id,
      startDate: new Date(),
      participants: safari.groupSize.min,
      specialRequirements: '',
      contactDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      }
    }
  });

  useEffect(() => {
    if (bookingData) {
      reset({
        ...bookingData,
        packageId: safari.id,
      });
    }
  }, [bookingData, reset, safari.id]);

  const participantOptions = Array.from(
    { length: safari.groupSize.max - safari.groupSize.min + 1 },
    (_, i) => {
      const value = safari.groupSize.min + i;
      return { value: value.toString(), label: value.toString() };
    }
  );

  const handleFormSubmit = async (data: BookingFormData) => {
  const startDate =
    typeof data.startDate === "string"
      ? data.startDate
      : data.startDate?.toISOString().slice(0, 10); // Format as YYYY-MM-DD

  const flattened = {
    safari_package: Number(data.packageId),
    start_date: startDate,
    participants: data.participants,
    special_requirements: data.specialRequirements,
    first_name: data.contactDetails.firstName,
    last_name: data.contactDetails.lastName,
    email: data.contactDetails.email,
    phone: data.contactDetails.phone,
  };

  try {
    await axios.post('http://localhost:8000/api/bookings', flattened);
    updateBookingData && updateBookingData(data);
    onSubmit && onSubmit(data);
  } catch (error) {
    console.error('Booking failed', error);
  }
};


  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Book Your Safari Experience
      </h3>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="hidden" {...register('packageId')} value={safari.id} />

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Start Date <span className="text-error">*</span>
          </label>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className={`
                  w-full px-3 py-2 bg-white dark:bg-gray-700 border rounded-md
                  focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                  ${errors.startDate ? 'border-error focus:ring-error/50' : 'border-gray-300 dark:border-gray-600'}
                `}
              />
            )}
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-error">{errors.startDate.message}</p>
          )}
        </div>

        {/* Participants */}
        <Controller
          control={control}
          name="participants"
          render={({ field }) => (
            <FormSelect
              label="Number of Participants"
              name="participants"
              options={participantOptions}
              value={field.value.toString()}
              onChange={(val) => field.onChange(Number(val))}
              required
              error={errors.participants?.message}
              placeholder="Select number of participants"
            />
          )}
        />

        {/* Special Requirements */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Special Requirements
          </label>
          <textarea
            {...register('specialRequirements')}
            rows={3}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Any dietary requirements, accessibility needs, or preferences?"
          />
        </div>

        {/* Contact Details */}
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Contact Information
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormInput
            label="First Name"
            {...register('contactDetails.firstName')}
            name="contactDetails.firstName"
            required
            error={errors.contactDetails?.firstName?.message}
          />
          <FormInput
            label="Last Name"
            {...register('contactDetails.lastName')}
            name="contactDetails.lastName"
            required
            error={errors.contactDetails?.lastName?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <FormInput
            label="Email"
            {...register('contactDetails.email')}
            name="contactDetails.email"
            type="email"
            required
            error={errors.contactDetails?.email?.message}
          />
          <FormInput
            label="Phone"
            {...register('contactDetails.phone')}
            name="contactDetails.phone"
            type="tel"
            required
            error={errors.contactDetails?.phone?.message}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          fullWidth
        >
          Book Now
        </Button>
      </form>
    </Card>
  );
};

export default BookingForm;
