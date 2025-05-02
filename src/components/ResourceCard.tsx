import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Resource } from '../types';
import { Button } from './common/Button';
import { Download, BookOpen, FileText, Activity, Layout } from 'lucide-react';

// Category icons mapping
const categoryIcons = {
  Worksheets: BookOpen,
  Guides: FileText,
  Activities: Activity,
  Templates: Layout,
  Tips: FileText, // Added Tips category icon, reusing FileText icon
};

// Animation variants
const cardVariants = {
  rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.03,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const ResourceCard: React.FC<Resource> = ({ title, description, link, category, image, type }) => {
  // Memoized category icon
  const CategoryIcon = useMemo(() => categoryIcons[category] || BookOpen, [category]);

  return (
    <motion.article
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-green-500 transition-all duration-300"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      role="article"
      aria-labelledby={`resource-title-${title}`}
      aria-describedby={`resource-desc-${title}`}
    >
      <motion.div
        className="mb-4"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={image}
          alt={`${title} resource thumbnail`}
          className="w-full h-32 object-cover rounded-lg"
          loading="lazy"
          onError={(e) => (e.currentTarget.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')}
        />
      </motion.div>
      <div className="flex justify-between items-start mb-3">
        <h3
          id={`resource-title-${title}`}
          className="text-xl font-extrabold font-poppins text-gray-800"
        >
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <CategoryIcon className="h-4 w-4 text-green-600" />
          <span className="bg-green-100 text-green-600 text-xs font-poppins px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <p
        id={`resource-desc-${title}`}
        className="text-lg font-poppins text-gray-600 mb-4 leading-relaxed"
      >
        {description}
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <Button
            variant="primary"
            size="sm"
            href={link}
            ariaLabel={`Download ${title} ${type.toLowerCase()} resource`}
            className="flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Download {type}
          </Button>
          <span className="text-sm font-poppins text-gray-600 italic">
            Supports Bindi’s literacy mission
          </span>
        </div>
        <a
          href="/donate"
          className="text-green-600 font-poppins text-sm underline hover:text-green-700 transition-colors"
          aria-label="Donate books to support Bindi’s 1000-book goal"
        >
          Donate books to help us reach 1000 books
        </a>
      </div>
    </motion.article>
  );
};