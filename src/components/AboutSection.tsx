import React from 'react';
import { Target, Star } from 'lucide-react';
export function AboutSection() {
  return <section className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Royal Communications
            </h2>
            <p className="text-gray-700 mb-6">
              Royal Communications Ltd. is a Kenyan marketing powerhouse,
              dedicated to delivering top-tier marketing solutions for
              businesses across all industries and scales. Founded in 2025 by
              Elizabeth Kilulu and Ranjit Ramachandran, we've established
              ourselves as a leading force in the marketing industry.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="h-6 w-6 text-coral-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To elevate brands and empower growth by providing
                    personalized, results-driven marketing solutions that create
                    lasting success.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="h-6 w-6 text-coral-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be the most innovative and results-driven marketing
                    agency, revolutionizing brand storytelling and digital
                    engagement across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">5+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">100+</h3>
              <p className="text-gray-700">Satisfied Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">250+</h3>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">15+</h3>
              <p className="text-gray-700">Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}