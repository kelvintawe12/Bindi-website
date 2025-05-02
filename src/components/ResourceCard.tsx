import React from 'react';
import { Resource } from '../types';
import { Button } from './common/Button';
import { Download } from 'lucide-react';

export const ResourceCard: React.FC<Resource> = ({ title, description, link, category }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-green-500 transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold font-poppins text-gray-800">{title}</h3>
        <span className="bg-green-100 text-green-600 text-xs font-poppins px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="text-gray-600 font-poppins mb-4">{description}</p>
      <Button variant="primary" size="sm" href={link}>
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    </article>
  );
};