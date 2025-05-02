import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';
import { Button } from '../components/common/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Events: React.FC = () => {
  // Mock data for upcoming events
  const upcomingEvents = [
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

  // Mock data for past events with detailed information
  const pastEvents = [
    {
      id: 'p1',
      title: '2024 Summer Book Drive',
      date: '2024-07-20',
      location: 'Kigali Public Library',
      image:
        'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      shortDescription:
        'A community-driven book drive to collect books for rural schools.',
      details: {
        description:
          'The 2024 Summer Book Drive brought together over 300 volunteers and collected 2,500 books for rural schools across Rwanda. The event featured book sorting workshops, storytelling sessions for children, and a panel discussion on literacy challenges.',
        impact: [
          'Distributed 2,500 books to 10 rural schools.',
          'Engaged 300+ community members in literacy advocacy.',
          'Trained 50 teachers in interactive reading techniques.',
        ],
        testimonial: {
          quote:
            '"This event opened my eyes to the power of community in education. Seeing children excited about new books was unforgettable."',
          author: 'Amina, Volunteer',
        },
      },
    },
    {
      id: 'p2',
      title: '2024 Literacy Workshop',
      date: '2024-03-15',
      location: 'Gisenyi Community Center',
      image:
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      shortDescription:
        'A workshop empowering teachers with innovative literacy tools.',
      details: {
        description:
          'The 2024 Literacy Workshop trained 80 educators in modern literacy techniques, focusing on phonics and interactive storytelling. The event included hands-on sessions and provided teaching materials to participants.',
        impact: [
          'Trained 80 teachers from 20 schools.',
          'Distributed 500 literacy toolkits.',
          'Improved reading scores in participating schools by 15%.',
        ],
        testimonial: {
          quote:
            '"The workshop gave me new ways to engage my students. They now love reading!"',
          author: 'Jean, Primary School Teacher',
        },
      },
    },
    {
      id: 'p3',
      title: '2023 Winter Book Fair',
      date: '2023-12-10',
      location: 'Huye Cultural Center',
      image:
        'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      shortDescription:
        'A vibrant book fair promoting reading among youth.',
      details: {
        description:
          'The 2023 Winter Book Fair attracted 1,000 visitors and showcased local authors, book donations, and reading competitions. It was a celebration of literature and community spirit.',
        impact: [
          'Donated 1,200 books to local libraries.',
          'Inspired 400+ students to join reading clubs.',
          'Supported 10 local authors in publishing their work.',
        ],
        testimonial: {
          quote:
            '"The book fair was a magical experience for my students. They’re now avid readers!"',
          author: 'Grace, School Librarian',
        },
      },
    },
  ];

  // State for modal
  const [selectedEvent, setSelectedEvent] = useState<null | typeof pastEvents[0]>(null);

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
                const event = upcomingEvents.find(
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
            {upcomingEvents.map(event => (
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
          <h2 className="text-3xl font-bold font-sans text-gray-900 mb-8 text-center">
            Our Impactful Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold font-sans text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm font-sans text-gray-500 mb-2">
                    {event.date} | {event.location}
                  </p>
                  <p className="text-base font-sans text-gray-600 mb-4">
                    {event.shortDescription}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedEvent(event)}
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

      {/* Modal for Past Event Details */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg max-w-2xl w-full mx-4 p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
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
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold font-sans text-gray-900 mb-4">
              {selectedEvent.title}
            </h3>
            <p className="text-sm font-sans text-gray-500 mb-4">
              {selectedEvent.date} | {selectedEvent.location}
            </p>
            <p className="text-base font-sans text-gray-600 mb-6">
              {selectedEvent.details.description}
            </p>
            <h4 className="text-lg font-semibold font-sans text-gray-900 mb-2">
              Impact
            </h4>
            <ul className="list-disc pl-5 mb-6">
              {selectedEvent.details.impact.map((item, index) => (
                <li key={index} className="text-base font-sans text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold font-sans text-gray-900 mb-2">
              What People Say
            </h4>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-base font-sans text-gray-600 mb-6">
              "{selectedEvent.details.testimonial.quote}"
              <footer className="mt-2 text-sm text-gray-500">
                — {selectedEvent.details.testimonial.author}
              </footer>
            </blockquote>
            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                href="/donate"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Support Future Events
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Events;