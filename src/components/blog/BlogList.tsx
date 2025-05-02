import React, { useState } from 'react';
import { BlogCard } from './BlogCard';
import { Button } from '../common/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const CATEGORIES = ['All', 'Education', 'Social Impact', 'Literacy', 'Community Engagement'];

export const BlogList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Mock data - would typically come from an API
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Bindi Literacy Initiative: Transforming Education in Rwanda',
      excerpt: 'Bindi’s mission to collect and redistribute 1000 books to underserved schools in Musanze and Kibeho is empowering Rwanda’s youth through literacy.',
      category: 'Social Impact',
      author: 'Marie Uwase',
      date: '2025-02-01',
      image: 'https://images.unsplash.com/photo-1503676260728-1f56cf25a386?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      slug: 'bindi-literacy-initiative-rwanda'
    },
    {
      id: '2',
      title: 'Addressing Literacy Challenges in Rural Rwanda',
      excerpt: 'Exploring how poverty and lack of educational materials impact literacy rates in Musanze and Kibeho, and how Bindi is making a difference.',
      category: 'Education',
      author: 'Jean Bosco',
      date: '2025-02-10',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      slug: 'literacy-challenges-rural-rwanda'
    },
    {
      id: '3',
      title: 'Community Power: ALU Students Drive Book Collection',
      excerpt: 'Students at ALU in Kigali are leading book drives to support Bindi’s goal of redistributing 1000 books to under-resourced schools.',
      category: 'Community Engagement',
      author: 'Aisha Uwimana',
      date: '2025-02-15',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      slug: 'alu-students-book-collection'
    }
  ];

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(post => post.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Bindi Initiative Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover stories, updates, and insights about Bindi’s mission to enhance literacy and education in Rwanda’s underserved communities.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};