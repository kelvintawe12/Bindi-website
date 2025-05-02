import React, { useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/common/Button';
import { BookOpen, MapPin, ArrowRight, ArrowDown } from 'lucide-react';
import Head from 'next/head';

// Hero image (Pexels)
const heroImage = {
  url: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
  alt: 'Children reading books in a classroom',
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About: React.FC = () => {
  // Stats section
  const statsRef = React.useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });
  const stats = useMemo(
    () => [
      { value: 850, label: 'Books Collected', suffix: '' },
      { value: 400, label: 'Children Reached', suffix: '+' },
      { value: 3, label: 'Schools Served', suffix: '' },
    ],
    []
  );

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Head>
        <title>Bindi Literacy Initiative | About</title>
        <meta name="description" content="Discover Bindi’s journey from Cameroon to Rwanda, empowering youth through literacy." />
        <link rel="preload" href={heroImage.url} as="image" />
      </Head>
      <main className="bg-white">
        {/* Hero Section */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center bg-navy-800 text-white overflow-hidden"
          role="region"
          aria-label="Hero section"
          aria-describedby="hero-description"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage.url}
              alt={heroImage.alt}
              className="w-full h-full object-cover rounded-xl"
              loading="eager"
              onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
            />
            <div className="absolute inset-0 bg-navy-800/50"></div>
          </div>
          <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins mb-6 text-white relative after:content-[''] after:block after:w-24 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-4"
            >
              Empowering Futures Through Literacy
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-poppins text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed"
              id="hero-description"
            >
              Bindi Literacy Initiative transforms lives by bringing books and education to children in Cameroon and Rwanda.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-4 flex-wrap"
            >
              <Button
                href="/donate"
                variant="yellow"
                size="md"
                ariaLabel="Donate books to Bindi"
                className="hover:scale-105 min-w-[140px] max-w-[200px]"
              >
                Donate Books
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/volunteer"
                variant="red"
                size="md"
                ariaLabel="Volunteer with Bindi"
                className="hover:scale-105 min-w-[140px] max-w-[200px]"
              >
                Volunteer Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="#impact"
                variant="white"
                size="md"
                ariaLabel="Learn more about Bindi’s mission"
                className="hover:scale-105 min-w-[140px] max-w-[200px]"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.a
              href="#impact"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-0 right-0 mx-auto text-white hover:text-yellow-400 transition-colors"
              aria-label="Scroll to Impact section"
            >
              <ArrowDown className="h-8 w-8 animate-bounce" />
            </motion.a>
          </div>
        </section>

        {/* Impact Section */}
        <motion.section
          id="impact"
          ref={statsRef}
          initial="hidden"
          animate={isStatsInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="py-24 bg-yellow-100"
          aria-describedby="impact-description"
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl font-extrabold font-poppins text-navy-800 text-center mb-12"
            >
              Our Impact in Numbers
            </motion.h2>
            <p className="hidden" id="impact-description">
              Statistics showcasing Bindi’s contributions to literacy and education.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  animate={isStatsInView ? 'visible' : 'hidden'}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white border border-yellow-400 rounded-xl p-8 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                  aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}
                >
                  {isStatsInView && !reduceMotion ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      className="text-5xl font-bold font-poppins text-red-500"
                    />
                  ) : (
                    <span className="text-5xl font-bold font-poppins text-red-500">
                      {stat.value}{stat.suffix}
                    </span>
                  )}
                  <p className="text-gray-600 font-poppins text-lg mt-3">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          id="story"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 bg-white"
          aria-describedby="story-description"
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-3xl sm:text-4xl font-extrabold font-poppins text-navy-800 text-center mb-16"
            >
              Our Story
            </motion.h2>
            <p className="hidden" id="story-description">
              The journey of Bindi Literacy Initiative from Cameroon to Rwanda.
            </p>

            {/* Cameroon Subsection */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="flex items-center mb-6">
                  <BookOpen className="h-10 w-10 text-red-500 mr-4 hover:animate-spin" />
                  <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-navy-800">
                    Roots in Cameroon
                  </h3>
                </div>
                <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-6 max-w-prose">
                  Bindi started in Cameroon, crafting culturally relevant activity and coloring books that ignited creativity and learning among children. This foundation paved the way for our broader mission.
                </p>
                <a
                  href="/stories"
                  className="text-navy-800 font-poppins text-lg underline hover:text-yellow-400 transition-colors"
                  aria-label="Read stories from Bindi’s journey in Cameroon"
                >
                  Learn More
                </a>
              </motion.div>
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="lg:w-1/2"
              >
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Cameroon classroom with children learning"
                  className="w-full max-w-full rounded-xl border border-yellow-400 object-cover shadow-md hover:scale-102 transition-all"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
                />
              </motion.div>
            </div>

            {/* Rwanda Subsection */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="h-10 w-10 text-red-500 mr-4 hover:animate-spin" />
                  <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-navy-800">
                    A New Chapter in Rwanda
                  </h3>
                </div>
                <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-6 max-w-prose">
                  In Rwanda, where 38% live below the poverty line and literacy rates lag in areas like Musanze (63%), Bindi is distributing 1000 books to underserved schools, reaching over 500 children.
                </p>
                <div className="flex flex-row gap-4 flex-wrap">
                  <Button
                    href="/impact"
                    variant="red"
                    size="sm"
                    ariaLabel="See Bindi’s impact in Rwanda"
                    className="hover:scale-105 min-w-[120px] max-w-[180px]"
                  >
                    Our Impact
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <a
                    href="/stories"
                    className="text-navy-800 font-poppins text-lg underline hover:text-yellow-400 transition-colors"
                    aria-label="Learn more about Bindi’s work in Rwanda"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="lg:w-1/2"
              >
                <img
                  src="https://images.pexels.com/photos/614494/pexels-photo-614494.jpeg"
                  alt="Rwandan landscape with community"
                  className="w-full max-w-full rounded-xl border border-yellow-400 object-cover shadow-md hover:scale-102 transition-all"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Get Involved Section */}
        <motion.section
          id="get-involved"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 bg-red-500 text-white text-center"
          aria-describedby="get-involved-description"
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-3xl sm:text-4xl font-extrabold font-poppins mb-6"
            >
              Join the Literacy Movement
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-100 max-w-2xl mx-auto mb-8"
              id="get-involved-description"
            >
              Your support can change lives. Donate books, volunteer, or share our mission today.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-4 flex-wrap"
            >
              <Button
                href="/donate"
                variant="yellow"
                size="md"
                ariaLabel="Donate books to Bindi"
                className="hover:scale-105 min-w-[140px] max-w-[200px]"
              >
                Donate Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/volunteer"
                variant="white"
                size="md"
                ariaLabel="Volunteer with Bindi"
                className="hover:scale-105 min-w-[140px] max-w-[200px]"
              >
                Volunteer
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <a
                href="/stories"
                className="text-white font-poppins text-lg underline hover:text-yellow-400 transition-colors"
                aria-label="Explore Bindi’s stories"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default About;