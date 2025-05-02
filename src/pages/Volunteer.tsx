import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VolunteerForm } from '../components/VolunteerForm';
import { Button } from '../components/common/Button';
import { Users } from 'lucide-react';

const Volunteer: React.FC = () => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const roles = [
    {
      title: 'Sorting Books',
      description: 'Organize donated books by age, condition, and subject to prepare them for distribution.',
    },
    {
      title: 'Packaging Starter Kits',
      description: 'Create engaging starter kits combining storybooks and activity materials for schools.',
    },
    {
      title: 'Literacy Workshops',
      description: 'Assist teachers in Musanze and Kibeho with workshops to promote reading skills.',
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
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4">
            Be a Change Maker
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Volunteer with Bindi to bring books and literacy to Rwanda’s children.
          </p>
        </motion.section>

        {/* Volunteer Roles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Volunteer Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setExpandedRole(expandedRole === index ? null : index)}
              >
                <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                  {role.title}
                </h3>
                <motion.p
                  initial={{ height: expandedRole === index ? 'auto' : 0 }}
                  animate={{ height: expandedRole === index ? 'auto' : 0 }}
                  className="text-gray-600 font-poppins overflow-hidden"
                >
                  {role.description}
                </motion.p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Volunteer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Why Volunteer?
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md flex-1">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-600 font-poppins">
                Make a tangible impact on children’s education in Rwanda.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex-1">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-600 font-poppins">
                Build skills in organization, teamwork, and community engagement.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex-1">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-600 font-poppins">
                Network with ALU students and educators passionate about literacy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Volunteer Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Sign Up to Volunteer
          </h2>
          <VolunteerForm />
          <div className="text-center mt-8">
            <Button variant="primary" size="lg" href="/stories">
              See Volunteer Stories
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Volunteer;