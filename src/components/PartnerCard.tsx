import React from 'react';
import { Partner } from '../types';
import { Button } from './common/Button';

export const PartnerCard: React.FC<Partner> = ({ name, description, logo, website }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-green-500 transition-all duration-300">
      <img src={logo} alt={name} className="h-16 mx-auto mb-4" />
      <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 font-poppins mb-4">{description}</p>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm">
          Visit Website
        </Button>
      </a>
    </article>
  );
};