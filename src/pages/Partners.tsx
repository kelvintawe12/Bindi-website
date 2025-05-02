import React from 'react';
import { motion } from 'framer-motion';
import { PartnerCard } from '../components/PartnerCard';
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

  // Mock data
const partners = [
    {
        id: '1',
        name: 'Save the Children Rwanda',
        description: 'Focuses on education and child protection, implementing literacy programs.',
        logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
        website: 'https://savethechildren.org',
    },
    {
        id: '2',
        name: 'Imbuto Foundation',
        description: 'Supports child development and girls’ education in Rwanda.',
        logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
        website: 'https://imbutofoundation.org',
    },
];

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
            Our Partners in Literacy
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Together, we’re building a stronger future for Rwanda’s children.
          </p>
        </motion.section>

        {/* Partner Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map(partner => (
              <PartnerCard key={partner.id} {...partner} />
            ))}
          </div>
        </motion.section>

        {/* Partnership Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
            Become a Partner
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="orgName" className="block text-gray-600 font-poppins mb-2">
                Organization Name
              </label>
              <input
                {...register('orgName')}
                type="text"
                id="orgName"
                className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.orgName && (
                <p className="text-red-500 text-sm font-poppins mt-1">{errors.orgName.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="contactName" className="block text-gray-600 font-poppins mb-2">
                Contact Name
              </label>
              <input
                {...register('contactName')}
                type="text"
                id="contactName"
                className="w-full p-3 border rounded-md font-poppins text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              {errors.contactName && (
                <p className="text-red-500 text-sm font-poppins mt-1">{errors.contactName.message}</p>
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
                Submit Partnership Request
              </Button>
            </div>
          </form>
          <div className="text-center mt-8">
            <Button variant="primary" size="lg" href="/contact">
              Contact Us
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Partners;