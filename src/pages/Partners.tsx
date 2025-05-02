import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const partnerSchema = z.object({
  orgName: z.string().min(1, 'Organization name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type PartnerForm = z.infer<typeof partnerSchema>;

const Partners: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerForm>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = (data: PartnerForm) => {
    console.log('Partner form submission:', data); // Mock API call
    reset();
  };

  // Mock data for partners
const partners = [
    {
        id: '1',
        name: 'Save the Children Rwanda',
        description: 'Focuses on education and child protection, implementing literacy programs.',
        logo: 'https://images.pexels.com/photos/3933023/pexels-photo-3933023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: 'https://savethechildren.org',
    },
    {
        id: '2',
        name: 'Imbuto Foundation',
        description: 'Supports child development and girls’ education in Rwanda.',
        logo: 'https://images.pexels.com/photos/4473773/pexels-photo-4473773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        website: 'https://imbutofoundation.org',
    },
];

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold font-sans mb-4">
            Partners in Literacy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-sans max-w-3xl mx-auto mb-6 sm:mb-8">
            Join us to build a stronger future for Rwanda’s children.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-colors"
          >
            Become a Partner
          </Button>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Main Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-gray-900 mb-4 sm:mb-6 leading-tight">
            Our Partners
          </h2>
          <p className="text-lg sm:text-xl font-sans text-gray-600 max-w-3xl mx-auto">
            Together, we’re transforming education through collaboration.
          </p>
        </motion.section>

        {/* Partner Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-gray-900 mb-6 sm:mb-8">
            Meet Our Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {partners.map(partner => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-gray-600 mb-4 line-clamp-3">
                    {partner.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    href={partner.website}
                    className="border-gray-600 text-gray-600 hover:bg-gray-50 w-full sm:w-auto"
                  >
                    Visit Website
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partnership Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-gray-900 mb-6 sm:mb-8 text-center">
            Become a Partner
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="orgName" className="block text-gray-600 font-sans text-sm sm:text-base mb-2">
                Organization Name
              </label>
              <input
                {...register('orgName')}
                type="text"
                id="orgName"
                className="w-full p-3 border rounded-md font-sans text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.orgName && (
                <p className="text-red-500 text-sm font-sans mt-1">{errors.orgName.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="contactName" className="block text-gray-600 font-sans text-sm sm:text-base mb-2">
                Contact Name
              </label>
              <input
                {...register('contactName')}
                type="text"
                id="contactName"
                className="w-full p-3 border rounded-md font-sans text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.contactName && (
                <p className="text-red-500 text-sm font-sans mt-1">{errors.contactName.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-sans text-sm sm:text-base mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full p-3 border rounded-md font-sans text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-sans mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 font-sans text-sm sm:text-base mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="w-full p-3 border rounded-md font-sans text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm font-sans mt-1">{errors.message.message}</p>
              )}
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Submit Partnership Request
              </Button>
            </div>
          </form>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="outline" size="lg" href="/contact" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Us
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Partners;