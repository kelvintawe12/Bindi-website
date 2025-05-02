import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProgressBar } from '../components/common/ProgressBar';
import { Button } from '../components/common/Button';

const Impact: React.FC = () => {
  // Mock data for progress
  const progress = { booksCollected: 850, schoolsServed: 3, childrenReached: 400 };

  // Mock data for impact stories
  const stories: Array<{
    id: string;
    title: string;
    content: string;
    image: string;
    quote: string;
    community: 'Kibeho' | 'Musanze';
    details: {
      fullStory: string;
      impact: string[];
      testimonial: { quote: string; author: string };
    };
  }> = [
    {
      id: '1',
      title: 'Kibeho’s New Library',
      content: 'A teacher in Kibeho shares how Bindi’s books transformed her classroom.',
      image:
        'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'These books brought joy to my students.',
      community: 'Kibeho',
      details: {
        fullStory:
          'In Kibeho, a small rural community, Bindi’s book donation program established a vibrant library in the local primary school. Over 500 books were donated, ranging from storybooks to educational texts, creating a hub for learning. Teachers like Sarah have integrated these resources into daily lessons, sparking curiosity among students.',
        impact: [
          'Established a library with 500+ books.',
          'Increased student reading time by 40%.',
          'Trained 10 teachers in literacy-focused teaching methods.',
        ],
        testimonial: {
          quote:
            'The library has transformed our school. Students who once struggled with reading now eagerly borrow books!',
          author: 'Sarah, Teacher',
        },
      },
    },
    {
      id: '2',
      title: 'Musanze Student’s Journey',
      content: 'A student discovers a love for reading with Bindi’s donated books.',
      image:
        'https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'I read my first book thanks to Bindi!',
      community: 'Musanze',
      details: {
        fullStory:
          'In Musanze, Bindi’s donations reached a secondary school where 15-year-old Emmanuel discovered his passion for reading. The donated books, including novels and science texts, opened new worlds for him. Emmanuel now leads a reading club, inspiring his peers to explore literature.',
        impact: [
          'Donated 300 books to Musanze schools.',
          'Created 5 student-led reading clubs.',
          'Improved literacy rates by 20% in participating classes.',
        ],
        testimonial: {
          quote:
            'Reading changed my life. I want to be a writer someday, thanks to Bindi’s books.',
          author: 'Emmanuel, Student',
        },
      },
    },
  ];

  // State for filter and modal
  const [filter, setFilter] = useState<'All' | 'Musanze' | 'Kibeho'>('All');
  const [selectedStory, setSelectedStory] = useState<null | typeof stories[0]>(null);

  // Filter stories based on selected community
  const filteredStories = filter === 'All' ? stories : stories.filter(story => story.community === filter);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedStory(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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
            "url('https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold font-sans mb-4">
            Transforming Lives Through Literacy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-sans max-w-3xl mx-auto mb-6 sm:mb-8">
            Your support is changing education in Musanze and Kibeho.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/donate"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-colors"
          >
            Make an Impact
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
            Our Impact
          </h2>
          <p className="text-lg sm:text-xl font-sans text-gray-600 max-w-3xl mx-auto">
            See how your donations are empowering communities through education.
          </p>
        </motion.section>

        {/* Impact Dashboard */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-gray-900 mb-6 sm:mb-8 text-center">
            Impact Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md text-center">
              <ProgressBar
                value={progress.booksCollected}
                max={1000}
                label={`${progress.booksCollected}/1000 Books`}
              />
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl font-bold font-sans text-green-600">{progress.schoolsServed}</p>
              <p className="text-gray-600 font-sans text-sm sm:text-base">Schools Served</p>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl font-bold font-sans text-green-600">{progress.childrenReached}+</p>
              <p className="text-gray-600 font-sans text-sm sm:text-base">Children Reached</p>
            </div>
          </div>
        </motion.section>

        {/* Impact Stories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-gray-900 mb-4 sm:mb-0">
              Impact Stories
            </h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'All' | 'Musanze' | 'Kibeho')}
              className="p-2 border rounded-md font-sans text-gray-600 text-sm“Whoops, something broke. Talk to me later?” sm:text-base"
            >
              <option value="All">All Communities</option>
              <option value="Musanze">Musanze</option>
              <option value="Kibeho">Kibeho</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredStories.map(story => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-gray-600 mb-2 line-clamp-3">
                    {story.content}
                  </p>
                  <p className="text-sm italic font-sans text-gray-500 mb-4">
                    "{story.quote}"
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedStory(story)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 sm:py-12 rounded-lg shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold font-sans mb-4">
            Keep the Impact Going
          </h3>
          <p className="text-base sm:text-lg font-sans mb-6 max-w-xl mx-auto">
            Your support can transform more lives through literacy.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/donate"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-colors"
          >
            Donate Now
          </Button>
        </motion.section>
      </div>

      {/* Modal for Impact Story Details */}
      {selectedStory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0 overflow-y-auto"
          onClick={() => setSelectedStory(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-4 p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedStory.image}
              alt={selectedStory.title}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-900 mb-4">
              {selectedStory.title}
            </h3>
            <p className="text-sm font-sans text-gray-500 mb-4">
              Community: {selectedStory.community}
            </p>
            <p className="text-sm sm:text-base font-sans text-gray-600 mb-6">
              {selectedStory.details.fullStory}
            </p>
            <h4 className="text-base sm:text-lg font-semibold font-sans text-gray-900 mb-2">
              Impact
            </h4>
            <ul className="list-disc pl-5 mb-6">
              {selectedStory.details.impact.map((item, index) => (
                <li key={index} className="text-sm sm:text-base font-sans text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="text-base sm:text-lg font-semibold font-sans text-gray-900 mb-2">
              Testimonial
            </h4>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-sm sm:text-base font-sans text-gray-600 mb-6">
              "{selectedStory.details.testimonial.quote}"
              <footer className="mt-2 text-xs sm:text-sm text-gray-500">
                — {selectedStory.details.testimonial.author}
              </footer>
            </blockquote>
            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                href="/donate"
                className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
              >
                Support Our Mission
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Impact;