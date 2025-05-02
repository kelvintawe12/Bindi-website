import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProgressBar } from '../components/common/ProgressBar';
import { ImpactStory } from '../components/ImpactStory';
import { Button } from '../components/common/Button';

const Impact: React.FC = () => {
  // Mock data
  const progress = { booksCollected: 850, schoolsServed: 3, childrenReached: 400 };
  const stories: Array<{
    id: string;
    title: string;
    content: string;
    image: string;
    quote: string;
    community: 'Kibeho' | 'Musanze';
  }> = [
    {
      id: '1',
      title: 'Kibeho’s New Library',
      content: 'A teacher in Kibeho shares how Bindi’s books transformed her classroom.',
      image: '/images/classroom.jpg',
      quote: 'These books brought joy to my students.',
      community: 'Kibeho',
    },
    {
      id: '2',
      title: 'Musanze Student’s Journey',
      content: 'A student discovers a love for reading with Bindi’s donated books.',
      image: '/images/hero.jpg',
      quote: 'I read my first book thanks to Bindi!',
      community: 'Musanze',
    },
  ];

  const [filter, setFilter] = useState<'All' | 'Musanze' | 'Kibeho'>('All');
  const filteredStories = filter === 'All' ? stories : stories.filter(story => story.community === filter);

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
            Our Impact: Transforming Lives
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Your donations are changing education in Musanze and Kibeho.
          </p>
        </motion.section>

        {/* Impact Dashboard */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
            Impact Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <ProgressBar
                value={progress.booksCollected}
                max={1000}
                label={`${progress.booksCollected}/1000 Books`}
              />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold font-poppins text-green-600">{progress.schoolsServed}</p>
              <p className="text-gray-600 font-poppins">Schools Served</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold font-poppins text-green-600">{progress.childrenReached}+</p>
              <p className="text-gray-600 font-poppins">Children Reached</p>
            </div>
          </div>
        </motion.section>

        {/* Stories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold font-poppins text-gray-800">
              Impact Stories
            </h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'All' | 'Musanze' | 'Kibeho')}
              className="p-2 border rounded-md font-poppins text-gray-600"
            >
              <option value="All">All Communities</option>
              <option value="Musanze">Musanze</option>
              <option value="Kibeho">Kibeho</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStories.map(story => (
              <ImpactStory key={story.id} {...story} />
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
          <Button variant="primary" size="lg" href="/donate">
            Keep the Impact Going
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default Impact;