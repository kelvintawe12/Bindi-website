import React from 'react';

export function PortfolioPreview() {
  const portfolioItems = [
    {
      title: 'BINDI: Expanding Access to Educational Materials in Rwanda',
      category: 'Social Impact',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      description: `The Bindi Initiative is a social impact project dedicated to combating literacy challenges in Rwanda by improving access to quality educational materials. The initiative aims to collect and redistribute 1000 gently used books to underprivileged schools and learning centers, promoting literacy and reducing educational inequalities.`,
    },
    {
      title: 'TechVision Kenya Rebrand',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
    },
    {
      title: 'Safari Solutions PR Campaign',
      category: 'Public Relations',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'EcoSolutions Africa Social Media',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore some of our recent success stories and see how we've helped
            businesses and communities achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-yellow-500 text-sm font-medium mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white text-sm mb-4">
                      {item.description}
                    </p>
                  )}
                  <a
                    href="#"
                    className="inline-flex items-center text-white hover:text-coral-500 transition-colors"
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center text-blue-900 hover:text-coral-500 font-medium transition-colors"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}