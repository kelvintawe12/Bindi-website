import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, Linkedin, Instagram, ChevronDown, ChevronUp } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [faqOpen, setFaqOpen] = useState<string | null>(null);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API delay
    console.log('Contact form submission:', data);
    setIsSubmitting(false);
    reset();
  };

  const toggleFaq = (id: string) => {
    setFaqOpen(faqOpen === id ? null : id);
  };

  const faqs = [
    { id: 'donate', question: 'How can I donate to Bindi?', answer: 'Visit our Donate page to contribute via secure payment methods.' },
    { id: 'volunteer', question: 'How can I volunteer?', answer: 'Check our Volunteer page for opportunities to join our literacy initiatives.' },
    { id: 'partner', question: 'Can my organization partner with Bindi?', answer: 'Contact us to discuss partnership opportunities.' },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Community collaboration in Rwanda"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold font-poppins text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect with Bindi
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-poppins text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reach out to join our mission, ask questions, or explore partnerships to empower literacy in Rwanda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact-form">
              <button
                className="px-8 py-3 bg-yellow-500 text-blue-900 font-poppins font-semibold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                aria-label="Scroll to contact form"
              >
                Send a Message
              </button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl py-16">
        {/* Contact Info */}
        <motion.section
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold font-poppins text-blue-900 mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.pexels.com/photos/159538/pexels-photo-159538.jpeg"
                alt="Children reading in a classroom"
                className="w-full h-48 object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <Mail className="h-10 w-10 text-yellow-500 mb-4" />
                <p className="text-blue-900 font-poppins font-semibold">info@bindi.org</p>
              </div>
            </motion.div>
            <motion.div
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg"
                alt="Community engagement in Rwanda"
                className="w-full h-48 object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <Phone className="h-10 w-10 text-yellow-500 mb-4" />
                <p className="text-blue-900 font-poppins font-semibold">+250-123-456-789</p>
              </div>
            </motion.div>
            <motion.div
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
                alt="Volunteers collaborating"
                className="w-full h-48 object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="flex gap-6 mb-4">
                  <a
                    href="https://linkedin.com/company/bindi-rwanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 hover:scale-125 transition-all duration-200"
                    aria-label="Follow Bindi on LinkedIn"
                  >
                    <Linkedin className="h-10 w-10" />
                  </a>
                  <a
                    href="https://instagram.com/bindi_rwanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 hover:scale-125 transition-all duration-200"
                    aria-label="Follow Bindi on Instagram"
                  >
                    <Instagram className="h-10 w-10" />
                  </a>
                </div>
                <p className="text-blue-900 font-poppins font-semibold">Follow us on social media</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          id="contact-form"
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold font-poppins text-blue-900 mb-8 text-center">
            Send Us a Message
          </h2>
          <div className="relative max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
              alt="Students engaging in literacy activities"
              className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
              loading="lazy"
            />
            <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-900 font-poppins font-medium mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md font-poppins text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm font-poppins mt-1" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-blue-900 font-poppins font-medium mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md font-poppins text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-poppins mt-1" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-blue-900 font-poppins font-medium mb-2">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-md font-poppins text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm font-poppins mt-1" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-blue-900 font-poppins font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md font-poppins text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm font-poppins mt-1" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto px-8 py-3 bg-yellow-500 text-blue-900 font-poppins font-semibold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                  disabled={isSubmitting}
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 mx-auto text-blue-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.section>

        {/* FAQ Accordion */}
        <motion.section
          className="max-w-3xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold font-poppins text-blue-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-poppins font-medium text-blue-900 hover:text-yellow-500"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={faqOpen === faq.id}
                  aria-controls={`faq-${faq.id}`}
                >
                  {faq.question}
                  {faqOpen === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {faqOpen === faq.id && (
                  <div id={`faq-${faq.id}`} className="p-4 text-gray-700 font-poppins">
                    {faq.answer}
                    {faq.id === 'donate' && (
                      <a
                        href="/donate"
                        className="ml-2 text-yellow-500 hover:text-yellow-400 font-poppins"
                        aria-label="Visit donate page"
                      >
                        Learn More
                      </a>
                    )}
                    {faq.id === 'volunteer' && (
                      <a
                        href="/volunteer"
                        className="ml-2 text-yellow-500 hover:text-yellow-400 font-poppins"
                        aria-label="Visit volunteer page"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;