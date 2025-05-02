import React from 'react';
import { SearchIcon, TargetIcon, PaletteIcon, CodeIcon, RocketIcon, AwardIcon } from 'lucide-react';
export function ProcessOverview() {
  const processSteps = [{
    title: 'Discover',
    description: 'We begin by understanding your business, goals, and challenges.',
    icon: <SearchIcon className="h-8 w-8 text-coral-500" />
  }, {
    title: 'Define',
    description: 'We outline a clear plan of action tailored to your specific needs.',
    icon: <TargetIcon className="h-8 w-8 text-coral-500" />
  }, {
    title: 'Design',
    description: 'Our team crafts creative strategies that align with your objectives.',
    icon: <PaletteIcon className="h-8 w-8 text-coral-500" />
  }, {
    title: 'Develop',
    description: 'We implement the strategies, ensuring all components work seamlessly.',
    icon: <CodeIcon className="h-8 w-8 text-coral-500" />
  }, {
    title: 'Deploy',
    description: 'We launch the campaign or service, monitoring its progress closely.',
    icon: <RocketIcon className="h-8 w-8 text-coral-500" />
  }, {
    title: 'Deliver',
    description: 'We provide results-driven solutions and continuously refine our approach.',
    icon: <AwardIcon className="h-8 w-8 text-coral-500" />
  }];
  return <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our 6-D Process
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We follow a systematic approach to ensure your marketing needs are
            met with excellence and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}