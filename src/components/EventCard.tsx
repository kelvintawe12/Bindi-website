import React from 'react';
import { Event } from '../types';
import { Button } from './common/Button';
import { Calendar } from 'lucide-react';

export const EventCard: React.FC<Event> = ({ title, date, time, location, description }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-green-500 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Calendar className="h-6 w-6 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold font-poppins text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 font-poppins mb-2">
        <strong>Date:</strong> {date}
      </p>
      <p className="text-gray-600 font-poppins mb-2">
        <strong>Time:</strong> {time}
      </p>
      <p className="text-gray-600 font-poppins mb-2">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-gray-600 font-poppins mb-4">{description}</p>
      <Button variant="primary" size="sm">
        RSVP
      </Button>
    </article>
  );
};