import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Button } from './common/Button';
import { Loader2, ArrowRight } from 'lucide-react';

// Enhanced schema with stricter validation
const volunteerSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be 50 characters or less'),
  email: z.string().email('Please enter a valid email address').max(100, 'Email must be 100 characters or less'),
  availability: z.array(z.enum(['Weekdays', 'Weekends'])).min(1, 'Please select at least one availability option'),
  role: z.enum(['Sorting', 'Packaging', 'Workshops', 'Outreach']),
  comments: z.string().max(500, 'Comments must be 500 characters or less').optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

export const VolunteerForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    mode: 'onBlur', // Validate on blur for real-time feedback
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      console.log('Volunteer form submission:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form and clear success message
  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  // Memoized role options
  const roleOptions = useMemo(
    () => [
      { value: 'Sorting', label: 'Sorting Books' },
      { value: 'Packaging', label: 'Packaging Starter Kits' },
      { value: 'Workshops', label: 'Literacy Workshops' },
      { value: 'Outreach', label: 'Community Outreach' },
    ],
    []
  );

  // Animation for success message
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="max-w-xl mx-auto">
      {isSubmitted ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-lg shadow-md p-6 text-center"
          role="alert"
          aria-live="polite"
        >
          <h3 className="text-2xl font-extrabold font-poppins text-gray-800 mb-4">
            Thank You for Signing Up!
          </h3>
          <p className="text-lg font-poppins text-gray-600 mb-6 leading-relaxed">
            We’ve received your volunteer application. We’ll reach out soon with next steps.
          </p>
          <Button
            href="/stories"
            variant="primary"
            size="lg"
            ariaLabel="Explore volunteer stories from Bindi"
            className="cursor-pointer min-w-[140px] max-w-[200px]"
          >
            See Volunteer Stories
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      ) : (
        <>
          <p className="text-lg font-poppins text-gray-600 mb-6 leading-relaxed" id="form-preamble">
            Join our volunteer team to help bring literacy to Rwanda’s children. Please fill out the form below, and we’ll
            contact you with details about your preferred role.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-md p-6"
            aria-describedby="form-preamble"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-poppins text-lg font-semibold mb-2">
                Name
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className={`w-full p-3 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors ${
                  errors.name ? 'border-red-500' : ''
                }`}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                onBlur={() => trigger('name')}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-poppins text-lg font-semibold mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className={`w-full p-3 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors ${
                  errors.email ? 'border-red-500' : ''
                }`}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                onBlur={() => trigger('email')}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 font-poppins text-lg font-semibold mb-2">Availability</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center">
                  <input
                    {...register('availability')}
                    type="checkbox"
                    value="Weekdays"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-600 border-gray-200 rounded"
                    aria-describedby={errors.availability ? 'availability-error' : undefined}
                  />
                  <span className="text-gray-600 font-poppins text-base">Weekdays</span>
                </label>
                <label className="flex items-center">
                  <input
                    {...register('availability')}
                    type="checkbox"
                    value="Weekends"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-600 border-gray-200 rounded"
                    aria-describedby={errors.availability ? 'availability-error' : undefined}
                  />
                  <span className="text-gray-600 font-poppins text-base">Weekends</span>
                </label>
              </div>
              {errors.availability && (
                <p id="availability-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.availability.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="role" className="block text-gray-800 font-poppins text-lg font-semibold mb-2">
                Preferred Role
              </label>
              <select
                {...register('role')}
                id="role"
                className={`w-full p-3 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors ${
                  errors.role ? 'border-red-500' : ''
                }`}
                aria-invalid={errors.role ? 'true' : 'false'}
                aria-describedby={errors.role ? 'role-error' : undefined}
                onBlur={() => trigger('role')}
              >
                {roleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p id="role-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.role.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="comments" className="block text-gray-800 font-poppins text-lg font-semibold mb-2">
                Comments (Optional)
              </label>
              <textarea
                {...register('comments')}
                id="comments"
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors"
                aria-describedby={errors.comments ? 'comments-error' : undefined}
                onBlur={() => trigger('comments')}
              ></textarea>
              {errors.comments && (
                <p id="comments-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.comments.message}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-center gap-4 flex-wrap">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className={`cursor-pointer min-w-[140px] max-w-[200px] flex items-center justify-center ${
                  isSubmitting ? 'opacity-50 pointer-events-none' : ''
                }`}
                ariaLabel="Submit volunteer form"
                className="cursor-pointer min-w-[140px] max-w-[200px] flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleReset}
                ariaLabel="Reset volunteer form"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Reset
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};