import React from 'react';
import { motion } from 'framer-motion';
import { DonationForm } from '../components/DonationForm';
import { Button } from '../components/common/Button';
import { Calendar } from 'lucide-react';

const Donate: React.FC = () => {
  // Mock collection schedule
  const schedule = [
    { date: '2025-03-10', time: '9 AM–3 PM', location: 'ALU Campus, Kigali' },
    { date: '2025-04-15', time: '10 AM–4 PM', location: 'ALU Campus, Kigali' },
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
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-green-700 mb-4">
            Donate Books, Ignite Minds
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            Your gently used books can transform lives in Rwanda’s underserved communities.
          </p>
        </motion.section>

        {/* How to Donate */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            How to Donate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                1. Gather Books
              </h3>
              <p className="text-gray-600 font-poppins">
                Collect gently used storybooks, textbooks, or activity books suitable for ages 6–15.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                2. Drop Off
              </h3>
              <p className="text-gray-600 font-poppins">
                Visit our collection point at ALU Campus during scheduled drives.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                3. Schedule Pickup
              </h3>
              <p className="text-gray-600 font-poppins">
                For 50+ books, request a pickup through our form.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Collection Schedule */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Collection Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="p-4 text-left font-poppins">Date</th>
                  <th className="p-4 text-left font-poppins">Time</th>
                  <th className="p-4 text-left font-poppins">Location</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((event, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-poppins text-gray-600">{event.date}</td>
                    <td className="p-4 font-poppins text-gray-600">{event.time}</td>
                    <td className="p-4 font-poppins text-gray-600">{event.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Donation Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Donation Form
          </h2>
          <DonationForm />
        </motion.section>

        {/* Map */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
            Collection Point
          </h2>
          <img
            src="/images/map-alu.png"
            alt="ALU Campus Map"
            className="w-full rounded-lg shadow-md"
          />
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" href="/events">
              See Upcoming Events
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Donate;