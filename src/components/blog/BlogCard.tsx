import React, { lazy } from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  author,
  date,
  image,
  slug
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-green-500 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img src={image} alt={title} className="object-cover w-full h-64" loading="lazy" />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <span className="bg-green-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <a href={`/blog/${slug}`} className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
            Read More
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};