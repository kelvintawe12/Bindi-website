import React, { memo } from 'react';
import { PenToolIcon, MegaphoneIcon, InstagramIcon, BookOpenIcon, UserIcon } from 'lucide-react';
export function ServicesOverview() {
  const services = [{
    title: 'Branding',
    description: 'Create a strong, memorable brand identity that resonates with your target audience.',
    icon: <PenToolIcon size={40} className="text-coral-500" />
  }, {
    title: 'Public Relations',
    description: 'Build and maintain a positive public image for your business.',
    icon: <MegaphoneIcon size={40} className="text-coral-500" />
  }, {
    title: 'Social Media Management',
    description: 'Increase your online presence and engage with your audience through social media platforms.',
    icon: <InstagramIcon size={40} className="text-coral-500" />
  }, {
    title: 'Tutoring & Professional Courses',
    description: 'Provide individuals with the skills and knowledge needed to excel in their careers.',
    icon: <BookOpenIcon size={40} className="text-coral-500" />
  }, {
    title: 'Personal Management',
    description: 'Streamline business operations and enhance productivity with skilled virtual assistants.',
    icon: <UserIcon size={40} className="text-coral-500" />
  }];
  return <section className="py-16 md:py-24 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            We offer a comprehensive suite of marketing and professional
            development services to help your business grow and succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-yellow-500">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href="#" className="text-coral-500 font-medium hover:text-coral-600 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>)}
        </div>
      </div>
    </section>;
}