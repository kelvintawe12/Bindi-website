import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';
import { Button } from '../components/common/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Events: React.FC = () => {
  // Mock data
  const events = [
    {
      id: '1',
      title: 'March Book Drive',
      date: '2025-03-10',
      time: '9 AM–3 PM',
      location: 'ALU Campus, Kigali',
      description: 'Join us to donate books and meet the Bindi team.',
    },
    {
      id: '2',
      title: 'Literacy Workshop',
      date: '2025-04-15',
      time: '10 AM–12 PM',
      location: 'Musanze School',
      description: 'Support teachers in promoting reading skills.',
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold font-sans mb-4">
            Empower Literacy Through Our Events
          </h1>
          <p className="text-xl lg:text-2xl font-sans max-w-3xl mx-auto mb-8">
            Join book drives and workshops to make a difference in Rwanda.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/donate"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-colors"
          >
            Get Involved
          </Button>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 lg:px-8 py-20">
        {/* Main Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold font-sans text-gray-900 mb-6 leading-tight">
            Join Our Mission
          </h2>
          <p className="text-xl font-sans text-gray-600 max-w-3xl mx-auto">
            Participate in our events to support literacy across Rwanda.
          </p>
        </motion.section>

        {/* Event Calendar */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold font-sans text-gray-900 mb-8 text-center">
            Event Calendar
          </h2>
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
            <Calendar
              value={new Date()}
              className="border-none font-sans"
              tileContent={({ date }) => {
                const event = events.find(
                  event => event.date === date.toISOString().split('T')[0]
                );
                return event ? (
                  <div className="relative">
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                ) : null;
              }}
            />
          </div>
        </motion.section>

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold font-sans text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map(event => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <EventCard
                  {...event}
                  className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg p-6"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Past Events */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold font-sans text-gray-900 mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={`Past event ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
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
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold font-sans mb-4">
            Make a Difference Today
          </h3>
          <p className="text-lg font-sans mb-6 max-w-xl mx-auto">
            Support our events by donating books or volunteering your time.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/donate"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-colors"
          >
            Donate at an Event
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default Events;