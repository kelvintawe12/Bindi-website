import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Resource } from '../types';

// Define props for ResourceCard based on Resource type
interface ResourceCardProps extends Resource {}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  link,
  image,
  type,
}) => {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  // Respect prefers-reduced-motion
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={reduceMotion ? undefined : 'hover'}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg"
      role="article"
      aria-labelledby={`resource-title-${title}`}
    >
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={`${title} resource`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block text-sm font-poppins text-green-700 bg-green-100 rounded-full px-3 py-1 mb-2">
          {category}
        </span>
        <h3
          id={`resource-title-${title}`}
          className="text-xl font-bold font-poppins text-gray-800 mb-2"
        >
          {title}
        </h3>
        <p className="text-gray-600 font-poppins text-base mb-4 flex-grow">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-poppins text-gray-500">{type}</span>
          <a
            href={link}
            download
            className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-lg font-poppins text-sm hover:bg-green-800 transition-colors"
            aria-label={`Download ${title} resource`}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;