import React, { useState, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from './common/Button';
import { Loader2, Send, ArrowRight, Info } from 'lucide-react';

// Enhanced schema with location field
const volunteerSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be 50 characters or less'),
  email: z.string().email('Please enter a valid email address').max(100, 'Email must be 100 characters or less'),
  availability: z.array(z.enum(['Weekdays', 'Weekends'])).min(1, 'Please select at least one availability option'),
  role: z.enum(['Sorting', 'Packaging', 'Workshops', 'Outreach']),
  location: z.enum(['Kigali', 'Gisenyi', 'Butare', 'Other']),
  comments: z.string().max(500, 'Comments must be 500 characters or less').optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

// Mock progress data
const progress = { booksCollected: 750, goal: 1000 };

// Role descriptions
const roleDescriptions = {
  Sorting: 'Organize donated books by age, genre, and condition to prepare them for distribution.',
  Packaging: 'Assemble literacy kits with books and educational materials for schools.',
  Workshops: 'Lead interactive reading and literacy sessions for children aged 6–15.',
  Outreach: 'Engage communities to promote literacy and collect book donations.',
};

export const VolunteerForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const donationRef = useRef(null);
  const isDonationInView = useInView(donationRef, { once: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API
      console.log('Volunteer form submission:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  // Memoized options
  const roleOptions = useMemo(
    () => [
      { value: 'Sorting', label: 'Sorting Books' },
      { value: 'Packaging', label: 'Packaging Starter Kits' },
      { value: 'Workshops', label: 'Literacy Workshops' },
      { value: 'Outreach', label: 'Community Outreach' },
    ],
    []
  );

  const locationOptions = useMemo(
    () => [
      { value: 'Kigali', label: 'Kigali' },
      { value: 'Gisenyi', label: 'Gisenyi' },
      { value: 'Butare', label: 'Butare' },
      { value: 'Other', label: 'Other' },
    ],
    []
  );

  // Error summary
  const errorMessages = Object.values(errors).map((error) => error?.message).filter(Boolean);

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: { width: `${(progress.booksCollected / progress.goal) * 100}%`, transition: { duration: 2, ease: 'easeOut' } },
  };

  return (
    <div className="max-w-xl mx-auto">
      {isSubmitted ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-lg shadow-md p-8 text-center"
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
            className="cursor-pointer min-w-[140px] max-w-[200px] hover:scale-105 transition-transform"
          >
            See Volunteer Stories
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      ) : (
        <>
          <p className="text-lg font-poppins text-gray-600 mb-8 leading-relaxed" id="form-preamble">
            Join us in reaching our goal of 1000 books for Rwanda’s children. Volunteer to sort, package, or teach, and help
            deliver literacy to communities in need.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-md p-8"
            aria-describedby="form-preamble"
          >
            {errorMessages.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-6 p-4 bg-red-100 rounded-lg"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-red-500 font-poppins text-base font-semibold">
                  Please fix the following errors:
                </p>
                <ul className="list-disc pl-5 text-red-500 font-poppins text-sm">
                  {errorMessages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </motion.div>
            )}
            <div className="mb-8">
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
            <div className="mb-8">
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
            <div className="mb-8">
              <label htmlFor="location" className="block text-gray-800 font-poppins text-lg font-semibold mb-2">
                Location
              </label>
              <select
                {...register('location')}
                id="location"
                className={`w-full p-3 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors ${
                  errors.location ? 'border-red-500' : ''
                }`}
                aria-invalid={errors.location ? 'true' : 'false'}
                aria-describedby={errors.location ? 'location-error' : undefined}
                onBlur={() => trigger('location')}
              >
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p id="location-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className="mb-8">
              <label className="block text-gray-800 font-poppins text-lg font-semibold mb-2">Availability</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center">
                  <input
                    {...register('availability')}
                    type="checkbox"
                    value="Weekdays"
                    className="mr-2 h-5 w-5 text-green-600 focus:ring-green-600 border-gray-200 rounded"
                    aria-describedby={errors.availability ? 'availability-error' : undefined}
                  />
                  <span className="text-gray-600 font-poppins text-base">Weekdays</span>
                </label>
                <label className="flex items-center">
                  <input
                    {...register('availability')}
                    type="checkbox"
                    value="Weekends"
                    className="mr-2 h-5 w-5 text-green-600 focus:ring-green-600 border-gray-200 rounded"
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
            <div className="mb-8">
              <label htmlFor="role" className="block text-gray-800 font-poppins text-lg font-semibold mb-2">
                Preferred Role
              </label>
              <div className="relative">
                <select
                  {...register('role')}
                  id="role"
                  className={`w-full p-3 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-colors ${
                    errors.role ? 'border-red-500' : ''
                  }`}
                  aria-invalid={errors.role ? 'true' : 'false'}
                  aria-describedby={errors.role ? 'role-error' : undefined}
                  onBlur={() => trigger('role')}
                  onMouseEnter={() => setShowTooltip('role')}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {showTooltip === 'role' && (
                  <motion.div
                    variants={tooltipVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute z-10 bg-green-100 text-green-800 text-sm font-poppins p-3 rounded-lg shadow-md mt-2 w-64"
                    role="tooltip"
                  >
                    <p>{roleDescriptions[roleOptions.find((opt) => opt.value === (document.getElementById('role') as HTMLSelectElement)?.value)?.value as keyof typeof roleDescriptions] || 'Select a role to see its description.'}</p>
                  </motion.div>
                )}
                <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
              </div>
              {errors.role && (
                <p id="role-error" className="text-red-500 text-sm font-poppins mt-1" role="alert">
                  {errors.role.message}
                </p>
              )}
            </div>
            <div className="mb-8">
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
            <div className="sticky bottom-0 bg-white pt-4 pb-6 -mx-8 px-8 border-t border-gray-200 shadow-md z-20">
              <div className="flex flex-row justify-center gap-4 flex-wrap">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  ariaLabel="Submit volunteer form"
                  className="cursor-pointer min-w-[160px] max-w-[220px] flex items-center justify-center py-4 font-bold text-lg hover:scale-105 transition-transform"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Sign Up
                      <Send className="ml-2 h-6 w-6" />
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleReset}
                  ariaLabel="Reset volunteer form"
                  className="cursor-pointer min-w-[160px] max-w-[220px] py-4 font-bold text-lg hover:scale-105 transition-transform"
                >
                  Reset
                </Button>
              </div>
            </div>
          </form>
          <motion.div
            ref={donationRef}
            initial="hidden"
            animate={isDonationInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="mt-8 bg-white rounded-lg shadow-md p-8 text-center"
            role="region"
            aria-label="Donation call-to-action"
            aria-describedby="donation-description"
          >
            <h3 className="text-2xl font-extrabold font-poppins text-gray-800 mb-4">
              Not Ready to Volunteer?
            </h3>
            <p className="text-lg font-poppins text-gray-600 mb-6 leading-relaxed" id="donation-description">
              Help us collect the remaining 250 books of our 1000-book goal by donating books to Rwanda’s children.
            </p>
            <div className="text-lg font-poppins text-gray-800 mb-4">
              {reduceMotion ? (
                <span>{progress.booksCollected}/{progress.goal} Books Collected</span>
              ) : (
                <CountUp
                  start={0}
                  end={progress.booksCollected}
                  duration={2.5}
                  suffix={`/${progress.goal} Books Collected`}
                />
              )}
            </div>
            <div className="w-full max-w-xs mx-auto bg-gray-200 rounded-full h-3 mb-6">
              <motion.div
                className="bg-green-600 h-3 rounded-full"
                variants={progressBarVariants}
                initial="hidden"
                animate={isDonationInView ? 'visible' : 'hidden'}
              />
            </div>
            <p className="text-base font-poppins text-gray-600 italic mb-6">
              “Volunteering with Bindi was a joy. Every book we sort makes a difference!” – Sarah M., Kigali
            </p>
            <div className="flex flex-row justify-center gap-4 flex-wrap">
              <Button
                href="/donate"
                variant="primary"
                size="lg"
                ariaLabel="Donate books to Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px] hover:scale-105 transition-transform"
              >
                Donate Books
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/resources"
                variant="outline"
                size="lg"
                ariaLabel="Explore educational resources"
                className="cursor-pointer min-w-[140px] max-w-[200px] hover:scale-105 transition-transform"
              >
                Explore Resources
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};