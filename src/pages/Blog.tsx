import React from 'react';
import { motion } from 'framer-motion';
import { BlogList } from '../components/BlogList';
import { Button } from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const Blog: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterForm) => {
    console.log('Newsletter subscription:', data); // Mock API call
    reset();
  };

  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4">
            Stories from the Heart of Bindi
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Follow our journey to boost literacy in Rwanda.
          </p>
        </motion.section>

        {/* Blog Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <BlogList />
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Stay Updated
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                {...register('email')}
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm font-poppins mt-2">{errors.email.message}</p>
            )}
          </form>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/stories" className="block mx-auto text-green-600 hover:text-green-700">
              See All Stories
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Blog;