import React from 'react';
import { BookOpen, Globe, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Bindi Literacy Initiative
            </h2>
            <p className="text-gray-700 mb-6">
              The Bindi Literacy Initiative is a social impact project by Bindi, an educational venture dedicated to creating engaging and culturally relevant activity and coloring books for children. Building on its success in Cameroon, Bindi is now expanding into Rwanda to combat literacy challenges by improving access to quality educational materials for underserved communities.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-coral-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To reduce educational inequalities, encourage a reading culture, and empower young learners with the tools they need to thrive by redistributing 1,000 gently used books to underprivileged schools and learning centers across Rwanda.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-coral-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To inspire a future where every child, regardless of their background, can read, imagine, and grow, contributing to Rwanda’s goal of achieving universal literacy by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">1,000+</h3>
              <p className="text-gray-700">Books to Redistribute</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">500+</h3>
              <p className="text-gray-700">Children Supported</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">4+</h3>
              <p className="text-gray-700">Schools & Centers Reached</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-coral-500 mb-2">2+</h3>
              <p className="text-gray-700">Target Communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
