import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function BindiInitiative() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    { id: 'overview', title: 'Initiative Overview' },
    { id: 'problem', title: 'Problem Statement' },
    { id: 'goals', title: 'Project Goals' },
    { id: 'communities', title: 'Target Communities' },
    { id: 'activities', title: 'Key Activities' },
    { id: 'partners', title: 'Potential Partners' },
    { id: 'impact', title: 'Impact Vision' },
    { id: 'next-steps', title: 'Next Steps' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-700 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/159538/pexels-photo-159538.jpeg"
            alt="Children reading in a classroom in Rwanda"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold font-poppins mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BINDI: Empowering Rwanda Through Literacy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-poppins mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in redistributing 1000 books to underprivileged schools, fostering a love for reading in Rwanda’s children.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/donate">
              <button
                className="px-8 py-3 bg-yellow-500 text-blue-900 font-poppins font-semibold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                aria-label="Donate to support Bindi Initiative"
              >
                Donate Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar (Desktop) */}
        <nav className="hidden lg:block lg:w-1/4 sticky top-24 h-fit">
          <div className="bg-blue-900/10 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold font-poppins text-blue-900 mb-4">Explore Bindi</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block font-poppins text-gray-700 hover:text-yellow-500 hover:scale-105 transition-all duration-200"
                    aria-label={`Navigate to ${section.title}`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Accordion (Mobile) */}
        <div className="lg:hidden mb-8">
          <div className="bg-blue-900/10 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold font-poppins text-blue-900 mb-4">Explore Bindi</h3>
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-3 font-poppins text-gray-700 hover:text-yellow-500"
                  onClick={() => toggleAccordion(section.id)}
                  aria-expanded={activeSection === section.id}
                  aria-controls={`section-${section.id}`}
                >
                  {section.title}
                  {activeSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeSection === section.id && (
                  <div id={`section-${section.id}`} className="pb-3">
                    <a
                      href={`#${section.id}`}
                      className="block font-poppins text-gray-700 hover:text-yellow-500"
                      onClick={() => toggleAccordion(section.id)}
                    >
                      Go to Section
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="lg:w-3/4 space-y-12">
          <motion.section
            id="overview"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">1. Initiative Overview</h2>
                <p className="text-gray-700 font-poppins leading-relaxed mb-4">
                  The Bindi Initiative is a social impact project by Bindi, dedicated to creating engaging and culturally relevant activity and coloring books for children. Now expanding into Rwanda, Bindi combats literacy challenges by improving access to quality educational materials for underserved communities.
                </p>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  We aim to collect 1000 gently used books and redistribute them to underprivileged schools across Rwanda, reducing educational inequalities and empowering young learners.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Teachers collaborating in Rwanda"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            id="problem"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">2. Problem Statement</h2>
                <p className="text-gray-700 font-poppins leading-relaxed mb-4">
                  In Rwanda, many children in rural areas face literacy challenges due to poverty. Nearly 38% of Rwandans live below the poverty line, limiting access to basic educational materials like textbooks and storybooks.
                </p>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  Despite progress in education, there’s a gap in resources for early learners, hindering literacy development and educational outcomes.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg"
                  alt="Rural community in Rwanda"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            id="goals"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">3. Project Goals</h2>
            <ul className="list-disc list-inside text-gray-700 font-poppins leading-relaxed space-y-2">
              <li>Recycle and redistribute 1000 educational books to under-resourced schools.</li>
              <li>Promote a culture of reading and literacy in underserved communities.</li>
              <li>Involve students and institutions in Kigali (starting with ALU) in a sustainable initiative.</li>
              <li>Align with social entrepreneurship and educational equity goals.</li>
            </ul>
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
              alt="Students engaging in literacy activities"
              className="w-full h-64 object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.section>

          <motion.section
            id="communities"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">4. Target Communities</h2>
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              Bindi will focus on two communities:
            </p>
            <ul className="list-disc list-inside text-gray-700 font-poppins leading-relaxed space-y-2">
              <li>
                <strong>Musanze District</strong>: Literacy rate of 63% among children aged 6–15, with limited educational materials.
              </li>
              <li>
                <strong>Kibeho Sector</strong>: Poverty rate exceeds 40%, with a need for storybooks and creative materials.
              </li>
            </ul>
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
              alt="Community learning center in Rwanda"
              className="w-full h-64 object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.section>

          <motion.section
            id="activities"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">5. Key Activities</h2>
            <ul className="list-disc list-inside text-gray-700 font-poppins leading-relaxed space-y-2">
              <li>Book Collection Drives: Monthly drives at ALU for book donations.</li>
              <li>Sorting and Packaging: Volunteers create starter kits with storybooks and materials.</li>
              <li>Community Distribution: Deliver materials with optional literacy workshops.</li>
              <li>Monitoring & Storytelling: Track impact and share beneficiary stories.</li>
            </ul>
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
              alt="Volunteers sorting books for distribution"
              className="w-full h-64 object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.section>

          <motion.section
            id="partners"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">6. Potential Partners</h2>
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              Bindi will partner with:
            </p>
            <ul className="list-disc list-inside text-gray-700 font-poppins leading-relaxed space-y-2">
              <li>Save the Children Rwanda: Focuses on literacy programs.</li>
              <li>Imbuto Foundation: Supports child development.</li>
              <li>Book Aid International: Improves book access.</li>
              <li>Ready for Reading: Provides rural library services.</li>
            </ul>
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
              alt="Community partnership meeting"
              className="w-full h-64 object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.section>

          <motion.section
            id="impact"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">7. Impact Vision</h2>
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              Bindi aims to:
            </p>
            <ul className="list-disc list-inside text-gray-700 font-poppins leading-relaxed space-y-2">
              <li>Support 500+ children in the first year.</li>
              <li>Redistribute 1,000+ books to 4+ schools.</li>
              <li>Inspire a network of literacy advocates.</li>
            </ul>
            <p className="text-gray-700 font-poppins leading-relaxed mb-4">
              Long-term goals include improving foundational literacy and supporting SDG 4.
            </p>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="Children celebrating literacy achievements"
              className="w-full h-64 object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.section>

          <motion.section
            id="next-steps"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">8. Next Steps</h2>
            <ul className="list-disc list-inside text-gray-700 font-poppins leading-relaxed space-y-2">
              <li>Finalize partnerships with local organizations.</li>
              <li>Launch the first book drive at ALU.</li>
              <li>Design promotional materials for social media.</li>
              <li>Begin pilot distribution in Musanze and Kibeho.</li>
              <li>Collect baseline data on book access.</li>
            </ul>
            <img
              src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg"
              alt="Planning literacy initiative"
              className="w-full h-64 object-cover rounded-lg mt-6 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.section>

          <motion.section
            id="conclusion"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold font-poppins text-yellow-500 mb-4">Conclusion</h2>
            <p className="text-gray-700 font-poppins leading-relaxed">
              The Bindi Literacy Initiative is a movement empowering youth to address literacy challenges in Rwanda. By combining creativity, community, and compassion, Bindi aims to ensure every child can read, imagine, and grow.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/donate">
                <button
                  className="px-6 py-3 bg-yellow-500 text-blue-900 font-poppins font-semibold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                  aria-label="Donate to support Bindi Initiative"
                >
                  Donate Now
                </button>
              </Link>
              <Link to="/volunteer">
                <button
                  className="px-6 py-3 bg-blue-900 text-white font-poppins font-semibold rounded-lg hover:bg-blue-800 hover:scale-105 transition-all duration-200"
                  aria-label="Volunteer with Bindi Initiative"
                >
                  Join Us
                </button>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default BindiInitiative;