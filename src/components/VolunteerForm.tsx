import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './common/Button';

const volunteerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  availability: z.array(z.enum(['Weekdays', 'Weekends'])).min(1, 'Select at least one availability'),
  role: z.enum(['Sorting', 'Packaging', 'Workshops']),
  comments: z.string().optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

export const VolunteerForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = (data: VolunteerFormData) => {
    console.log('Volunteer form submission:', data); // Mock API call
    reset();
    // Redirect to /stories (handled in parent component or via router)
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
        <label className="block text-gray-600 font-poppins mb-2">
          Availability
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              {...register('availability')}
              type="checkbox"
              value="Weekdays"
              className="mr-2"
            />
            <span className="text-gray-600 font-poppins">Weekdays</span>
          </label>
          <label className="flex items-center">
            <input
              {...register('availability')}
              type="checkbox"
              value="Weekends"
              className="mr-2"
            />
            <span className="text-gray-600 font-poppins">Weekends</span>
          </label>
        </div>
        {errors.availability && (
          <p className="text-red-500 text-sm font-poppins mt-1">{errors.availability.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-600 font-poppins mb-2">
          Preferred Role
        </label>
        <select
          {...register('role')}
          id="role"
          className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="Sorting">Sorting Books</option>
          <option value="Packaging">Packaging Starter Kits</option>
          <option value="Workshops">Literacy Workshops</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm font-poppins mt-1">{errors.role.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="comments" className="block text-gray-600 font-poppins mb-2">
          Comments (Optional)
        </label>
        <textarea
          {...register('comments')}
          id="comments"
          rows={4}
          className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
      </div>
      <div className="text-center">
        <Button type="submit" variant="primary" size="lg">
          Sign Up
        </Button>
      </div>
    </form>
  );
};