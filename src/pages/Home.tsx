import React, { useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/common/Button';
import { BookOpen, School, Target, ArrowRight, ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Mock data for progress and stories
const progress = { booksCollected: 750, goal: 1000, childrenReached: 400, childrenGoal: 500 };
const stories = [
  {
    id: '1',
    title: 'A Kibeho Student’s Love for Reading',
    content:
      'In Kibeho, Bindi’s book donations have transformed classrooms, giving students access to vibrant stories that inspire creativity and learning. Teachers report increased engagement and a newfound love for reading among their students.',
    image: 'https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg',
    quote: 'These books opened a new world for my students.',
    author: 'Marie, Kibeho Teacher',
  },
  {
    id: '2',
    title: 'Musanze’s Library Revival',
    content:
      'Bindi’s efforts in Musanze have revitalized a local school library, providing over 200 books to children who previously had limited access to reading materials. This initiative is fostering a culture of literacy in the community.',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
    quote: 'Our library is now a place of joy and discovery.',
    author: 'Jean, Musanze Librarian',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Home: React.FC = () => {
  // Stats section
  const statsRef = React.useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });
  const stats = useMemo(
    () => [
      {
        icon: BookOpen,
        title: '38% Poverty Rate',
        description:
          'Nearly 38% of Rwandans live below the poverty line, limiting access to educational resources (UNICEF, 2022). Bindi provides free books to bridge this gap.',
      },
      {
        icon: School,
        title: '63% Literacy in Musanze',
        description:
          'Musanze’s literacy rate for ages 6–15 is below Rwanda’s national average of 71% (2022 report). Our programs target this challenge with book distributions.',
      },
      {
        icon: Target,
        title: 'SDG 4: Quality Education',
        description:
          'Bindi supports Sustainable Development Goal 4, promoting inclusive education by 2030 through literacy initiatives in Rwanda’s underserved regions.',
      },
    ],
    []
  );

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Helmet>
        <title>Bindi Literacy Initiative | Home</title>
        <meta
          name="description"
          content="Join Bindi Literacy Initiative to spark literacy in Rwanda by donating books and volunteering for underserved schools in Musanze and Kibeho."
        />
        <link rel="preload" href={stories[0].image} as="image" />
      </Helmet>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative bg-green-700 text-white py-24"
          role="region"
          aria-label="Hero section"
          aria-describedby="hero-description"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg"
              alt="Children reading in a classroom"
              className="w-full h-full object-cover opacity-30"
              loading="eager"
              onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl text-center">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins mb-6"
            >
              Sparking Literacy in Rwanda’s Future
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-poppins text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
              id="hero-description"
            >
              Help Bindi collect 1000 books to empower children in Musanze and Kibeho with the gift of reading.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-4 flex-wrap mb-10"
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
                href="/volunteer"
                variant="outline"
                size="lg"
                ariaLabel="Join as a volunteer with Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Volunteer Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                ariaLabel="Learn more about Bindi’s mission"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-xl font-poppins text-white"
            >
              {reduceMotion ? (
                <span>{progress.booksCollected}/{progress.goal} Books Collected</span>
              ) : (
                <CountUp
                  start={0}
                  end={progress.booksCollected}
                  duration={2.5}
                  suffix={`/${progress.goal} Books Collected`}
                />
              )}
            </motion.div>
            <motion.a
              href="#mission"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-0 right-0 mx-auto text-white hover:text-gray-200 transition-colors"
              aria-label="Scroll to Mission section"
            >
              <ArrowDown className="h-8 w-8 animate-bounce" />
            </motion.a>
          </div>
        </section>

        {/* Mission Snapshot */}
        <motion.section
          id="mission"
          ref={statsRef}
          initial="hidden"
          animate={isStatsInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="py-24 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl"
          aria-describedby="mission-description"
        >
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl font-extrabold font-poppins text-gray-800 text-center mb-12"
          >
            Our Mission at a Glance
          </motion.h2>
          <p className="hidden" id="mission-description">
            Key challenges and goals driving Bindi’s literacy initiatives in Rwanda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                animate={isStatsInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                aria-label={`${stat.title}`}
              >
                <stat.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-2">{stat.title}</h3>
                <p className="text-gray-600 font-poppins text-lg leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/about"
              className="text-gray-800 font-poppins text-lg underline hover:text-green-600 transition-colors"
              aria-label="Learn more about Bindi’s mission"
            >
              Learn More
            </a>
          </motion.div>
        </motion.section>

        {/* Progress Tracker */}
        <motion.section
          id="progress"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 bg-white"
          aria-describedby="progress-description"
        >
          <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl text-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-3xl sm:text-4xl font-extrabold font-poppins text-gray-800 mb-8"
            >
              Our Progress
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto mb-12"
              id="progress-description"
            >
              We’re on a mission to collect 1000 books and reach 500 children in Rwanda’s underserved schools.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-poppins text-gray-600">
                    {reduceMotion ? (
                      `${progress.booksCollected}/${progress.goal}`
                    ) : (
                      <CountUp start={0} end={progress.booksCollected} duration={2.5} suffix={`/${progress.goal}`} />
                    )}{' '}
                    Books Collected
                  </span>
                  <span className="text-lg font-poppins text-green-600">
                    {Math.round((progress.booksCollected / progress.goal) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${(progress.booksCollected / progress.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-poppins text-gray-600">
                    {reduceMotion ? (
                      `${progress.childrenReached}/${progress.childrenGoal}`
                    ) : (
                      <CountUp
                        start={0}
                        end={progress.childrenReached}
                        duration={2.5}
                        suffix={`/${progress.childrenGoal}`}
                      />
                    )}{' '}
                    Children Reached
                  </span>
                  <span className="text-lg font-poppins text-green-600">
                    {Math.round((progress.childrenReached / progress.childrenGoal) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${(progress.childrenReached / progress.childrenGoal) * 100}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Button
                href="/donate"
                variant="primary"
                size="lg"
                ariaLabel="Donate books to help Bindi reach its goals"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Donate Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Stories */}
        <motion.section
          id="stories"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl"
          aria-describedby="stories-description"
        >
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl sm:text-4xl font-extrabold font-poppins text-gray-800 text-center mb-12"
          >
            Stories of Impact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="text-lg font-poppins text-gray-600 text-center max-w-2xl mx-auto mb-12"
            id="stories-description"
          >
            Discover how Bindi’s efforts are transforming lives in Rwanda’s schools and communities.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-3">{story.title}</h3>
                  <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-4">{story.content}</p>
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 font-poppins text-base">
                    “{story.quote}” <cite className="block mt-2 text-gray-800 font-semibold">— {story.author}</cite>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              href="/stories"
              variant="primary"
              size="lg"
              ariaLabel="Explore more stories from Bindi"
              className="cursor-pointer min-w-[140px] max-w-[200px]"
            >
              Explore More Stories
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.section>

        {/* Get Involved */}
        <motion.section
          id="get-involved"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 bg-green-700 text-white text-center"
          aria-describedby="get-involved-description"
        >
          <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-3xl sm:text-4xl font-extrabold font-poppins mb-8"
            >
              Join the Literacy Movement
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-200 max-w-2xl mx-auto mb-12"
              id="get-involved-description"
            >
              Your support can transform lives. Donate books, volunteer, or learn more about our mission today.
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
                variant="primary"
                size="lg"
                ariaLabel="Donate books to Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Donate Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/volunteer"
                variant="outline"
                size="lg"
                ariaLabel="Volunteer with Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Volunteer
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <a
                href="/about"
                className="text-white font-poppins text-lg underline hover:text-gray-200 transition-colors"
                aria-label="Learn more about Bindi’s mission"
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

export default Home;