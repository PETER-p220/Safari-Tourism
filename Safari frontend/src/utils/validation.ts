import { z } from 'zod';

export const bookingFormSchema = z.object({
  packageId: z.string().min(1, 'Please select a safari package'),
  startDate: z.date({
    required_error: 'Please select a start date',
    invalid_type_error: 'That\'s not a valid date'
  }),
  participants: z.number({
    required_error: 'Please enter the number of participants',
    invalid_type_error: 'Participants must be a number'
  }).int().min(1, 'At least 1 participant is required').max(20, 'Maximum 20 participants allowed'),
  specialRequirements: z.string().optional(),
  contactDetails: z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
  }),
});

export const loginFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;
export type ContactFormSchema = z.infer<typeof contactFormSchema>;
export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type RegisterFormSchema = z.infer<typeof registerFormSchema>;