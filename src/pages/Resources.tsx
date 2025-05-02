import React, { useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import  ResourceCard  from '../components/ResourceCard';
import { Button } from '../components/common/Button';
import { Search, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Resource } from '../types';

// Mock data aligned with ResourceCard
const resources: Resource[] = [
  {
    id: '1',
    title: 'How to Run a Reading Club',
    description: 'A guide for teachers and parents to foster a love for reading in Rwanda’s classrooms.',
    category: 'Guides',
    link: '/resources/reading-club.pdf',
    image: 'https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg',
    type: 'Guide',
  },
  {
    id: '2',
    title: 'Storytelling Activities',
    description: 'Printable worksheets to engage young readers with creative storytelling.',
    category: 'Activities',
    link: '/resources/storytelling.pdf',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    type: 'Worksheet',
  },
  {
    id: '3',
    title: 'Literacy Tips for Parents',
    description: 'Strategies to support children’s reading at home, tailored for Rwanda’s families.',
    category: 'Tips',
    link: '/resources/literacy-tips.pdf',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
    type: 'PDF',
  },
  {
    id: '4',
    title: 'Phonics Worksheet',
    description: 'A fun phonics worksheet to help young learners practice letter sounds.',
    category: 'Worksheets',
    link: '/resources/phonics.pdf',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
    type: 'Worksheet',
  },
  {
    id: '5',
    title: 'Classroom Template',
    description: 'A customizable template for organizing literacy workshops in schools.',
    category: 'Templates',
    link: '/resources/classroom-template.pdf',
    image: 'https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg',
    type: 'PDF',
  },
  {
    id: '6',
    title: 'Reading Workshop Video',
    description: 'A video guide demonstrating interactive reading techniques for teachers.',
    category: 'Guides',
    link: '/resources/reading-workshop.mp4',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    type: 'Video',
  },
];

// Progress data
const progress = { booksCollected: 750, goal: 1000 };

const Resources: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Guides' | 'Activities' | 'Worksheets' | 'Templates' | 'Tips'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 6;

  const resourcesRef = React.useRef(null);
  const isResourcesInView = useInView(resourcesRef, { once: true });

  // Filter and search resources
  const filteredResources = useMemo(() => {
    let result = resources;
    if (filter !== 'All') {
      result = result.filter((resource) => resource.category === filter);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
      );
    }
    return result;
  }, [filter, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  );

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 },
    }),
  };

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Helmet>
        <title>Bindi Literacy Initiative | Resources</title>
        <meta
          name="description"
          content="Explore educational resources to support literacy and learning for Rwanda’s children."
        />
      </Helmet>
      <main className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
          {/* Hero Section with Pexels Background */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative text-center mb-16 py-24 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg')`,
            }}
            role="region"
            aria-label="Resources hero section"
            aria-describedby="hero-description"
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10">
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-extrabold font-poppins text-white mb-6"
              >
                Tools for Literacy
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl font-poppins text-gray-200 max-w-3xl mx-auto leading-relaxed"
                id="hero-description"
              >
                Discover resources to empower Rwanda’s children through literacy, supporting our goal of collecting 1000 books.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                {reduceMotion ? (
                  <span className="text-xl font-poppins text-white">
                    {progress.booksCollected}/{progress.goal} Books Collected
                  </span>
                ) : (
                  <CountUp
                    start={0}
                    end={progress.booksCollected}
                    duration={2.5}
                    suffix={`/${progress.goal} Books Collected`}
                    className="text-xl font-poppins text-white"
                  />
                )}
              </motion.div>
            </div>
          </motion.section>

          {/* Resources */}
          <motion.section
            ref={resourcesRef}
            initial="hidden"
            animate={isResourcesInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="resources-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              Our Resources
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="resources-description"
            >
              Access guides, worksheets, and activities designed to foster reading and learning in Rwanda’s schools and homes.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-2">
                {['All', 'Guides', 'Activities', 'Worksheets', 'Templates', 'Tips'].map((category) => (
                  <Button
                    key={category}
                    variant={filter === category ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setFilter(category as any);
                      setCurrentPage(1);
                    }}
                    ariaLabel={`Filter resources by ${category}`}
                    className="min-w-[100px]"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full p-3 pr-10 border border-gray-200 rounded-lg font-poppins text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-label="Search resources by title or description"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
              </div>
            </div>
            {paginatedResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isResourcesInView ? 'visible' : 'hidden'}
                    custom={index}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-lg font-poppins text-gray-600 text-center">
                No resources found. Try adjusting your search or filter.
              </p>
            )}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    ariaLabel={`Go to page ${page}`}
                    className="min-w-[40px]"
                  >
                    {page}
                  </Button>
                ))}
              </div>
            )}
          </motion.section>

          {/* Donation CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="py-16 bg-green-700 text-white text-center"
            aria-describedby="donation-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins mb-6"
            >
              Support Our Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-200 max-w-2xl mx-auto mb-8"
              id="donation-description"
            >
              Help us reach our goal of 1000 books for Rwanda’s children by donating books today.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-4 flex-wrap"
            >
              <Button
                href="/donate"
                variant="primary"
                size="lg"
                ariaLabel="Donate books to Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Donate Books
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                ariaLabel="Share a resource with Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Share a Resource
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default Resources;