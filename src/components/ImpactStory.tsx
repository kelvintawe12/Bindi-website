import React from 'react';
import { ImpactStory as StoryType } from '../types';

export const ImpactStory: React.FC<StoryType> = ({ title, content, image, quote }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-green-500 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 font-poppins mb-4">{content}</p>
        <blockquote className="text-green-600 font-poppins italic border-l-4 border-green-600 pl-4">
          "{quote}"
        </blockquote>
      </div>
    </article>
  );
};