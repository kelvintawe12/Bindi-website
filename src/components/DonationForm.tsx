import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './common/Button';

const donationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  donationSize: z.enum(['1-10', '10-50', '50+']),
  pickupRequest: z.string().optional(),
  subscribe: z.boolean().default(false),
});

type DonationFormData = z.infer<typeof donationSchema>;

export const DonationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(donationSchema),
    defaultValues: {} as DonationFormData,
  });

  const onSubmit = (data: DonationFormData) => {
    console.log('Donation form submission:', data); // Mock API call
    reset();
    // Redirect to /impact (handled in parent component or via router)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 font-poppins mb-2">
          Name
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        {errors.name && (
          <p className="text-red-500 text-sm font-poppins mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-poppins mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        {errors.email && (
          <p className="text-red-500 text-sm font-poppins mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="donationSize" className="block text-gray-600 font-poppins mb-2">
          Donation Size
        </label>
        <select
          {...register('donationSize')}
          id="donationSize"
          className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="1-10">1–10 books</option>
          <option value="10-50">10–50 books</option>
          <option value="50+">50+ books</option>
        </select>
        {errors.donationSize && (
          <p className="text-red-500 text-sm font-poppins mt-1">{errors.donationSize.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="pickupRequest" className="block text-gray-600 font-poppins mb-2">
          Pickup Request (Optional)
        </label>
        <textarea
          {...register('pickupRequest')}
          id="pickupRequest"
          rows={4}
          className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Provide details for large donations (50+ books)"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            {...register('subscribe')}
            type="checkbox"
            className="mr-2"
          />
          <span className="text-gray-600 font-poppins">
            Subscribe to email updates
          </span>
        </label>
      </div>
      <div className="text-center">
        <Button type="submit" variant="primary" size="lg">
          Submit Donation
        </Button>
      </div>
    </form>
  );
};