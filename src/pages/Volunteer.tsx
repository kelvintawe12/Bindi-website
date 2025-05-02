import React, { useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { VolunteerForm } from '../components/VolunteerForm';
import { Button } from '../components/common/Button';
import { Users, BookOpen, Package, School, ArrowRight, ArrowDown } from 'lucide-react';
import Head from 'next/head';

// Mock data for progress and roles
const progress = { booksCollected: 750, goal: 1000 };
const roles = [
  {
    title: 'Sorting Books',
    description:
      'Organize donated books by age, condition, and subject to ensure they reach the right classrooms. Volunteers categorize and quality-check books, preparing them for distribution to schools in Musanze and Kibeho.',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
  },
  {
    title: 'Packaging Starter Kits',
    description:
      'Create engaging starter kits combining storybooks, activity books, and educational materials. This role involves assembling kits tailored for different age groups to spark creativity and learning.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  },
  {
    title: 'Literacy Workshops',
    description:
      'Assist teachers in Musanze and Kibeho with interactive workshops to promote reading skills. Volunteers help facilitate storytelling sessions and literacy activities for students.',
    image: 'https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg',
  },
  {
    title: 'Community Outreach',
    description:
      'Engage local communities to raise awareness about Bindi’s mission. This role includes organizing book drives, sharing success stories, and building partnerships with local organizations.',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
  },
];

// Hero image
const heroImage = {
  url: 'https://images.pexels.com/photos/614494/pexels-photo-614494.jpeg',
  alt: 'Volunteers organizing books for Bindi',
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Volunteer: React.FC = () => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  // Why Volunteer section
  const whyVolunteerRef = React.useRef(null);
  const isWhyVolunteerInView = useInView(whyVolunteerRef, { once: true });
  const whyVolunteer = useMemo(
    () => [
      {
        icon: Users,
        description:
          'Make a tangible impact on children’s education by providing access to books and literacy programs in Rwanda’s underserved communities.',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      },
      {
        icon: BookOpen,
        description:
          'Build skills in organization, teamwork, and community engagement while contributing to a meaningful cause.',
        image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
      },
      {
        icon: Package,
        description:
          'Network with African Leadership University (ALU) students, educators, and community leaders passionate about literacy and education.',
        image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      },
      {
        icon: School,
        description:
          'Be part of a global movement supporting Sustainable Development Goal 4: Quality Education, by fostering literacy in Rwanda.',
        image: 'https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg',
      },
    ],
    []
  );

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Head>
        <title>Bindi Literacy Initiative | Volunteer</title>
        <meta
          name="description"
          content="Volunteer with Bindi Literacy Initiative to bring books and literacy to children in Rwanda’s underserved schools."
        />
        <link rel="preload" href={heroImage.url} as="image" />
      </Head>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center bg-green-700 text-white overflow-hidden"
          role="region"
          aria-label="Volunteer hero section"
          aria-describedby="hero-description"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage.url}
              alt={heroImage.alt}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
              onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
            />
            <div className="absolute inset-0 bg-green-700/60"></div>
          </div>
          <div className="relative z-10 text-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins mb-6"
            >
              Be a Change Maker
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-poppins text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
              id="hero-description"
            >
              Join Bindi’s mission to empower Rwanda’s children through literacy by volunteering your time and skills.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-4 flex-wrap mb-10"
            >
              <Button
                href="#form"
                variant="primary"
                size="lg"
                ariaLabel="Sign up to volunteer with Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px] bg-green-600 hover:bg-green-700 text-white"
              >
                Volunteer Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/stories"
                variant="outline"
                size="lg"
                ariaLabel="See volunteer stories from Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Volunteer Stories
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
              href="#roles"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-0 right-0 mx-auto text-white hover:text-gray-200 transition-colors"
              aria-label="Scroll to Volunteer Roles section"
            >
              <ArrowDown className="h-8 w-8 animate-bounce" />
            </motion.a>
          </div>
        </section>

        {/* Volunteer Roles */}
        <motion.section
          id="roles"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl"
          aria-describedby="roles-description"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-extrabold font-poppins text-gray-800 mb-6"
          >
            Volunteer Roles
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
            id="roles-description"
          >
            Explore the diverse ways you can contribute to Bindi’s literacy mission in Rwanda.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                aria-label={`Volunteer role: ${role.title}`}
              >
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">{role.title}</h3>
                  <motion.p
                    initial={{ height: expandedRole === index ? 'auto' : 0 }}
                    animate={{ height: expandedRole === index ? 'auto' : 0 }}
                    className="text-gray-600 font-poppins text-base leading-relaxed overflow-hidden"
                  >
                    {role.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Volunteer */}
        <motion.section
          id="why-volunteer"
          ref={whyVolunteerRef}
          initial="hidden"
          animate={isWhyVolunteerInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="py-24 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl"
          aria-describedby="why-volunteer-description"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-extrabold font-poppins text-gray-800 mb-6"
          >
            Why Volunteer?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
            id="why-volunteer-description"
          >
            Discover the rewards of volunteering with Bindi and make a lasting difference.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVolunteer.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                animate={isWhyVolunteerInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <img
                  src={item.image}
                  alt="Volunteer benefit"
                  className="w-full h-32 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
                />
                <div className="p-6">
                  <item.icon className="h-8 w-8 text-green-600 mb-4" />
                  <p className="text-gray-600 font-poppins text-base leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/stories"
              className="text-gray-800 font-poppins text-lg underline hover:text-green-600 transition-colors"
              aria-label="Read volunteer stories from Bindi"
            >
              Learn More
            </a>
          </motion.div>
        </motion.section>

        {/* Volunteer Form */}
        <motion.section
          id="form"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="py-24 container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl"
          aria-describedby="form-description"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-extrabold font-poppins text-gray-800 mb-6"
          >
            Sign Up to Volunteer
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
            id="form-description"
          >
            Fill out the form below to join our volunteer team. We’ll reach out with next steps and role details.
          </motion.p>
          <VolunteerForm />
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-center lot-8"
          >
            <Button
              href="/stories"
              variant="primary"
              size="lg"
              ariaLabel="See volunteer stories from Bindi"
              className="cursor-pointer min-w-[140px] max-w-[200px]"
            >
              See Volunteer Stories
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
              className="text-2xl sm:text-3xl font-extrabold font-poppins mb-6"
            >
              More Ways to Support Bindi
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-200 max-w-2xl mx-auto mb-12"
              id="get-involved-description"
            >
              Can’t volunteer? You can still make a difference by donating books or learning more about our mission.
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
                Donate Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                href="/stories"
                variant="outline"
                size="lg"
                ariaLabel="Explore stories from Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Our Stories
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

export default Volunteer;