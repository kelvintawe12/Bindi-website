import React, { useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { DonationForm } from '../components/DonationForm';
import { Button } from '../components/common/Button';
import { Calendar, MapPin, Quote, ArrowRight } from 'lucide-react';
import Head from 'next/head';

// Mock collection schedule
const schedule = [
  { date: '2025-03-10', time: '9 AM–3 PM', location: 'ALU Campus, Kigali', past: false },
  { date: '2025-04-15', time: '10 AM–4 PM', location: 'ALU Campus, Kigali', past: false },
  { date: '2025-05-20', time: '8 AM–2 PM', location: 'Kigali Public Library', past: false },
  { date: '2025-02-01', time: '9 AM–3 PM', location: 'ALU Campus, Kigali', past: true },
];

// Mock testimonials
const testimonials = [
  {
    quote: 'Donating books to Bindi was a rewarding experience. I know these books will inspire young readers in Rwanda!',
    author: 'Aisha M., Kigali',
  },
  {
    quote: 'The pickup process was seamless, and the team was so grateful. I’m proud to support Bindi’s mission.',
    author: 'James K., Teacher',
  },
];

// Progress data
const progress = { booksCollected: 750, goal: 1000 };

const Donate: React.FC = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);

  const howToRef = React.useRef(null);
  const scheduleRef = React.useRef(null);
  const formRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const isHowToInView = useInView(howToRef, { once: true });
  const isScheduleInView = useInView(scheduleRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });
  const isMapInView = useInView(mapRef, { once: true });

  // Filter schedule
  const filteredSchedule = useMemo(() => {
    return showPastEvents ? schedule : schedule.filter((event) => !event.past);
  }, [showPastEvents]);

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

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: { width: `${(progress.booksCollected / progress.goal) * 100}%`, transition: { duration: 2, ease: 'easeOut' } },
  };

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Head>
        <title>Bindi Literacy Initiative | Donate Books</title>
        <meta
          name="description"
          content="Donate gently used books to support literacy for Rwanda’s children and help us reach our 1000-book goal."
        />
        <meta name="keywords" content="donate books, Rwanda literacy, Bindi, children’s education" />
      </Head>
      <main className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
          {/* Header */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
            role="region"
            aria-label="Donate header"
            aria-describedby="header-description"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold font-poppins text-green-700 mb-6"
            >
              Donate Books, Ignite Minds
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-poppins text-gray-600 max-w-3xl mx-auto leading-relaxed"
              id="header-description"
            >
              Your gently used books can transform lives in Rwanda’s underserved communities. Help us collect the remaining
              250 books to reach our 1000-book goal.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <div className="text-xl font-poppins text-gray-800 mb-4">
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
              </div>
              <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-green-600 h-4 rounded-full"
                  variants={progressBarVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Donation Guidelines */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="guidelines-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              Donation Guidelines
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="guidelines-description"
            >
              We accept gently used books that inspire and educate Rwanda’s children. Your donations fuel our literacy mission.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Acceptable Books',
                  items: [
                    'Storybooks for ages 6–15',
                    'Educational textbooks (math, science, English)',
                    'Activity books (puzzles, coloring)',
                    'Books in English or Kinyarwanda',
                  ],
                },
                {
                  title: 'Book Condition',
                  items: [
                    'Gently used with no missing pages',
                    'No heavy wear or damage',
                    'Clean, free of writing or markings',
                    'No adult or sensitive content',
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-4">{section.title}</h3>
                  <ul className="list-disc pl-5 text-gray-600 font-poppins text-base">
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How to Donate */}
          <motion.section
            ref={howToRef}
            initial="hidden"
            animate={isHowToInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="howto-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              How to Donate
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="howto-description"
            >
              Follow these simple steps to contribute to our 1000-book goal and empower young readers.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '1. Gather Books',
                  description: 'Collect gently used storybooks, textbooks, or activity books suitable for ages 6–15.',
                },
                {
                  title: '2. Drop Off',
                  description: 'Visit our collection point at ALU Campus or other locations during scheduled drives.',
                },
                {
                  title: '3. Schedule Pickup',
                  description: 'For 50+ books, request a pickup through our donation form below.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-base font-poppins text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Collection Schedule */}
          <motion.section
            ref={scheduleRef}
            initial="hidden"
            animate={isScheduleInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="schedule-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              Collection Schedule
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="schedule-description"
            >
              Join us at our collection drives to drop off your books and meet the Bindi team.
            </motion.p>
            <div className="flex justify-end mb-4">
              <Button
                variant={showPastEvents ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setShowPastEvents(!showPastEvents)}
                ariaLabel={showPastEvents ? 'Show upcoming events only' : 'Show past events'}
                className="min-w-[140px]"
              >
                {showPastEvents ? 'Hide Past Events' : 'Show Past Events'}
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="p-4 text-left font-poppins text-base">Date</th>
                    <th className="p-4 text-left font-poppins text-base">Time</th>
                    <th className="p-4 text-left font-poppins text-base">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.map((event, index) => (
                    <motion.tr
                      key={index}
                      variants={cardVariants}
                      custom={index}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4 font-poppins text-gray-600">{event.date}</td>
                      <td className="p-4 font-poppins text-gray-600">{event.time}</td>
                      <td className="p-4 font-poppins text-gray-600">{event.location}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="testimonials-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              Donor Stories
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="testimonials-description"
            >
              Hear from donors who’ve made a difference with Bindi.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <Quote className="h-6 w-6 text-green-600 mb-3" />
                  <p className="text-base font-poppins text-gray-600 italic mb-4 leading-relaxed">{testimonial.quote}</p>
                  <p className="text-sm font-poppins text-gray-800 font-semibold">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Donation Form */}
          <motion.section
            ref={formRef}
            initial="hidden"
            animate={isFormInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="form-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              Donation Form
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="form-description"
            >
              Schedule a pickup for 50+ books or inquire about donation details.
            </motion.p>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
              <DonationForm />
            </div>
          </motion.section>

          {/* Collection Point */}
          <motion.section
            ref={mapRef}
            initial="hidden"
            animate={isMapInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="mb-16"
            aria-describedby="map-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins text-gray-800 mb-6"
            >
              Collection Point
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-600 max-w-2xl mb-8"
              id="map-description"
            >
              Drop off your books at ALU Campus in Kigali during our collection drives.
            </motion.p>
            <div className="relative w-full h-96 rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.508374073423!2d30.10410761475769!3d-1.9496939985871653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7f3c8b6b6b7%3A0x8e8c1e6f9b6f6e6c!2sAfrican%20Leadership%20University!5e0!3m2!1sen!2srw!4v1634567890123!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="ALU Campus Map"
              ></iframe>
              <img
                src="/images/map-alu.png"
                alt="ALU Campus Map"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'none' }} // Fallback hidden unless iframe fails
              />
            </div>
            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                href="/events"
                ariaLabel="See upcoming donation events"
                className="min-w-[140px]"
              >
                See Upcoming Events
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.section>

          {/* Volunteer CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="py-16 bg-green-700 text-white text-center"
            aria-describedby="volunteer-description"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold font-poppins mb-6"
            >
              Want to Do More?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-poppins text-gray-200 max-w-2xl mx-auto mb-8"
              id="volunteer-description"
            >
              Join our volunteer team to help collect, sort, and distribute books across Rwanda.
            </motion.p>
            <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
              <Button
                href="/volunteer"
                variant="primary"
                size="lg"
                ariaLabel="Volunteer with Bindi"
                className="cursor-pointer min-w-[140px] max-w-[200px]"
              >
                Become a Volunteer
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default Donate;