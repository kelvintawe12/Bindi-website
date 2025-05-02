import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log('Contact form submission:', data); // Mock API call
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
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-green-700 mb-4">
            Connect with Bindi
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Reach out to join our mission or ask questions.
          </p>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 font-poppins">info@bindi.org</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 font-poppins">+250-123-456-789</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="flex justify-center gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8 text-green-600" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-8 w-8 text-green-600" />
                </a>
              </div>
              <p className="text-gray-600 font-poppins mt-4">Follow us on social media</p>
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>
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
              <label htmlFor="subject" className="block text-gray-600 font-poppins mb-2">
                Subject
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm font-poppins mt-1">{errors.subject.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 font-poppins mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm font-poppins mt-1">{errors.message.message}</p>
              )}
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;