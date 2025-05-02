import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ResourceCard } from '../components/ResourceCard';
import { Button } from '../components/common/Button';

const Resources: React.FC = () => {
  // Mock data
  const resources: { id: string; title: string; description: string; category: 'Guides' | 'Activities' | 'Tips'; link: string }[] = [
    {
      id: '1',
      title: 'How to Run a Reading Club',
      description: 'A guide for teachers and parents to foster a love for reading.',
      category: 'Guides',
      link: '#', // Mock link
    },
    {
      id: '2',
      title: 'Storytelling Activities',
      description: 'Printable worksheets to engage young readers.',
      category: 'Activities',
      link: '#', // Mock link
    },
    {
      id: '3',
      title: 'Literacy Tips for Parents',
      description: 'Strategies to support children’s reading at home.',
      category: 'Tips',
      link: '#', // Mock link
    },
  ];

  const [filter, setFilter] = useState<'All' | 'Guides' | 'Activities' | 'Tips'>('All');
  const filteredResources = filter === 'All' ? resources : resources.filter(resource => resource.category === filter);

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
            Tools for Literacy
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Explore resources to support reading and learning in Rwanda.
          </p>
        </motion.section>

        {/* Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold font-poppins text-gray-800">
              Our Resources
            </h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'All' | 'Guides' | 'Activities' | 'Tips')}
              className="p-2 border rounded-md font-poppins text-gray-600"
            >
              <option value="All">All Resources</option>
              <option value="Guides">Guides</option>
              <option value="Activities">Activities</option>
              <option value="Tips">Tips</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button variant="primary" size="lg" href="/contact">
            Share a Resource
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default Resources;