import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImpactStory } from '../components/ImpactStory';
import { Button } from '../components/common/Button';

const Stories: React.FC = () => {
  // Mock data
  type StoryType = {
    id: string;
    title: string;
    content: string;
    image: string;
    quote: string;
    type: 'Beneficiary' | 'Donor';
    community: 'Kibeho' | 'Musanze';
  };

const stories: StoryType[] = [
    {
        id: '1',
        title: 'Kibeho’s New Library',
        content: 'A teacher shares how Bindi’s books transformed her classroom into a vibrant learning space.',
        image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
        quote: 'These books brought joy to my students.',
        type: 'Beneficiary',
        community: 'Kibeho',
    },
    {
        id: '2',
        title: 'A Donor’s Journey',
        content: 'An ALU student reflects on donating books and joining the literacy movement.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
        quote: 'Donating books felt like giving hope.',
        type: 'Donor',
        community: 'Musanze',
    },
];

  const [filter, setFilter] = useState<'All' | 'Beneficiary' | 'Donor' | 'Musanze' | 'Kibeho'>('All');
  const filteredStories = filter === 'All'
    ? stories
    : filter === 'Beneficiary' || filter === 'Donor'
    ? stories.filter(story => story.type === filter)
    : stories.filter(story => story.community === filter);

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
            Voices of Impact
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Hear from the children, teachers, and donors making Bindi’s mission possible.
          </p>
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
              Our Stories
            </h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'All' | 'Beneficiary' | 'Donor' | 'Musanze' | 'Kibeho')}
              className="p-2 border rounded-md font-poppins text-gray-600"
            >
              <option value="All">All Stories</option>
              <option value="Beneficiary">Beneficiaries</option>
              <option value="Donor">Donors</option>
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

        {/* Video Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Mock placeholder
                title="Testimonial 1"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Mock placeholder
                title="Testimonial 2"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button variant="primary" size="lg" href="/contact" className="bg-green-700 text-white hover:bg-green-800">
            Share Your Story
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default Stories;