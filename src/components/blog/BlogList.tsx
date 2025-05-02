import React, { useState, memo } from 'react';
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
const CATEGORIES = ['All', 'Digital Marketing', 'Branding', 'PR', 'Social Media'];
export const BlogList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // Mock data - would typically come from an API
  const posts: BlogPost[] = [{
    id: '1',
    title: 'Digital Marketing Trends in Kenya 2025',
    excerpt: 'Discover the latest digital marketing trends shaping the Kenyan market in 2025.',
    category: 'Digital Marketing',
    author: 'Elizabeth Kilulu',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80',
    slug: 'digital-marketing-trends-2025'
  }, {
    id: '2',
    title: 'Building a Strong Brand Identity',
    excerpt: 'Learn how to create a memorable brand that resonates with your target audience.',
    category: 'Branding',
    author: 'Ranjit Ramachandran',
    date: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    slug: 'building-strong-brand-identity'
  }
  // Add more mock posts as needed
  ];
  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(post => post.category === activeCategory);
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and success stories
            in marketing and brand development.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map(category => <Button key={category} variant={activeCategory === category ? 'primary' : 'outline'} size="sm" onClick={() => setActiveCategory(category)}>
              {category}
            </Button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => <BlogCard key={post.id} {...post} />)}
        </div>
      </div>
    </section>;
};