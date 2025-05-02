import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { ProgressBar } from '../components/common/ProgressBar';
import { ImpactStory } from '../components/ImpactStory';
import { BookOpen, School } from 'lucide-react';

const Home: React.FC = () => {
  // Mock data for progress and story
  const progress = { booksCollected: 750, goal: 1000, childrenReached: 400 };
  const featuredStory = {
    id: '1',
    title: 'A Kibeho Student’s Love for Reading',
    content: 'Thanks to Bindi’s books, students in Kibeho are discovering the joy of reading.',
    image: '/images/classroom.jpg',
    quote: 'These books opened a new world for my students.',
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
          >
            Sparking Literacy in Rwanda’s Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-poppins text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Help Bindi collect 1000 books for underserved schools in Musanze and Kibeho.
          </motion.p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg" href="/donate">
              Donate Books
            </Button>
            <Button variant="outline" size="lg" href="/volunteer">
              Join as a Volunteer
            </Button>
          </div>
        </div>
        <img
          src="/images/hero.jpg"
          alt="Children reading"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* Mission Snapshot */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold font-poppins text-gray-800 text-center mb-12">
          Our Mission at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <BookOpen className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold font-poppins text-gray-800">
              38% Poverty Rate
            </h3>
            <p className="text-gray-600 font-poppins">
              Nearly 38% of Rwandans live below the poverty line, limiting access to educational materials (UNICEF).
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <School className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold font-poppins text-gray-800">
              63% Literacy in Musanze
            </h3>
            <p className="text-gray-600 font-poppins">
              Musanze District’s literacy rate for ages 6–15 is below the national average (2022 report).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-8">
            Our Progress
          </h2>
          <ProgressBar
            value={progress.booksCollected}
            max={progress.goal}
            label={`${progress.booksCollected}/${progress.goal} Books Collected`}
          />
          <p className="text-xl font-poppins text-gray-600 mt-4">
            Reaching <span className="text-green-600">{progress.childrenReached}+</span> children
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold font-poppins text-gray-800 text-center mb-12">
          A Story of Impact
        </h2>
        <ImpactStory {...featuredStory} />
        <div className="text-center mt-8">
          <Button variant="primary" size="lg" href="/stories">
            Explore More Stories
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;