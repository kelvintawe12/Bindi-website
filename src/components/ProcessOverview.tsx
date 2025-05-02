import React from 'react';
import { BookOpenIcon, UsersIcon, GlobeIcon, HandIcon, HeartIcon, ChartBarIcon } from 'lucide-react';

export function ProcessOverview() {
  const processSteps = [
    {
      title: 'Initiative Overview',
      description:
        'Bindi is expanding access to educational materials in Rwanda by collecting and redistributing 1000 gently used books to underserved schools and learning centers.',
      icon: <BookOpenIcon className="h-8 w-8 text-coral-500" />,
    },
    {
      title: 'Problem Statement',
      description:
        'Many children in Rwanda face literacy challenges due to poverty and lack of access to educational materials, especially in rural areas.',
      icon: <UsersIcon className="h-8 w-8 text-coral-500" />,
    },
    {
      title: 'Project Goals',
      description:
        'Recycle and redistribute books, promote a culture of reading, and involve students and institutions in a sustainable community initiative.',
      icon: <GlobeIcon className="h-8 w-8 text-coral-500" />,
    },
    {
      title: 'Target Communities',
      description:
        'Focus on Musanze District and Kibeho Sector, areas with high poverty rates and limited access to educational resources.',
      icon: <HandIcon className="h-8 w-8 text-coral-500" />,
    },
    {
      title: 'Key Activities',
      description:
        'Organize book drives, sort and package materials, distribute to communities, and monitor impact through storytelling.',
      icon: <HeartIcon className="h-8 w-8 text-coral-500" />,
    },
    {
      title: 'Impact Vision',
      description:
        'Support over 500 children, redistribute 1,000 books, and contribute to Rwanda’s goal of achieving universal literacy by 2030.',
      icon: <ChartBarIcon className="h-8 w-8 text-coral-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Bindi Literacy Initiative
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Empowering communities in Rwanda by improving access to educational materials and fostering a culture of literacy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}