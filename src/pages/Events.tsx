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
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4">
            Get Involved in Our Events
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Join our book drives and workshops to support literacy in Rwanda.
          </p>
        </motion.section>

        {/* Event Calendar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
            Event Calendar
          </h2>
          <div className="max-w-md mx-auto">
            <Calendar
              value={new Date()}
              tileContent={({ date }) =>
                events.some(event => event.date === date.toISOString().split('T')[0]) ? (
                  <span className="text-green-600 font-bold">•</span>
                ) : null
              }
            />
          </div>
        </motion.section>

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </motion.section>

        {/* Past Events */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/images/volunteers.jpg"
              alt="Past event"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/images/classroom.jpg"
              alt="Past event"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/images/hero.jpg"
              alt="Past event"
              className="w-full h-48 object-cover rounded-lg"
            />
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
            Donate at an Event
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default Events;